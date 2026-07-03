# 🎓 SchoolManager ERP Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF00C1?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A premium, highly-optimized, and beautiful SaaS monorepo landing page for **SchoolManager**—a modern School ERP platform. It features an interactive, animated user experience, dark/light theme options, responsive mobile-first views, and a companion Express contact-form backend api.

---

## 📖 Project Overview

**SchoolManager ERP** is built to unify administrative operations, student records, attendance tracking, tuition billing ledgers, and parent-teacher communications.

* **Purpose**: Present a premium, high-converting showcase of the SchoolManager ERP suite.
* **Target Audience**: School administrators, directors, academic trustees, and educational institutions.
* **Goal**: Provide an immersive, fluid, and lightning-fast exploration of features, pricing, and onboarding benefits on both desktop and mobile viewports.
* **Why it was built**: Showcase a state-of-the-art SaaS marketing page built with React 19, Next.js 16, Tailwind v4, and hardware-accelerated Framer Motion animations.

---

## 🔗 Live Demo

> 🌐 Deployed Version: [https://a-pied.vercel.app](https://a-pied.vercel.app) *(or configure your deployment url in your host)*

---

## ✨ Features

- 🖥️ **Modern SaaS Landing Page**: Designed with high-end glassmorphism, elegant font typography, and cohesive color palettes.
- 📱 **Mobile Optimized & Responsive**: Pixel-perfect design scaling across desktop, laptop, tablet, and mobile device screen widths.
- 🌓 **Dark / Light Mode**: Seamless real-time theme swapping with persistent user preferences.
- 🎬 **Animated Hero Section**: Slide-and-fade headers and call-to-actions, accompanied by a dynamic dashboard preview.
- 🖼️ **Dynamic Background Slideshow**: Ultra-smooth 6-second crossfading background scenes in the Hero section.
- 💡 **Interactive Feature Cards**: conically spinning neon borders on hover and responsive slide entries on scroll.
- 📈 **Benefits Section**: Sentinel-triggered background color changes that dynamically shift the page atmosphere as you scroll through rows.
- ⏳ **Workflow Onboarding Timeline**: Clean chronological sequence illustrating step-by-step school onboarding.
- 💳 **Pricing Section**: Interactive billing toggle (monthly/yearly) featuring transient 3D keyframe card-flip scales and rotations.
- 💬 **Testimonials Marquee**: Edgeto-edge infinite scrolling customer reviews marquee.
- ❓ **FAQ Accordion**: Expandable questions list with fluid slide animations.
- ✉️ **Contact Form Validation**: Form schema verification with React Hook Form, Zod, and Toast alert feedback.
- 📝 **Blog Preview**: Premium card layouts containing administrative articles and reading resource links.
- 🧭 **Modern Navigation Header**: Sticky layout that reduces padding on scroll, highlighting the active section.

---

## 🛠️ Technologies Used

### Frontend (`frontend/`)
* **Framework**: React 19 (React-DOM 19), Next.js 16 (app router, Turbopack)
* **Styling**: Tailwind CSS v4, PostCSS
* **Animation Library**: Framer Motion 12
* **Forms & Validation**: React Hook Form 7, Zod 4, @hookform/resolvers 5
* **Theme Management**: Next-Themes 0.4
* **Icons**: Lucide React 1.17

### Backend (`backend/`)
* **Environment**: Node.js, Express (TypeScript)
* **Validation**: Zod
* **Task Automation**: Concurrently 9 (for running dev environments simultaneously)

---

## 📂 Project Structure

The project is structured as a monorepo containing distinct frontend and backend directories:

```
SchoolERP/
├── frontend/               # Next.js Landing Page App
│   ├── public/             # High-quality optimized image and vector assets
│   └── src/
│       ├── app/            # Next.js App Router Page Layouts
│       ├── components/     # Reusable Component Architecture
│       │   ├── layout/     # ClientLayoutWrapper, Navbar, Footer
│       │   ├── sections/   # Hero, Features, Benefits, FAQ, Contact, Pricing, Testimonials
│       │   ├── shared/     # ThemeToggle, Toast Notifications, CustomCursor
│       │   └── ui/         # Container, Button, Badge, SectionHeading
│       ├── constants/      # API configurations, metadata tags
│       ├── data/           # Hardcoded local data (FAQs, blog posts, pricing grids)
│       └── hooks/          # useToast, useForm hooks
│
├── backend/                # Express API Server
│   ├── src/                # Express controllers, routes, validations
│   └── dist/               # Compiled TypeScript server code
```

---

## 🚀 Installation & Setup

### Prerequisites
* **Node.js** 18.17 or later
* **npm** 9+ or yarn

### Quick Start (Run Both Frontend & Backend)
From the root directory of the `SchoolERP` project:

1. **Install Dependencies for all environments**:
   ```bash
   npm install
   npm run install:all
   ```

2. **Setup Environment Variables**:
   * Create configuration files based on `.env.example` in both folders.
   * **Windows Shell**:
     ```cmd
     copy frontend\.env.example frontend\.env.local
     copy backend\.env.example backend\.env
     ```
   * **Linux / macOS Terminal**:
     ```bash
     cp frontend/.env.example frontend/.env.local
     cp backend/.env.example backend/.env
     ```

3. **Run Dev Servers in Parallel**:
   ```bash
   npm run dev
   ```
   * The landing page runs on **[http://localhost:3000](http://localhost:3000)**.
   * The API backend runs on **[http://localhost:4000](http://localhost:4000)**.

### Production Build & Launch

To generate static builds and run them in production mode:
```bash
# Build both frontend and backend
npm run build

# Start services
npm run start:frontend     # Runs on port 3000
npm run start:backend      # Runs on port 4000
```

---

## 🎨 Mobile Optimizations & Animations

This landing page has been heavily debugged and optimized for mobile devices (`iOS Safari`, `Android Chrome`, `Samsung Internet`, `Brave Mobile`, `Edge Mobile`):

### GPU Rendering Fixes
* **Testimonials Marquee**: Animating large backdrop-filter layers inside infinite scrolls exhausts mobile GPU resources. We disabled intensive `backdrop-filter` rendering on mobile viewports (`md:backdrop-blur-md`), restoring smooth 60fps marquee scrolling and preventing footer rendering glitches.
* **Footer Resource Cards**: Sub-pixel transparent alpha compositions (`bg-white/[0.02]`) on long gradient pages trigger Android Chrome compositor bugs, resulting in glitched background patterns. Cards on mobile use flat background borders (`bg-[#131C1E] border-[#1E292B]`), bypassing GPU layers and guaranteeing clean outputs.

### Animation Systems
* **Hydration Protection**: All Framer Motion animation offsets utilize a React mounting sequence (`hasHydrated`), matching initial SSR renders with desktop layout parameters, then safely adapting to mobile metrics on client load to avoid layout shifts or console hydration errors.
* **Reduced Layout Shifts**: Large off-screen entry offsets (`-100vw` / `100vw`) in Feature cards have been customized to localized translations (`-30px` / `30px`) on mobile viewports.
* **Responsive Delays**: Multi-second staggered desktop delays in vertical lists are compressed on mobile (e.g. Workflow steps) to match fast scroll triggers.

---

## 📸 Screenshots

| Desktop View | Mobile View |
| ------------ | ----------- |
| ![Hero Desktop Preview](https://placehold.co/800x450/151f21/ffffff?text=SchoolManager+Desktop+Preview) | ![Mobile View Preview](https://placehold.co/360x640/151f21/ffffff?text=SchoolManager+Mobile+Preview) |

*Additional screenshot placeholders for sections:*
* **Features Section** (Conic Neon Borders)
* **Benefits Row** (Scroll Sentinel Background Reveals)
* **Pricing Plan Cards** (3D Hover Transitions & Vertical Rotation)
* **Testimonials** (Infinite edge-to-edge marquee)

---

## 🔮 Future Improvements

1. 🔐 **Portal Authentication**: Integrate login gateways for Student, Teacher, and Administrator roles.
2. 📊 **SaaS Dashboard Integration**: Connect mock widgets to real backend databases.
3. 📝 **CMS Blog Backend**: Manage blog posts dynamically through database queries instead of static configuration arrays.
4. 🌐 **Multi-language Support (i18n)**: Enable localization translations for global operations.
5. ♿ **A11y Enhancements**: Add aria tags and full keyboard navigation for accordions.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit pull requests.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` or file directory for details.

---

## 👤 Author

* **Mohd Aqib**
  * GitHub: [@aqib-dev](https://github.com/) *(or link placeholder)*
  * LinkedIn: [Mohd Aqib](https://linkedin.com/)
  * Portfolio: [Developer Portfolio](https://github.com/)
