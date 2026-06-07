# SchoolERP

Monorepo for **SchoolManager** — a premium SaaS landing page for school management.

```
SchoolERP/
├── frontend/    # Next.js landing page (UI)
└── backend/     # Express API (contact form, future APIs)
```

## Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+

## Quick Start (Run Both)

From the **SchoolERP** root folder:

```bash
# 1. Install root + frontend + backend dependencies
npm install
npm run install:all

# 2. Copy environment files
copy frontend\.env.example frontend\.env.local
copy backend\.env.example backend\.env

# 3. Run frontend + backend together
npm run dev
```

| Service  | URL                        |
| -------- | -------------------------- |
| Frontend | http://localhost:3000      |
| Backend  | http://localhost:4000      |
| Health   | http://localhost:4000/api/health |

---

## Run Frontend Only

```bash
cd frontend
npm install
copy .env.example .env.local
npm run dev
```

Open **http://localhost:3000**

> Contact form needs the backend running, or set `NEXT_PUBLIC_API_URL` to your deployed API.

---

## Run Backend Only

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

API runs at **http://localhost:4000**

### API Endpoints

| Method | Route           | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/api/health`   | Health check        |
| POST   | `/api/contact`  | Submit contact form |

---

## Production Build

```bash
# From root
npm run build

# Or individually
cd frontend && npm run build && npm run start
cd backend && npm run build && npm run start
```

---

## Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Backend (`backend/.env`)

```env
PORT=4000
FRONTEND_URL=http://localhost:3000
```

---

## Tech Stack

| Layer    | Folder     | Technology                    |
| -------- | ---------- | ----------------------------- |
| Frontend | `frontend/`| Next.js 16, TypeScript, Tailwind, Framer Motion |
| Backend  | `backend/` | Express, TypeScript, Zod      |

---

## Deployment

- **Frontend** → Deploy `frontend/` folder to [Vercel](https://vercel.com)
- **Backend** → Deploy `backend/` to Railway, Render, or any Node host
- Set `NEXT_PUBLIC_API_URL` on Vercel to your backend URL
- Set `FRONTEND_URL` on backend to your Vercel domain (for CORS)

---

## License

MIT
