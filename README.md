# Logan's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring a beautiful hero section and project showcase.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Hero Section**: Eye-catching centerpiece with profile photo placeholder
- **Projects Showcase**: Grid layout displaying projects with descriptions and links
- **Smooth Animations**: Hover effects and smooth transitions
- **TypeScript**: Built with TypeScript for better development experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd logan-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add your profile photo:
   - Place your photo in the `public` folder as `profile-photo.jpg`
   - Recommended size: 400x400px or larger (square aspect ratio)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Projects

Edit `app/page.tsx` to customize your projects:

```tsx
<div className="project-card">
  <h3 className="project-title">Your Project Name</h3>
  <p className="project-description">
    Your project description here...
  </p>
  <div className="project-links">
    <a href="your-live-demo-url" className="project-link">Live Demo</a>
    <a href="your-github-url" className="project-link secondary">GitHub</a>
  </div>
</div>
```

### Updating Personal Information

1. **Name**: Change "Logan" in `app/page.tsx` (hero-title)
2. **Title**: Update the subtitle in the hero section
3. **Description**: Modify the hero description text
4. **Profile Photo**: Replace `public/profile-photo.jpg` with your photo

### Styling

The main styles are in `app/globals.css`. You can customize:
- Colors and gradients
- Fonts and typography
- Spacing and layout
- Animations and transitions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## Project Structure

```
logan-portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/
│   └── profile-photo.jpg # Your profile photo
├── package.json
├── next.config.js
└── tsconfig.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

---

Built with ❤️ by Logan


