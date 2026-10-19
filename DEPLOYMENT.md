# Sudhakar Realtors — Deployment Guide

> Project: MSS Realtors — Plots, Flats & Construction  
> Owner: MSS · Phone: 9866376367 · Ponnur, Guntur, Andhra Pradesh, India

This document covers deploying the backend to **Railway** and the frontend to **Netlify**. A Vercel alternative is included for projects using Vercel.

---

## Prerequisites

Before starting, ensure you have the following accounts and tools installed:

| Tool / Service | Purpose | Install / Sign Up |
|----------------|---------|-------------------|
| [Git](https://git-scm.com/) | Version control | [Download](https://git-scm.com/download/win) |
| [Node.js ≥ 18](https://nodejs.org/) | Frontend build & Railway CLI | [Download](https://nodejs.org/) |
| [Python 3.11](https://www.python.org/downloads/) | Backend runtime | Already installed |
| [Railway account](https://railway.app/) | Backend hosting | Sign up with GitHub |
| [Netlify account](https://www.netlify.com/) | Frontend hosting | Sign up with GitHub |
| [GitHub account](https://github.com/) | Code repository | Sign up |
| [Railway CLI](https://railway.app/docs/cli) | Deploy backend from terminal | `npm i -g @railway/cli` |

**Verify installations:**
```powershell
git --version
node --version
python --version
railway --version
```

---

## Step 1 — GitHub Commit & Push

### 1.1 Initialize Git (if not already done)

```powershell
cd C:\Users\DELL\Documents\Default Project\SudhakarRealtors
git init
```

### 1.2 Create `.gitignore`

Create a file named `.gitignore` at the repo root with the following content to exclude unnecessary files:

```gitignore
# Dependencies
node_modules/
venv/
dist/
build/
*.egg-info/

# Python
__pycache__/
*.pyc
*.pyo
.enchant/

# Environment & secrets
.env
.env.local
*.secret

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
npm-debug.log*

# Railway / Netlify local cache
.cache/
```

### 1.3 Stage and commit all files

```powershell
git add .
git status
git commit -m "Initial commit: MSS Realtors website (React + FastAPI)"
```

### 1.4 Create a GitHub repository and push

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `SudhakarRealtors` (or `mss-realtors`)
3. Description: `Real estate website for plots, flats and construction in Ponnur, Guntur`
4. Set to **Public** (or Private if preferred)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

Then push:

```powershell
git remote add origin https://github.com/<YOUR_USERNAME>/SudhakarRealtors.git
git branch -M main
git push -u origin main
```

Verify:
```powershell
git push
```

You should see the files appear on GitHub.

---

## Step 2 — Backend Deployment to Railway

Railway auto-detects Python from `requirements.txt` and runs the command defined in `Procfile`.

### 2.1 Verify deployment files exist

Ensure the following files exist at the **repo root**:

```
Procfile                    ← start command
requirements.txt            ← Python dependencies
runtime.txt                 ← Python version (python-3.11.4)
backend/app.py              ← FastAPI app (uses os.environ.get("PORT"))
backend/data.py             ← Seed data
backend/requirements.txt    ← Same as root requirements.txt
```

**Procfile content:**
```
web: python -m uvicorn backend.app:app --host 0.0.0.0 --port $PORT
```

**runtime.txt content:**
```
python-3.11.4
```

**requirements.txt content:**
```
fastapi==0.115.6
uvicorn[standard]==0.32.1
pydantic==2.10.4
```

### 2.2 Log in to Railway and create a project

```powershell
railway login
railway init
```

Follow the prompts:
- Select your GitHub repository: `SudhakarRealtors`
- Railway creates a `railway.toml` if needed (optional)

### 2.3 Deploy to Railway

```powershell
railway up
```

Railway will:
1. Detect Python from `requirements.txt`
2. Install dependencies (`fastapi`, `uvicorn`, `pydantic`)
3. Run the `Procfile` command: `python -m uvicorn backend.app:app --host 0.0.0.0 --port $PORT`
4. Assign a public URL (e.g., `https://your-app.up.r.appspot.com`)

### 2.4 Verify the backend is running

```powershell
railway open          # Opens the Railway dashboard
railway logs          # View deployment logs
railway domain        # Show the deployed URL
```

Test the API:
```powershell
# Replace with your Railway URL
$url = "https://your-app.up.r.appspot.com"
Invoke-RestMethod "$url/api/company"
Invoke-RestMethod "$url/api/properties"
```

Expected output:
```
name     : MSS Realtors
phone    : 9866376367
email    : mssrealtrs@gmail.com
```

### 2.5 Note the Railway URL

Copy the full URL (e.g., `https://your-app.up.r.appspot.com`). You will use it in the next step.

### 2.6 Important: Database consideration

This project uses a file-based `enquiries.json` for storing contact enquiries. Railway's filesystem is **ephemeral** — data persists across restarts of the same dyno but is lost on redeployment. For production, consider adding a [PostgreSQL database](https://railway.app/docs/databases/postgresql) or switching to SQLite. For now (small activities), the file-based approach is acceptable.

---

## Vercel alternative

The root `pyproject.toml` declares the Python project metadata and dependencies Vercel's `uv lock` step requires, and configures Vercel to load the FastAPI application from `backend.app:app`.

Deploy the backend and frontend as separate Vercel projects from this repository:

1. **Backend project:** use the repository root as the Root Directory. Vercel detects the root `requirements.txt` and the configured Python entrypoint. Its API routes are available under `/api`.
2. **Frontend project:** create another Vercel project for the same repository and set Root Directory to `frontend`. Set `VITE_API_URL` in the project environment to `https://<backend-project-domain>/api`, then redeploy.
3. Test `https://<backend-project-domain>/api/health` and the frontend site after both deployments.

**Important:** the backend currently stores enquiries in `backend/enquiries.json`. Vercel Functions do not provide persistent writable application storage, so enquiry submissions need an external database before using this setup in production. Do not rely on the JSON file for live submissions.

---

## Step 3 — Frontend Deployment to Netlify

Netlify builds the React app (`npm run build`) and serves the `dist` folder.

### 3.1 Verify the Netlify config exists

Ensure `frontend/netlify.toml` exists with the following content:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  VITE_API_URL = "https://YOUR_RAILWAY_URL_HERE/api"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 3.2 Set the VITE_API_URL environment variable

**Before deploying**, replace `https://YOUR_RAILWAY_URL_HERE/api` in `frontend/netlify.toml` with the actual Railway URL from Step 2.5.

Example (after Railway deployment):
```toml
VITE_API_URL = "https://your-app.up.r.appspot.com/api"
```

Alternatively, you can set `VITE_API_URL` in the **Netlify dashboard** (recommended for secrets):
1. Go to your site on [Netlify](https://app.netlify.com/)
2. **Site Settings → Build & Deploy → Environment**
3. Add variable: `VITE_API_URL` = `https://your-app.up.r.appspot.com/api`
4. Save and trigger a new deploy

### 3.3 Connect GitHub repo to Netlify

**Option A — Connect via GitHub (recommended):**
1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Click **Add new site** → **Import from Git**
3. Select **GitHub**
4. Authorize Netlify and select the `SudhakarRealtors` repository
5. Set the **build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. In **Environment variables**, add `VITE_API_URL` (if not already in `netlify.toml`)
7. Click **Deploy site**

**Option B — Drag and drop:**
1. Run `npm run build` locally in the `frontend/` folder
2. Drag the `dist` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Note: Manual deploys won't reflect code changes until rebuilt and re-dragged.

### 3.4 Verify the frontend is running

Netlify provides a temporary URL like `https://random-name.netlify.app`.

Test the pages:
```powershell
Invoke-WebRequest "https://your-site.netlify.app"
Invoke-WebRequest "https://your-site.netlify.app/properties"
Invoke-WebRequest "https://your-site.netlify.app/contact"
```

Verify the API connection (the frontend should fetch data from Railway):
```powershell
# Open the browser and check:
# - Property cards load with images
# - Stats counters animate
# - Contact form submits
# - WhatsApp button works
```

### 3.5 Set a custom domain (optional)

If you have a domain (e.g., `mssrealtors.com`):
1. Go to **Site Settings → Domain management**
2. Add your custom domain
3. Update DNS records as instructed by Netlify
4. Netlify auto-provisions an SSL certificate

---

## Post-Deployment Checklist

Verify everything works end-to-end:

- [ ] **Backend**: `https://your-app.up.r.appspot.com/api/company` returns `MSS Realtors`
- [ ] **Frontend**: Homepage loads at `https://your-site.netlify.app`
- [ ] **Properties page**: Property cards with images load correctly
- [ ] **Contact form**: Enquiry submits successfully (check Railway logs)
- [ ] **WhatsApp button**: Opens WhatsApp with pre-filled message
- [ ] **Phone links**: All `tel:9866376367` links work
- [ ] **404 page**: Any unknown URL shows the 404 page
- [ ] **Legal & Privacy pages**: Accessible from footer links
- [ ] **Images**: All local images load (hero, property, project, gallery, blog)
- [ ] **Email**: All mailto links point to `mssrealtrs@gmail.com`

---

## Environment Variables Summary

| Variable | Value | Set in |
|----------|-------|--------|
| `VITE_API_URL` | `https://your-app.up.r.appspot.com/api` | Netlify dashboard + `netlify.toml` |
| `PORT` | `8000` (auto) | Railway (do not change) |
| `PYTHON_VERSION` | `3.11.4` | `runtime.txt` |

---

## File Structure Reference

```
SudhakarRealtors/
├── backend/
│   ├── app.py              # FastAPI app (uses PORT env var)
│   ├── data.py             # Seed data (properties, projects, etc.)
│   ├── requirements.txt    # Python dependencies
│   └── venv/               # Local virtual env (not committed)
├── frontend/
│   ├── src/                # React source code
│   │   ├── pages/          # Home, Properties, Projects, etc.
│   │   ├── components/     # Navbar, Footer, HeroSlider, etc.
│   │   ├── api.js          # API client
│   │   ├── App.jsx         # Router + layout
│   │   └── index.css       # Global styles
│   ├── dist/               # Build output (generated)
│   ├── public/images/      # 36 local property images
│   ├── netlify.toml        # Netlify build config
│   ├── package.json
│   └── vite.config.js
├── Procfile                # Railway start command
├── pyproject.toml           # Vercel FastAPI entrypoint
├── requirements.txt        # Python dependencies (Railway)
├── runtime.txt             # Python version (Railway)
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── DEPLOYMENT.md           # This file
└── start.bat / stop.bat    # Local start/stop scripts
```

---

## Troubleshooting

### Backend issues

| Problem | Solution |
|---------|----------|
| `ModuleNotFoundError` | Ensure `requirements.txt` lists all packages |
| Port already in use | Railway sets `PORT` automatically; do not hardcode |
| `enquiries.json` lost on redeploy | Railway restarts the same dyno — data persists. On new deploys, re-create or switch to SQLite |
| Build fails | Check `railway logs` for the exact error |

### Frontend issues

| Problem | Solution |
|---------|----------|
| API calls fail (CORS) | Set `VITE_API_URL` to the correct Railway URL |
| Images not loading | Images are in `frontend/public/images/` — ensure they exist |
| Page not found on refresh | Using `HashRouter`, so all routes work. No server config needed |
| White screen | Check browser console for JS errors; rebuild with `npm run build` |
| Old content after deploy | Clear browser cache or hard-refresh (`Ctrl+Shift+R`) |
| Netlify build fails | Check Netlify build logs in dashboard |

### Git issues

| Problem | Solution |
|---------|----------|
| `git push` rejected | Run `git pull --rebase origin main` then push again |
| Branch name mismatch | Ensure branch is `main`: `git branch -M main` |
| File not tracked | `git add <file>` then commit |

---

## Quick Deploy Commands (Cheat Sheet)

```powershell
# --- Commit & push to GitHub ---
cd C:\Users\DELL\Documents\Default Project\SudhakarRealtors
git add .
git commit -m "Update message"
git push origin main

# --- Deploy backend to Railway ---
railway up
railway logs

# --- Deploy frontend to Netlify ---
# (Automatic on push if connected to GitHub)
# Or manually: cd frontend && npm run build

# --- Local development ---
.\start.bat          # Starts both servers
.\stop.bat           # Stops both servers
```

---

## Support

For any deployment issues:
- Email: **mssrealtrs@gmail.com**
- Phone: **9866376367**
- Address: Ponnur, Guntur District, Andhra Pradesh, India
