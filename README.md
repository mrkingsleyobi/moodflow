# ✨ MoodFlow - Real-Time Collaborative Mood Visualization Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PubNub](https://img.shields.io/badge/PubNub-Powered-red.svg)](https://www.pubnub.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> **Share emotions in real-time** - A live collaborative mood tracker and emotional wellness visualization platform

MoodFlow is a groundbreaking **real-time collaborative mood visualization platform** that combines emotional wellness tracking with live social interaction. Using WebSocket technology via PubNub, it creates an immersive, interactive canvas where people worldwide can share their emotional states and watch as their collective vibes create a beautiful, ever-evolving visual landscape.

Perfect for **peer-to-peer emotional wellness**, **real-time mood sharing with friends**, **group therapy sessions**, **remote team bonding**, or simply **connecting with others who share your vibe**.

## 🎯 Why MoodFlow?

- **🔴 LIVE**: Real-time synchronization - see emotions as they happen
- **👥 COLLABORATIVE**: Share your mood with others, not just track it alone
- **🎨 VISUAL**: Beautiful particle physics and wave visualizations
- **🌍 GLOBAL**: Connect with anyone, anywhere, anytime
- **🆓 FREE**: No registration, no fees, just vibes
- **🔒 ANONYMOUS**: Share feelings without sharing identity
- **📱 RESPONSIVE**: Works on desktop, tablet, and mobile

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

## 🎓 Use Cases

### Personal Wellness
- **Daily Mood Check-ins**: Track your emotional patterns over time
- **Stress Relief**: Share burdens with an anonymous community
- **Mindfulness Practice**: Visual meditation through collective energy

### Social & Community
- **Friend Groups**: Stay emotionally connected with close friends
- **Support Networks**: Build connections with others experiencing similar feelings
- **Virtual Hangouts**: A new way to "vibe" together online

### Professional & Educational
- **Remote Teams**: Gauge team morale in real-time
- **Therapy Groups**: Facilitate group emotional expression
- **Classroom Settings**: Help students express feelings in a safe space
- **Wellness Programs**: Corporate mental health initiatives

## 🔬 Technology Stack

### Frontend
- **Vanilla JavaScript** - Zero framework dependencies for maximum performance
- **HTML5 Canvas API** - Hardware-accelerated particle rendering
- **CSS3 Animations** - Smooth, modern transitions and effects
- **Responsive Design** - Mobile-first approach

### Real-Time Infrastructure
- **PubNub SDK** - WebSocket-based pub/sub messaging
- **Presence Detection** - Know who's online in real-time
- **Channel Architecture** - Scalable room-based communication

### Performance Features
- **Particle Physics Engine** - Custom-built gravity and collision system
- **Optimized Rendering** - RequestAnimationFrame for smooth 60fps
- **Memory Management** - Automatic particle cleanup and lifecycle
- **Efficient Data Structures** - Minimal memory footprint

## 🚀 Getting Started

### Quick Start (No Installation!)
1. Visit [MoodFlow Live Demo](https://mrkingsleyobi.github.io/moodflow/)
2. Choose a vibe room that matches your mood
3. Click a vibe button or tap the canvas to share your emotions
4. Watch as your vibes sync with others in real-time!

### Local Development
```bash
# Clone the repository
git clone https://github.com/mrkingsleyobi/moodflow.git

# Navigate to directory
cd moodflow

# Open in browser (no build step required!)
open index.html

# Or use a local server
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deploy Your Own Instance
MoodFlow is a static web app - deploy anywhere:
- **GitHub Pages**: Fork and enable Pages in settings
- **Netlify/Vercel**: Connect your repo for instant deployment
- **Any Web Server**: Upload files to your hosting provider

## 🤝 Contributing

We welcome contributions! Whether it's:
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🌍 Translations

Please read our [Contributing Guide](CONTRIBUTING.md) and submit a pull request!

## 🔐 Privacy & Safety

- **No Account Required**: Start sharing immediately, no signup
- **Anonymous by Default**: No personally identifiable information collected
- **No Data Storage**: Messages are transient, not stored on servers
- **Client-Side Only**: Your data never leaves your browser except for real-time messages
- **Safe Space**: Emoji-based expression keeps interactions positive and light

## 📱 Browser Support

Works best in modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)


## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Credits & Acknowledgments

- Built with ❤️ using [PubNub](https://www.pubnub.com/)'s real-time messaging platform
- Inspired by the need for authentic emotional connection in digital spaces
- Thanks to the mental health and wellness tech community

## 📞 Connect & Support

- ⭐ Star this repo if you find it helpful!
- 🐛 [Report Issues](https://github.com/mrkingsleyobi/moodflow/issues)
- 💡 [Request Features](https://github.com/mrkingsleyobi/moodflow/issues/new)
- 🔀 [Submit Pull Requests](https://github.com/mrkingsleyobi/moodflow/pulls)

---

**Start spreading vibes today! 🌟** Try it now at [moodflow.app](https://mrkingsleyobi.github.io/moodflow/)
