# Sue - Fashion Designer Portfolio

A modern, responsive portfolio website for fashion designer Sue, built with Vue 3, Nuxt 3, and SCSS. Features a parallax scrolling design that showcases fashion collections and design projects.

## Features

- 🎨 **Parallax Scrolling**: Smooth section-by-section navigation with parallax effects
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- 🎭 **Portfolio Showcase**: Interactive portfolio items with modal details
- 🎨 **Modern UI**: Clean, elegant design using Bootstrap and custom SCSS
- ⚡ **Fast Performance**: Built with Vue 3 and Nuxt 3 for optimal performance
- 🌐 **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Tech Stack

- **Frontend**: Vue 3, Nuxt 3
- **Styling**: SCSS, Bootstrap 5
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Playfair Display, Open Sans)
- **Deployment**: GitHub Pages

## Project Structure

```
designer-sue/
├── assets/
│   └── scss/
│       └── main.scss          # Main SCSS styles
├── components/
│   ├── LoadingScreen.vue      # Loading animation
│   ├── Navbar.vue            # Navigation bar
│   ├── HeroSection.vue       # Hero/landing section
│   ├── PortfolioSection.vue  # Portfolio showcase
│   ├── AboutSection.vue      # About me section
│   ├── ContactSection.vue    # Contact form
│   └── Footer.vue            # Footer
├── composables/
│   └── useParallax.js        # Parallax scroll logic
├── data/
│   └── portfolio.js          # Portfolio data management
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
└── nuxt.config.ts           # Nuxt configuration
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/designer-sue.git
cd designer-sue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

1. Push your changes to the main branch
2. The GitHub Actions workflow will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/designer-sue/`

## Customization

### Adding New Portfolio Items

Edit the `data/portfolio.js` file to add new portfolio items:

```javascript
{
  id: 7,
  title: "New Collection",
  description: "Description of your new collection",
  image: "path/to/image.jpg",
  tags: ["Tag1", "Tag2", "Tag3"],
  year: "2024",
  category: "Category",
  githubUrl: "https://github.com/username/repo"
}
```

### Updating Designer Information

Modify the designer information in `data/portfolio.js`:

```javascript
designer: {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  phone: "+82 10-1234-5678",
  instagram: "@your_instagram",
  location: "Your Location"
}
```

### Styling

The main styles are in `assets/scss/main.scss`. You can customize:
- Color scheme
- Typography
- Layout
- Animations
- Responsive breakpoints

## Portfolio Data Management

The portfolio data is managed through a centralized JavaScript file (`data/portfolio.js`) that can be easily updated. This approach allows for:

- Easy content management
- Version control for portfolio updates
- Separation of content from code
- Easy integration with external data sources

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Sue - [@sue_designs](https://instagram.com/sue_designs) - sue@fashion.com

Project Link: [https://github.com/yourusername/designer-sue](https://github.com/yourusername/designer-sue)