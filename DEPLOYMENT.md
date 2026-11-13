# Deployment Guide — Gourisha Rathore Portfolio

Your portfolio is fully built, optimized, and verified for production. Choose whichever platform you prefer below.

---

## ⚡ Option 1: Vercel (Recommended — Fastest & Easiest)

Vercel provides automatic HTTPS, fast CDN edges, and auto-deploys on every `git push`.

### Step 1: Push your code to GitHub
1. Create a new repository on GitHub: [https://github.com/new](https://github.com/new)
   - Repository name: `myportfolio` (or `portfolio`)
   - Leave it **Public** (or Private)
   - Do **not** initialize with README or .gitignore (we already created them)
2. In your terminal, run:
   ```bash
   git remote add origin https://github.com/gourisha04/myportfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Go to [https://vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
2. Under "Import Git Repository", select **myportfolio**.
3. Vercel will automatically detect **Vite** (Framework: Vite, Root: `./`, Output: `dist`).
4. Click **Deploy**.
5. Your portfolio will be live in ~30 seconds at `https://myportfolio-xxxx.vercel.app` (you can also attach a custom domain like `gourisharathore.com` for free).

---

## 🐙 Option 2: GitHub Pages (Automated via GitHub Actions)

We have already configured `.github/workflows/deploy.yml` for automated GitHub Pages deployments.

1. Create a new repository on GitHub: [https://github.com/new](https://github.com/new) named `myportfolio`.
2. Push your code:
   ```bash
   git remote add origin https://github.com/gourisha04/myportfolio.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, change from *Deploy from a branch* to **GitHub Actions**.
4. The deployment workflow will trigger automatically! Once finished, your site will be live at:
   `https://gourisha04.github.io/myportfolio/`

---

## 🌐 Option 3: Netlify (Instant Drag-and-Drop)

If you want a live link right now without pushing to Git:
1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Open your file explorer and drag the `dist` folder from:
   `F:\OneDrive\Desktop\portfolio\myportfolio\dist`
3. Drop it into the Netlify Drop box.
4. Your site is instantly live with an SSL URL!

---

## 🛠️ Local Commands

- **Start Local Server**: `npm run dev` (runs at http://localhost:3000)
- **Compile Production Bundle**: `npm run build`
- **Preview Production Bundle**: `npm run preview`
