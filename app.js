// MoodFlow - Real-time collaborative mood visualization
// Using PubNub for real-time messaging

class MoodFlow {
    constructor() {
        this.currentRoom = 'cosmic';
        this.particles = [];
        this.waveData = [];
        this.maxWaveData = 100;
        this.userId = this.generateUserId();

        // Canvas setup
        this.canvas = document.getElementById('vibeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.waveCanvas = document.getElementById('waveCanvas');
        this.waveCtx = this.waveCanvas.getContext('2d');

        this.resizeCanvases();
        window.addEventListener('resize', () => this.resizeCanvases());

        // Initialize PubNub
        this.initPubNub();

        // Setup event listeners
        this.setupEventListeners();

        // Start animation loops
        this.animate();
        this.animateWave();

        // Initialize wave data
        for (let i = 0; i < this.maxWaveData; i++) {
            this.waveData.push(0);
        }
    }

    generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    }

    initPubNub() {
        this.pubnub = new PubNub({
            publishKey: 'demo',
            subscribeKey: 'demo',
            userId: this.userId
        });

        // Subscribe to initial room
        this.subscribeToRoom(this.currentRoom);

        // Listen for messages
        this.pubnub.addListener({
            message: (event) => this.handleMessage(event),
            presence: (event) => this.handlePresence(event)
        });
    }

    subscribeToRoom(room) {
        // Unsubscribe from previous room
        if (this.currentRoom && this.currentRoom !== room) {
            this.pubnub.unsubscribe({
                channels: [`moodflow_${this.currentRoom}`]
            });
        }

        this.currentRoom = room;

        // Subscribe to new room with presence
        this.pubnub.subscribe({
            channels: [`moodflow_${room}`],
            withPresence: true
        });

        // Request presence count
        this.updatePresence();
    }

    updatePresence() {
        this.pubnub.hereNow({
            channels: [`moodflow_${this.currentRoom}`],
            includeUUIDs: true
        }).then((response) => {
            const occupancy = response.channels[`moodflow_${this.currentRoom}`]?.occupancy || 1;
            document.getElementById('onlineCount').textContent = occupancy;
        }).catch((error) => {
            console.log('Presence error:', error);
        });
    }

    handlePresence(event) {
        this.updatePresence();
    }

    handleMessage(event) {
        const { vibe, color, emoji, timestamp, userId } = event.message;

        // Don't process our own messages for visualization (but show in feed)
        if (userId !== this.userId) {
            this.createParticles(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                color,
                emoji
            );
        }

        // Add to message feed
        this.addToFeed(emoji, vibe, color, timestamp);

        // Update wave data
        this.updateWaveData(color);
    }

    sendVibe(vibe, color, emoji) {
        const message = {
            vibe,
            color,
            emoji,
            timestamp: Date.now(),
            userId: this.userId
        };

        this.pubnub.publish({
            channel: `moodflow_${this.currentRoom}`,
            message
        }).then(() => {
            // Create local particles for immediate feedback
            this.createParticles(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                color,
                emoji
            );

            // Add to local feed
            this.addToFeed(emoji, vibe, color, Date.now());

            // Update wave
            this.updateWaveData(color);
        }).catch((error) => {
            console.error('Publish error:', error);
        });
    }

    createParticles(x, y, color, emoji) {
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 2 + Math.random() * 3;

            this.particles.push({
                x,
                y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                color,
                emoji,
                life: 1,
                size: 10 + Math.random() * 20,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2
            });
        }

        document.getElementById('activeVibes').textContent = this.particles.length;
    }

    updateWaveData(color) {
        // Convert color to brightness value
        const brightness = this.colorToBrightness(color);
        this.waveData.push(brightness);
        if (this.waveData.length > this.maxWaveData) {
            this.waveData.shift();
        }
    }

    colorToBrightness(color) {
        // Simple color to brightness conversion
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return (r + g + b) / 3 / 255;
    }

    addToFeed(emoji, vibe, color, timestamp) {
        const messageList = document.getElementById('messageList');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.style.borderLeftColor = color;

        const time = new Date(timestamp).toLocaleTimeString();

        messageDiv.innerHTML = `
            <span class="message-emoji">${emoji}</span>
            <span class="message-text">${vibe} vibe</span>
            <span class="message-time">${time}</span>
        `;

        messageList.insertBefore(messageDiv, messageList.firstChild);

        // Keep only last 20 messages
        while (messageList.children.length > 20) {
            messageList.removeChild(messageList.lastChild);
        }
    }

    animate() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // Update
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // Gravity
            p.life -= 0.01;
            p.rotation += p.rotationSpeed;

            // Draw
            if (p.life > 0) {
                this.ctx.save();
                this.ctx.globalAlpha = p.life;
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.rotation);

                // Draw glow
                this.ctx.shadowBlur = 20;
                this.ctx.shadowColor = p.color;

                // Draw emoji or circle
                if (p.emoji) {
                    this.ctx.font = `${p.size}px Arial`;
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText(p.emoji, 0, 0);
                } else {
                    this.ctx.fillStyle = p.color;
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                    this.ctx.fill();
                }

                this.ctx.restore();
            } else {
                this.particles.splice(i, 1);
            }
        }

        document.getElementById('activeVibes').textContent = this.particles.length;

        requestAnimationFrame(() => this.animate());
    }

    animateWave() {
        const width = this.waveCanvas.width;
        const height = this.waveCanvas.height;
        const ctx = this.waveCtx;

        // Clear
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, width, height);

        // Draw wave
        ctx.beginPath();
        ctx.moveTo(0, height);

        const segmentWidth = width / this.maxWaveData;

        for (let i = 0; i < this.waveData.length; i++) {
            const x = i * segmentWidth;
            const value = this.waveData[i];
            const y = height - (value * height * 0.8) - (height * 0.1);

            if (i === 0) {
                ctx.lineTo(x, y);
            } else {
                // Smooth curve
                const prevX = (i - 1) * segmentWidth;
                const prevValue = this.waveData[i - 1];
                const prevY = height - (prevValue * height * 0.8) - (height * 0.1);
                const cpX = (prevX + x) / 2;

                ctx.quadraticCurveTo(cpX, prevY, x, y);
            }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(135, 206, 250, 0.6)');
        gradient.addColorStop(1, 'rgba(135, 206, 250, 0.1)');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Stroke
        ctx.strokeStyle = 'rgba(135, 206, 250, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        requestAnimationFrame(() => this.animateWave());
    }

    resizeCanvases() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.waveCanvas.width = this.waveCanvas.offsetWidth;
        this.waveCanvas.height = this.waveCanvas.offsetHeight;
    }

    setupEventListeners() {
        // Vibe buttons
        document.querySelectorAll('.vibe-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const vibe = btn.textContent.trim();
                const emoji = btn.dataset.vibe;
                const color = btn.dataset.color;
                this.sendVibe(vibe, color, emoji);
            });
        });

        // Room buttons
        document.querySelectorAll('.room-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.room-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const room = btn.dataset.room;
                this.subscribeToRoom(room);

                // Clear particles and messages on room change
                this.particles = [];
                document.getElementById('messageList').innerHTML = '';
            });
        });

        // Canvas click to create local burst
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const colors = ['#FFD700', '#FF69B4', '#FF4500', '#9370DB', '#87CEEB'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            this.createParticles(x, y, randomColor, '✨');
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MoodFlow();
});
