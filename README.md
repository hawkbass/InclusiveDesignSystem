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

## ⚙️ CI/CD with GitLab
This project includes a `.gitlab-ci.yml` for automated builds:
- Installs dependencies
- Runs `npm run build`
- Caches `node_modules` for faster builds
- Artifacts: `.next`, `out`, `node_modules`

You can add a deploy stage as needed for your environment.

## 📚 Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

© Inclusive. All rights reserved. 