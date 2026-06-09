# 🚀 Charles Dimayuga - Portfolio Website

<div align="center">

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A **modern, responsive portfolio website** showcasing full-stack development skills, projects, and professional experience with an elegant UI and smooth animations.

[🌐 View Live Demo](#) • [📧 Contact](#contact) • [💼 My Projects](#features)

</div>

---

## 📋 About

This is a **personal portfolio website** designed to present my professional profile as a full-stack developer. The site features a modern, minimalist design with smooth animations and intuitive navigation. It serves as a central hub to showcase my skills, completed projects, work experience, and provides an easy way for potential employers and collaborators to get in touch.

**Built with:**
- Modern React with TypeScript
- Server-side rendering capabilities
- Beautiful UI components and animations
- Fully responsive and mobile-optimized
- Deployed on Cloudflare Workers

---

## ✨ Features

- **Hero Section** - Eye-catching landing with typing animation
- **About Me** - Detailed professional background and bio
- **Skills Showcase** - Technical skills organized by category
- **Project Portfolio** - Detailed project cards with links and descriptions
- **Experience Timeline** - Professional work experience and achievements
- **Contact Section** - Easy way to reach out via email or social links
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark color scheme with gradient accents
- **Smooth Animations** - Framer Motion animations for enhanced UX
- **TypeScript Support** - Fully typed for better developer experience

---

## 🛠️ Tech Stack

### Frontend
- **[React 18+](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[TanStack Router](https://tanstack.com/router)** - Routing
- **[TanStack React Query](https://tanstack.com/query)** - Data fetching
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[Radix UI](https://www.radix-ui.com)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion)** - Animations
- **[Lucide Icons](https://lucide.dev)** - Icon library

### Build & Deployment
- **[Vite](https://vitejs.dev)** - Build tool
- **[TanStack Start](https://tanstack.com/start)** - Full-stack framework
- **[Cloudflare Workers](https://workers.cloudflare.com)** - Deployment platform
- **[Tailwind CSS Vite](https://github.com/tailwindlabs/tailwindcss-vite)** - CSS processing

### Tools & Configuration
- **[ESLint](https://eslint.org)** - Code linting
- **[Prettier](https://prettier.io)** - Code formatting
- **[pnpm](https://pnpm.io)** - Package manager

---

## 📸 Screenshots & Demo

```
┌─────────────────────────────────────────┐
│  🌐 Live Preview                        │
│  ┌─────────────────────────────────────┐│
│  │ Charles Keane Dimayuga              ││
│  │ Full-Stack Developer                ││
│  │                                     ││
│  │ [View Projects] [Resume] [Contact] ││
│  └─────────────────────────────────────┘│
│                                         │
│  ✨ Features: Responsive • Dark Mode   │
│     Smooth Animations • Modern Design  │
└─────────────────────────────────────────┘
```

> 📱 **Fully responsive** - Works seamlessly on all screen sizes  
> 🎨 **Modern design** - Clean UI with gradient accents  
> ⚡ **Fast performance** - Optimized for speed and UX  

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ or **pnpm** 8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/charlesdimayuga3201/portfolio_website.git
   cd portfolio_website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Preview production build**
   ```bash
   pnpm run preview
   ```

---

## 📖 Usage

### Navigation
- **Home** - Hero section with introduction and CTA buttons
- **About** - Professional background and personal summary
- **Skills** - Technical skills by category (Frontend, Backend, Tools, etc.)
- **Projects** - Portfolio of completed projects with descriptions and links
- **Experience** - Timeline of professional work experience
- **Contact** - Contact form and social media links

### Customization

To personalize the portfolio, edit the following files:

**Personal Information:**
- [src/routes/index.tsx](src/routes/index.tsx) - Main page layout
- [src/components/portfolio/HeroSection.tsx](src/components/portfolio/HeroSection.tsx) - Hero content and roles

**Content Sections:**
- [src/components/portfolio/AboutSection.tsx](src/components/portfolio/AboutSection.tsx) - About me
- [src/components/portfolio/SkillsSection.tsx](src/components/portfolio/SkillsSection.tsx) - Skills
- [src/components/portfolio/ProjectsSection.tsx](src/components/portfolio/ProjectsSection.tsx) - Projects
- [src/components/portfolio/ExperienceSection.tsx](src/components/portfolio/ExperienceSection.tsx) - Work experience
- [src/components/portfolio/ContactSection.tsx](src/components/portfolio/ContactSection.tsx) - Contact info

**Styling:**
- [src/styles.css](src/styles.css) - Theme colors and Tailwind configuration

---

## 📁 Folder Structure

```
portfolio_website/
├── src/
│   ├── components/
│   │   ├── portfolio/           # Main portfolio sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   └── hooks/              # Custom React hooks
│   ├── lib/                    # Utilities and helpers
│   ├── routes/                 # TanStack Router routes
│   ├── styles.css              # Global styles
│   ├── server.ts               # Server entry point
│   └── start.ts                # Client entry point
├── public/                     # Static assets
│   └── files/                  # Resume and documents
├── api/                        # Cloudflare Worker handlers
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies
```

---

## 🔧 Available Scripts

```bash
# Development
pnpm run dev              # Start dev server with HMR

# Production
pnpm run build            # Build for production
pnpm run build:dev        # Build in development mode
pnpm run preview          # Preview production build locally

# Code Quality
pnpm run lint             # Run ESLint
pnpm run format           # Format code with Prettier
```

---

## 🎯 Future Improvements

- [ ] Add blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering by technology
- [ ] Create testimonials section
- [ ] Add analytics tracking
- [ ] Implement contact form backend
- [ ] Add search functionality
- [ ] Performance optimization (image lazy-loading)
- [ ] Add case studies for major projects
- [ ] Integration with GitHub API for live project data

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:
- Report issues or bugs
- Suggest new features or improvements
- Submit pull requests with enhancements

---

## 📧 Contact

Let's connect! Reach out through any of these channels:

- **GitHub** - [@charlesdimayuga3201](https://github.com/charlesdimayuga3201)
- **LinkedIn** - [Charles Dimayuga](https://linkedin.com/in/charles-dimayuga)
- **Email** - [your.email@example.com](mailto:your.email@example.com)
- **Twitter** - [@yourtwitterhandle](https://twitter.com)

Feel free to open an issue or reach out directly!

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

MIT License © 2024 Charles Keane Dimayuga

---

<div align="center">

**[⬆ back to top](#charles-dimayuga---portfolio-website)**

Made with ❤️ by [Charles Dimayuga](https://github.com/charlesdimayuga3201)

</div>

