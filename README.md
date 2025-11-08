# 🌐 Nidhi Kumar — Personal Portfolio

A responsive and modern **React + TypeScript + Vite** portfolio website designed to showcase achievements, projects, and skills.  
Deployed seamlessly on **Vercel**.

---

## 🚀 Tech Stack

| Category        | Technology      |
| --------------- | --------------- |
| Framework       | React 18 + Vite |
| Language        | TypeScript      |
| Styling         | Tailwind CSS    |
| Icons           | Lucide React    |
| Deployment      | Vercel          |
| Package Manager | npm             |

---

## 📂 Folder Structure

nidhi-kumar-portfolio/
├── public/ # Static assets (images, certificates, icons)
├── src/
│ ├── components/ # Reusable React components (Section, Skills, Sidebar, etc.)
│ ├── constants.ts # Data for skills, achievements, projects
│ ├── types.ts # Type definitions
│ ├── App.tsx # Root component
│ ├── index.tsx # App entry point
│ └── vite.config.ts # Vite configuration
├── dist/ # Production build output
├── package.json
├── tsconfig.json
└── .env.local # Environment variables (ignored by Git)

---

## ⚙️ Getting Started (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/nk-101/portfolio.git
cd portfolio

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev
The app will run at http://localhost:5173

4️⃣ Build for production
npm run build
npm run preview

🌍 Deployment (Vercel)

This project is deployed automatically via Vercel, triggered on each git push to the main branch.

Manual deploy (optional)
npm install -g vercel
vercel
vercel --prod

Vercel Configuration:

Setting- Value
Framework Preset- Vite
Build Command -npm run build
Output Directory- dist
Install Command- npm install

🏆 Portfolio Sections

Home: Intro and quick links

About: Brief bio and background

Education & Experience: Timeline components

Skills: Technical expertise grid

Projects: Highlighted work samples with links

Achievements: Research, paper, and certifications

Certificates: Visual showcase of awards

Contact: Email and social links

🧠 Learnings

Built a performant SPA using Vite + React

Type-safe development with TypeScript

Component-based UI architecture

Continuous Deployment (CD) pipeline with Vercel

Optimized project structure and environment configs

🧰 Common Commands
Command	Description
npm run dev	Start local dev server
npm run build	Build for production
npm run preview	Preview the production build
git push	Trigger auto-deploy on Vercel

👩‍💻 Author

Nidhi Kumar
📧 [nidhikumar.scoe.comp@gmail.com]
🌐 https://portfolio-five-zeta-65.vercel.app/
```
