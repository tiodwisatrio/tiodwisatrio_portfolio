<div align="center">
  <br />
  <h1>🚀 Tio Dwi Satrio - Personal Portfolio</h1>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Modern, Performant & Interactive Portfolio Website</h3>

  <p align="center">
    A showcase of my skills, projects, and services as a Full Stack Developer
  </p>
</div>

## 📋 Table of Contents

1. [About](#about)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Performance](#performance)
5. [Getting Started](#getting-started)
6. [Project Structure](#project-structure)
7. [Customization](#customization)
8. [Contact](#contact)

## 🎯 About

Welcome to my personal portfolio! This website represents my journey and expertise as a Full Stack Developer specializing in modern web technologies. Built with performance and user experience in mind, this portfolio showcases my real-world projects and the services I offer to clients worldwide.

**Key Highlights:**

- ⚡ Lighthouse Performance Score: **89/100**
- ♿ Accessibility Score: **100/100**
- 🔍 SEO Score: **100/100**
- ✨ Interactive 3D elements and smooth animations
- 📱 Fully responsive across all devices

## ⚙️ Tech Stack

This portfolio leverages cutting-edge technologies to deliver an exceptional user experience:

### Core Technologies

- **Framework:** Next.js 14 (App Router) - React framework for production
- **Language:** TypeScript - Type-safe JavaScript
- **Styling:** Tailwind CSS - Utility-first CSS framework

### Libraries & Tools

- **Animations:** Framer Motion - Production-ready motion library
- **3D Graphics:** Three.js + React Three Fiber - WebGL 3D graphics
- **UI Components:** Custom components with modern design patterns
- **Icons:** React Icons - Popular icon packs
- **Performance:** Dynamic imports, code splitting, lazy loading

### Performance Optimizations

- Webpack configured for optimal bundle splitting
- Image optimization with Next.js Image component (AVIF/WebP)
- CSS optimization with Critters for critical CSS inlining
- Lazy loading for heavy components (Three.js, animations)

## 🔋 Features

### 🎨 Visual Excellence

**Hero Section**

- Eye-catching spotlight effect
- Animated gradient background
- Smooth scroll animations
- Call-to-action buttons

**Interactive 3D Globe**

- GitHub-style globe using Three.js
- Real-time rendering with React Three Fiber
- Smooth rotation and interaction

**Modern UI Components**

- Bento grid layout for about section
- Moving border effects on service cards
- Glassmorphism design elements
- Smooth page transitions with Framer Motion

### 💼 Content Sections

**About Section**

- Personal introduction
- Tech stack showcase with animated icons
- Professional background
- Contact information with email copy functionality

**Projects Showcase**

- Real-world project portfolio
- Live demo links
- Tech stack used per project
- Project descriptions and outcomes

**Services Section**

- Website Development
- Mobile App Development
- UI/UX Design
- Consultancy Services

**Approach Section**

- Development methodology
- Interactive canvas effects
- Phase-by-phase breakdown

### ⚡ Performance Features

- **Code Splitting:** Separate bundles for React, Three.js, and Framer Motion
- **Lazy Loading:** Components load only when needed
- **Image Optimization:** Automatic AVIF/WebP conversion
- **SEO Optimized:** Meta tags, structured data, sitemap
- **Accessibility:** WCAG compliant, keyboard navigation, screen reader support

### 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-optimized interactions
- Optimized performance on mobile devices

## 📊 Performance

**Lighthouse Audit Results:**

- 🟢 **Performance:** 89/100
- 🟢 **Accessibility:** 100/100
- 🟢 **Best Practices:** 96/100
- 🟢 **SEO:** 100/100

**Key Metrics:**

- JavaScript execution time: ~3.5s
- First Contentful Paint: Optimized
- Largest Contentful Paint: Optimized
- Total Blocking Time: Minimized
- Cumulative Layout Shift: < 0.1

**Bundle Optimization:**

- Framework chunk: 141 KB (React/React-DOM)
- Three.js chunk: 813 KB (lazy loaded)
- Animations chunk: 129 KB (Framer Motion)
- Total First Load JS: 449 KB

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js 18+
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/tiodwisatrio/tiodwisatrio_portfolio.git
cd tiodwisatrio_portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
# Sentry (Optional - for error monitoring)
NEXT_PUBLIC_SENTRY_ENABLED=false
SENTRY_AUTH_TOKEN=your_token_here
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── api/                 # API routes (if any)
│
├── components/              # React components
│   ├── ui/                 # Reusable UI components
│   │   ├── BentoGrid.tsx   # Grid layout component
│   │   ├── FloatingNavbar.tsx
│   │   ├── Globe.tsx       # 3D Globe component
│   │   ├── MovingBorders.tsx
│   │   └── ...             # Other UI components
│   ├── Hero.tsx            # Hero section
│   ├── Grid.tsx            # About section
│   ├── RecentProjects.tsx  # Projects showcase
│   ├── Experience.tsx      # Services section
│   ├── Approach.tsx        # Approach section
│   └── Footer.tsx          # Footer with contact
│
├── data/                   # Content and data
│   └── index.ts           # Site content (projects, services, etc.)
│
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
│
├── public/               # Static assets
│   ├── *.svg            # SVG icons and images
│   └── ...              # Other static files
│
├── middleware.ts        # Next.js middleware (compression, headers)
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Update Content

Edit `data/index.ts` to customize:

```typescript
// Navigation items
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

// Your projects
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    des: "Project description",
    img: "/project-image.svg",
    iconLists: ["/tech1.svg", "/tech2.svg"],
    link: "https://your-project-link.com",
  },
  // Add more projects...
];

// Your services
export const workExperience = [
  {
    id: 1,
    title: "Service Name",
    desc: "Service description",
    thumbnail: "/service-icon.svg",
  },
  // Add more services...
];
```

### Modify Styles

**Global Styles:** `app/globals.css`

```css
@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }
}
```

**Tailwind Config:** `tailwind.config.ts`

```typescript
theme: {
  extend: {
    colors: {
      purple: "#CBACF9",
      // Add your custom colors
    },
  },
}
```

### Add New Sections

1. Create a new component in `components/`
2. Import in `app/page.tsx`
3. For heavy components, use dynamic import:

```typescript
const NewSection = dynamic(() => import("@/components/NewSection"), {
  ssr: false,
  loading: () => <div className="py-20">Loading...</div>,
});
```

### Update SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Your description",
  keywords: ["Next.js", "React", "TypeScript", "Your Skills"],
  // Add more metadata...
};
```

## 🛠️ Technologies Deep Dive

### Why Next.js 14?

- **App Router:** Modern routing with React Server Components
- **Performance:** Automatic code splitting and optimization
- **SEO:** Built-in SEO features and static generation
- **Developer Experience:** Hot reload, TypeScript support

### Why Three.js?

- **3D Graphics:** Create impressive 3D elements in the browser
- **WebGL:** Hardware-accelerated graphics
- **React Three Fiber:** React renderer for Three.js

### Why Framer Motion?

- **Smooth Animations:** 60fps animations
- **Declarative:** Easy-to-use animation API
- **Gestures:** Built-in gesture recognition
- **Production Ready:** Optimized for performance

## 📧 Contact

**Tio Dwi Satrio**

- 📧 Email: tiodwisatrio27@gmail.com
- 💼 GitHub: [github.com/tiodwisatrio](https://github.com/tiodwisatrio)
- 🔗 LinkedIn: [Your LinkedIn Profile]
- 🌐 Portfolio: [Your Live URL]

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are always welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- UI components inspired by [Aceternity UI](https://ui.aceternity.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- 3D assets and techniques from Three.js community

## 📈 Future Improvements

- [ ] Add blog section with MDX support
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive 3D elements
- [ ] Create case studies for projects
- [ ] Add testimonials section
- [ ] Implement contact form with email service
- [ ] Add analytics dashboard

---

<div align="center">
  <p>Made with ❤️ and ☕ by Tio Dwi Satrio</p>
  <p>⭐ Star this repo if you find it helpful!</p>
  
  <br />
  
  <p>
    <img src="https://img.shields.io/github/stars/tiodwisatrio/tiodwisatrio_portfolio?style=social" alt="stars" />
    <img src="https://img.shields.io/github/forks/tiodwisatrio/tiodwisatrio_portfolio?style=social" alt="forks" />
  </p>
</div>
