# Miraj Ud Din — Portfolio (AI/ML/Data Science/Journalism)

A modern, animated, full-stack portfolio for Miraj Ud Din from Peshawar, Pakistan. Built with Vite + React + TailwindCSS + TypeScript on the frontend, and Node.js + Express + MongoDB (Mongoose) on the backend.

## Features
- Dark/Light mode with glassmorphism UI
- Animated hero with particles background
- About, Skills (animated), Projects (filters + modal), Experience, Education, Blog, Testimonials, Contact
- EmailJS integration for contact, with form validation
- SEO optimized, mobile-first, responsive
- Framer Motion page/scroll transitions, animated counters
- Optional backend with MongoDB for CRUD on Projects and Blogs, JWT-based admin auth
- Pre-configured for deployment to GitHub Pages (frontend) and Render/Vercel (backend)

## Monorepo Structure
```
frontend/        # React + Vite + Tailwind + TypeScript app
backend/         # Node + Express + MongoDB + TypeScript API
assets/          # Static assets (images, resume placeholders)
public/          # Root-level public assets (optional)
```

## Quickstart

### 1) Frontend
```
cd frontend
npm install
npm run dev
```
Then open http://localhost:5173

- Configure EmailJS: Copy `.env.example` to `.env` and add your keys.
- Update profile/config in `src/data/profile.ts`.
- Add blog posts in `content/blog/*.md`.

### 2) Backend (Optional)
```
cd backend
npm install
cp .env.example .env
# Fill in MONGODB_URI and JWT_SECRET
npm run dev
```
The API runs at http://localhost:8080

### Build & Deploy

- Frontend: `npm run build` then deploy `dist/` to GitHub Pages or any static host. A `deploy` script is included for GitHub Pages via `gh-pages`.
- Backend: Deploy to Render or Vercel. Ensure environment variables are set. `start` script is provided.

## Environment Variables

### Frontend (`frontend/.env`)
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_USERNAME=miraj-uddin-or-your-username
VITE_DEVTO_USERNAME=optional_devto
VITE_BACKEND_API_BASE=https://your-backend.example.com
```

### Backend (`backend/.env`)
```
PORT=8080
MONGODB_URI=mongodb+srv://...
JWT_SECRET=replace_with_long_secret
CORS_ORIGIN=http://localhost:5173
```

## Scripts

- Frontend
  - `dev`: Start Vite dev server
  - `build`: Production build
  - `preview`: Preview production build
  - `lint`: Lint with ESLint
  - `deploy`: Deploy to GitHub Pages

- Backend
  - `dev`: Start server with ts-node-dev
  - `build`: Compile TypeScript
  - `start`: Run compiled server
  - `seed`: Seed demo data

## Notes
- Avatar auto-fetch: If `VITE_GITHUB_USERNAME` is set, the app will fetch your GitHub avatar automatically with fallback to a local placeholder.
- Resume: Replace `assets/resume/Resume.pdf` with your actual PDF and the download button will work automatically.
- You can swap particles background with three.js if you prefer. A utility component is provided.

## License
MIT
