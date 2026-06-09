# 🌐 Charles Dimayuga — Portfolio Website

A personal portfolio website built with a modern full-stack React setup, featuring smooth animations, accessible UI components, and a clean developer experience.

🔗 **Live Demo:** [portfolio-website-three-gilt-27.vercel.app](https://portfolio-website-l6jl.vercel.app/)

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/start) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | Radix UI + shadcn/ui |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form + Zod |
| **Routing** | TanStack Router |
| **Build Tool** | Vite 7 |
| **Package Manager** | Bun |
| **Deployment** | Vercel + Cloudflare |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Bun](https://bun.sh/) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/charlesdimayuga3201/portfolio_website.git
cd portfolio_website

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
bun build
# or
npm run build
```

### Preview Production Build

```bash
bun preview
# or
npm run preview
```

---

## 📁 Project Structure

```
portfolio_website/
├── api/              # API routes / server functions
├── public/
│   └── files/        # Static assets (resume, etc.)
├── src/              # Main source code
│   ├── components/   # Reusable UI components
│   ├── routes/       # TanStack Router file-based routes
│   └── ...
├── vite.config.ts    # Vite configuration
├── vercel.json       # Vercel deployment config
└── wrangler.jsonc    # Cloudflare Workers config
```

---

## 🎨 Features

- ⚡ Fast page loads with Vite + TanStack Start SSR
- 🎭 Smooth animations powered by Framer Motion
- ♿ Fully accessible components via Radix UI
- 📱 Responsive design with Tailwind CSS v4
- 🌙 Clean, minimal developer-focused design
- 📬 Contact form with validation (React Hook Form + Zod)
- 🚀 Deployed on Vercel with Cloudflare edge support

---

## 📦 Scripts

| Command | Description |
|---|---|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun build:dev` | Build in development mode |
| `bun preview` | Preview production build locally |
| `bun lint` | Run ESLint |
| `bun format` | Format code with Prettier |

---

## 🚢 Deployment

This project is deployed on **Vercel**. Push to `main` and it auto-deploys.

For Cloudflare Workers deployment, configure `wrangler.jsonc` and run:

```bash
bunx wrangler deploy
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Charles Dimayuga**

- GitHub: [@charlesdimayuga3201](https://github.com/charlesdimayuga3201)
- Portfolio: [portfolio-website-three-gilt-27.vercel.app](https://portfolio-website-l6jl.vercel.app/)
- Email: dimayugacharleskeane@gmail.com