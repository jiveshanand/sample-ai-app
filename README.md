# Java Server Tutorial: Enhanced Static Website 🚀✨

An interactive, beautifully designed educational web app based on the Happy Coding Java Server tutorial. This enhanced version transforms a simple static website tutorial into a comprehensive learning experience with stunning animations and rich educational content.

## Features

### 📚 Educational Content
- **What is a Static Website** - Clear explanation of static web applications
- **Code Examples** - Live HTML code demonstrations with syntax highlighting
- **Key Concepts** - In-depth coverage of:
  - Web app anatomy
  - Static vs dynamic websites
  - Server roles and responsibilities
  - Context paths and URL structures
- **Deployment Guide** - Step-by-step instructions for Tomcat and Jetty servers
- **Learning Path** - Clear next steps including Servlets, JSP, Databases, and Cloud deployment
- **Feature Highlights** - Interactive cards showcasing benefits of static websites
- **Resources** - Links to the original Happy Coding tutorial series

### 🎨 Beautiful Styling
- **Animated Gradient Background** - Smooth, flowing gradient that shifts colors
- **Glassmorphism Cards** - Modern frosted glass effect with backdrop blur
- **Responsive Design** - Looks great on all screen sizes
- **Custom Scrollbar** - Beautiful gradient scrollbar for navigation
- **Color-Coded Sections** - Each section has unique gradient themes

### ✨ Fancy Animations
1. **Letter-by-Letter Animation** - Each letter in "Happy Coding" animates individually
2. **Floating Particles** - 30+ animated particles floating in the background
3. **Card Entrance** - 3D card entrance with scale and rotation
4. **Shine Effect** - Elegant shine that sweeps across the card
5. **Gradient Text** - Animated rainbow gradient on the title
6. **Pulse Animation** - Gentle pulsing effect on the "Hello world!" message
7. **Floating Emojis** - Interactive emojis that float around the screen
8. **Staggered Fade-In** - Content sections fade in sequentially as you scroll
9. **Feature Card Animations** - Spinning icons and bouncing effects
10. **Step Number Rotation** - Next steps cards with rotating numbered badges
11. **Hover Effects** - Interactive hover states on all elements
12. **Decorative Elements** - Animated orbs that float around the card
13. **Smooth Transitions** - Buttery smooth animations throughout

### 🎯 Interactive Elements
- Hover over letters to see them jump
- Hover over emojis to see them scale and rotate
- Hover over feature cards to see icons spin
- Hover over step numbers to see 360° rotation
- Hover over links to see gradient underlines
- Scrollable content card with smooth scrolling

## Tech Stack

- **React 18.2** - Modern React with hooks
- **Vite 5** - Lightning-fast build tool
- **CSS3** - Advanced animations and effects
- **Google Fonts** - Poppins font family

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Docker

### Using Docker

Build and run the application in a container:

```bash
# Build the Docker image
docker build -t sample-ai-app .

# Run the container
docker run -p 8080:80 sample-ai-app
```

Then open your browser to `http://localhost:8080`

### Using Docker Compose

For easier local development:

```bash
# Start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The app will be available at `http://localhost:8080`

## CI/CD Pipeline

This project includes a GitHub Actions workflow that:
- Builds and tests the application on every push
- Creates Docker images and pushes them to GitHub Container Registry
- Runs on push to main branches and pull requests

The workflow is defined in `.github/workflows/ci-cd.yml`

## Project Structure

```
sample-ai-app/
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── src/
    ├── main.jsx        # App entry point
    ├── index.css       # Global styles
    ├── App.jsx         # Main component with educational content
    └── App.css         # Component styles and animations (900+ lines!)
```

## Content Sections

1. **Hero Section** - Animated "Happy Coding" title with "Hello world!" message
2. **Description** - Introduction to static websites
3. **Code Example** - Basic HTML structure with syntax highlighting
4. **Features Grid** - Four key benefits of static websites
5. **Deployment Section** - Server deployment instructions for Tomcat and Jetty
6. **Key Concepts** - Four fundamental web development concepts
7. **Next Steps** - Four learning paths with numbered badges
8. **Resources** - Links to Happy Coding tutorial series

## Animations Breakdown

### Background Effects
- **Gradient Shift** - 15s infinite gradient animation
- **Particle Float** - Individual floating particles with random positions

### Card Animations
- **Entrance** - Scale + rotate animation on load
- **Hover Lift** - Elevates and scales on hover
- **Shine Sweep** - Continuous diagonal shine effect
- **Scrollbar** - Custom gradient scrollbar with hover effects

### Text Animations
- **Letter Bounce** - Individual letter animations with staggered delays
- **Gradient Flow** - Animated gradient on text
- **Pulse** - Breathing effect on the message
- **Fade-In Cascade** - Sequential fade-in for each section

### Content Animations
- **Feature Cards** - Bouncing icons that spin on hover
- **Step Cards** - Top border animation and rotating numbered badges
- **Concept List** - Slide-in effect on hover with color transitions
- **Code Block** - Glow effect on hover
- **Links** - Gradient underline animation

### Decorative Effects
- **Floating Orbs** - 4 colored orbs with independent animations
- **Emoji Float** - Floating emojis with rotation
- **Server Cards** - Lift and glow effects on hover

## Customization

You can easily customize the colors, animations, and content by modifying:
- `src/App.css` - All styling and animation definitions
- `src/App.jsx` - Component structure and content

## Browser Support

Works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT License - Feel free to use this project however you'd like!

## Credits

Based on the Happy Coding tutorial: [Hello World Static Website](https://happycoding.io/tutorials/java-server/web-app/hello-world-static-website)

Created with ❤️ using React and modern web technologies.
