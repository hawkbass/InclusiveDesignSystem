# Inclusive Design System

Enterprise-grade UI foundation for our recruitment applications, built with Next.js 15 and Tailwind CSS.

---

## 🚀 Prerequisites
- **Node.js 20+**
- **npm** or **pnpm**

## 📦 Installation
```sh
npm install
# or
pnpm install
```

## 🛠️ Development
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🏗️ Production Build
```sh
npm run build
npm start
```

## 🔑 Environment Variables
- Copy `.env.example` to `.env.local` and fill in any required secrets.
- **Never commit real secrets to the repo!**

## ⚙️ CI/CD with GitHub Pages
This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployment:
- Installs dependencies with pnpm
- Runs `npm run build` to generate static files
- Deploys to GitHub Pages automatically on push to main branch
- Caches dependencies for faster builds

## 📚 Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

© Inclusive. All rights reserved. 