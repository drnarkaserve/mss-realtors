# MSS Realtors ðŸ¡

Full-stack real estate website for **MSS Realtors**, Ponnur, Guntur District, Andhra Pradesh.

**Owner:** MSS Â· **Phone:** 9866376367 Â· **Address:** Ponnur, Guntur, Andhra Pradesh, India

## Features

- **Frontend (React + Vite):** Hero image slider, animated stat counters, services, featured listings, construction projects, amenities, loan-partner strip, project gallery with lightbox, blog, legacy timeline, testimonial cards, floating WhatsApp/Call/Enquiry buttons and a global "Enquire Now" modal.
- **Pages:** Home, Properties (search + filters), Property Detail, Construction Projects, Project Detail, Services, Gallery, Blog, Blog Detail, About, Contact.
- **Backend (Python + FastAPI):** REST API for properties (plots/flats/villas/land), construction projects, services, amenities, testimonials, why-us, loan partners, timeline, gallery, blogs, company info, stats, and storing contact enquiries to `backend/enquiries.json`.

## Design Inspiration

Analysed and adapted the best patterns from leading Andhra builders:
[MVV Builders](https://www.mvvbuilders.com/), [Hirize Developers](https://www.hirizedevelopers.com/)
and [Sree Balajee Nirman](https://www.balajeenirman.com/) â€” hero sliders, legacy counters,
amenity icon grids, project overview tables, client testimonials, loan partners, gallery and blog.

## Images

Beautiful royalty-free property images (36 in total) are stored locally in
`frontend/public/images/` so the site works fully offline. All listing/project/gallery/blog
records in `backend/data.py` reference these local paths (e.g. `/images/property-1.jpg`).

## Project Structure

```
MSSRealtors/
â”œâ”€â”€ backend/
â”‚   â”œâ”€â”€ app.py            # FastAPI app + routes
â”‚   â”œâ”€â”€ data.py           # Seed data (properties, projects, services, company)
â”‚   â”œâ”€â”€ requirements.txt
â”‚   â””â”€â”€ enquiries.json    # Created at runtime (stored enquiries)
â””â”€â”€ frontend/
    â”œâ”€â”€ public/images/    # 36 local property images (works offline)
    â”œâ”€â”€ src/pages/        # Home, Properties, PropertyDetail, Projects, ProjectDetail,
    â”‚                     # Services, Gallery, Blog, BlogDetail, About, Contact
    â”œâ”€â”€ src/components/   # Navbar, Footer, HeroSlider, Counter, PropertyCard,
    â”‚                     # ProjectCard, AmenityGrid, LoanPartners, Lightbox,
    â”‚                     # FloatingActions, EnquiryModal (global popup)
    â””â”€â”€ src/api.js        # API client
```

## Running

### Backend (port 8000)

```powershell
python -m venv backend\venv
.\backend\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn backend.app:app --reload --port 8000
```

### Frontend (port 5173)

```powershell
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### One-click start

Double-click `start.bat` (starts both backend and frontend), or run `stop.bat` to stop them.

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/company` | Owner & contact details |
| GET | `/api/stats` | Experience / sales stats |
| GET | `/api/properties?type=(plot\|flat)&status=&min_price=&max_price=&search=` | List & filter properties |
| GET | `/api/properties/{id}` | Single property |
| GET | `/api/projects?status=` | Construction projects |
| GET | `/api/projects/{id}` | Single project (overview + amenities) |
| GET | `/api/services` | Realtor services |
| GET | `/api/testimonials` | Client testimonials |
| GET | `/api/why-us` | Why choose us points |
| GET | `/api/amenities` | Amenity icon map |
| GET | `/api/loan-partners` | Housing-loan partner banks |
| GET | `/api/timeline` | Company legacy timeline |
| GET | `/api/gallery?category=` | Gallery images + categories |
| GET | `/api/blogs` `/api/blogs/{id}` | Blog list / single post |
| POST | `/api/enquiries` | Save a contact enquiry |


## Deployment

### Backend → Railway

The backend is a standard Python (FastAPI) app. Railway auto-detects Python from `requirements.txt` at the repo root and runs the command in `Procfile`.

**Required files (at repo root):**
- `Procfile` — `web: python -m uvicorn backend.app:app --host 0.0.0.0 --port $PORT`
- `requirements.txt` — Python dependencies
- `runtime.txt` — `python-3.11.4`

Railway sets `PORT` automatically. The app reads `os.environ.get("PORT")`.

Steps:
1. Install the Railway CLI: `npm i -g @railway/cli`
2. `railway login`
3. `railway init` (or link to an existing project)
4. `railway up` — builds & deploys from the repo root
5. Copy the Railway URL and set it as `VITE_API_URL` in the Netlify dashboard

### Frontend → Netlify

The frontend is a Vite-built React SPA (static files). Netlify runs `npm run build` and serves the `dist` folder.

**Required file (at `frontend/`):**
- `netlify.toml` — build command, publish directory, env vars, cache headers

Steps:
1. Connect your GitHub repo to Netlify (or drag-and-drop the `frontend` folder)
2. In Site Settings → Build & Deploy → Environment, set `VITE_API_URL` to your Railway backend URL: `https://your-railway-app.up.r.appspot.com/api`
3. Deploy. Netlify serves `dist/` with cache headers.
4. Since the app uses `HashRouter`, all routes work on any page refresh without server redirects.

### Environment variables

| Variable | Value | Where set |
|----------|-------|-----------|
| `VITE_API_URL` | Railway backend URL + `/api` | Netlify dashboard |
| `PORT` | Auto | Railway (do not change) |

For the complete deployment workflow (GitHub, Railway, Netlify), see [DEPLOYMENT.md](DEPLOYMENT.md).
