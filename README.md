# ✨ MoodFlow

**Share your vibe with the world in real-time**

MoodFlow is a novel real-time collaborative mood visualization application powered by PubNub. It creates an immersive, interactive canvas where people from around the world can share their emotional states and watch as their collective vibes create a beautiful, ever-evolving visual landscape.

## 🌟 Features

### Real-Time Particle System
- **Interactive Canvas**: Click anywhere on the canvas or use vibe buttons to send emotional particles
- **Physics Simulation**: Particles with realistic gravity, bounce, and decay
- **Visual Effects**: Glowing particles with rotation and transparency effects
- **Synchronized Across Users**: See everyone's vibes in real-time

### Multiple Themed Rooms
- **🌌 Cosmic** - Purple and blue gradient for stellar vibes
- **🌊 Chill** - Cool blue tones for relaxation
- **⚡ Energetic** - Warm yellows and oranges for high energy
- **🧘 Zen** - Green gradient for peaceful moments
- **🎉 Party** - Bold reds and pinks for celebration

### Live Mood Wave
- **Collective Visualization**: See the aggregated emotional state as a flowing wave
- **Color-Coded**: Different vibes create different wave patterns
- **Smooth Animation**: Dynamically updated based on incoming vibes

### Real-Time Messaging
- **Live Feed**: See recent vibes as they're sent
- **Presence Detection**: Know how many people are online in your room
- **Cross-Platform**: Works across all devices and screen sizes

## 🚀 How It Works

1. **Choose a Room**: Select from 5 different themed rooms based on your current mood
2. **Send Vibes**: Click vibe buttons or click anywhere on the canvas to send emotional particles
3. **Watch the Magic**: See your vibes and others' vibes create a mesmerizing particle show
4. **Observe the Wave**: The collective mood wave shows the overall emotional energy of the room

## 🛠️ Technology

- **PubNub**: Real-time messaging and presence detection
- **Canvas API**: Hardware-accelerated particle rendering and wave visualization
- **Vanilla JavaScript**: No frameworks, pure performance
- **CSS3 Animations**: Smooth, modern interface
- **Responsive Design**: Works on desktop, tablet, and mobile

## 📖 Usage

Simply open `index.html` in a modern web browser. No installation or build process required!

```bash
# Open in your browser
open index.html

# Or use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 🎨 Vibe Types

- 😊 **Happy** - Spread joy and positivity
- 💖 **Love** - Share the love
- 🔥 **Fire** - Bring the energy
- 🌈 **Rainbow** - Celebrate diversity
- ⭐ **Star** - Shine bright
- 💫 **Magic** - Create wonder
- 🎵 **Music** - Feel the rhythm
- 🌺 **Flower** - Bloom together

## 🌐 PubNub Integration

MoodFlow uses PubNub's demo keys for instant connectivity:
- **Publish Key**: `demo`
- **Subscribe Key**: `demo`

Each room is a separate channel (`moodflow_{roomname}`) with presence enabled to track active users.

## 🎯 Novel Features

1. **Particle Physics**: Each vibe is a physics-simulated particle with gravity, bounce, and rotation
2. **Collective Wave**: A unique visualization showing the aggregated emotional state
3. **Multi-Room Architecture**: Different themed spaces for different moods
4. **Click-to-Send**: Interactive canvas where clicks create instant vibes
5. **Visual Feedback**: Beautiful animations and effects for every interaction
6. **Background Ambience**: Subtle animated background effects that respond to time

## 🔮 Future Ideas

- **Voice-Activated Vibes**: Send vibes with voice commands
- **Custom Emoji Creator**: Draw your own vibe emojis
- **Vibe Analytics**: See mood trends over time
- **Sound Effects**: Audio feedback for different vibes
- **AR Mode**: Project vibes into augmented reality
- **Vibe Battles**: Competitive mood-sharing games

## 📱 Browser Support

Works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Credits

Built with ❤️ using PubNub's real-time messaging platform.

---

**Start spreading vibes today! 🌟**
