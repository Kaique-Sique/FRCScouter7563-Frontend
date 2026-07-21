<div align="center">

# Scouter7563

**Scouting web application for FRC Team 7563 (Megazord)**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)

[Overview](#overview) •
[Tech Stack](#tech-stack) •
[Getting Started](#getting-started) •
[Project Structure](#project-structure) •
[Routing](#routing) •
[Scripts](#available-scripts) •
[Contributing](#contributing)

</div>

---

## Overview

Scouter7563 is the frontend for **FRCScouter7563**, an internal scouting platform built by [Team 7563 — Megazord](https://megazord7563.com.br) for the *FIRST* Robotics Competition. It gives the team a single place to browse events, teams, and matches, and to collect in-house scouting data during competition.

The interface is organized around five top-level sections:

| Section | Route | Purpose |
|---|---|---|
| Dashboard | `/` | Current event overview, live stats, and upcoming matches |
| Events | `/events` | Browse events grouped by competition week |
| Teams | `/teams` | Browse and inspect FRC teams |
| Matches | `/matches` | Match details and per-team scouting views |
| Scout | `/scout` | Start and fill out a new scouting entry |

This repository contains **only the frontend**. It is designed to consume the [FRCScouter7563 backend](https://github.com/Kaique-Sique) (FastAPI + PostgreSQL), which proxies [The Blue Alliance](https://www.thebluealliance.com/) data and stores the team's own scouting records.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI Library | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) (CSS-first configuration) |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons) |
| Charts | [Recharts](https://recharts.org) |
| Linting | [ESLint 9](https://eslint.org) with `eslint-config-next` |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or later
- npm (or yarn / pnpm / bun)
- A running instance of the [FRCScouter7563 backend](https://github.com/Kaique-Sique) for live data (optional in development — pages fall back gracefully when the API is unreachable)

### Installation

```bash
git clone https://github.com/Kaique-Sique/FRCScouter7563-Frontend.git
cd FRCScouter7563-Frontend/frcscouter7563-frontend
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
# Base URL of the FRCScouter7563 backend API
NEXT_PUBLIC_API_URL=http://localhost:8000
```

| Variable | Required | Default | Description |
|---|---|---|---|
| `NEXT_PUBLIC_API_URL` | No | `http://localhost:8000` | Base URL used to fetch teams, events, and matches from the backend |

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads as you edit files under `src/`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

---

## Project Structure

```
frcscouter7563-frontend/
├── public/                    # Static assets (logo, icons)
└── src/
    ├── app/                   # Next.js App Router — routes and layouts
    │   ├── page.tsx           # Dashboard (/)
    │   ├── layout.tsx         # Root layout
    │   ├── globals.css        # Tailwind entry point and theme tokens
    │   ├── teams/              # Teams list and team detail routes
    │   └── scout/              # Scouting flow (match/team selection + forms)
    │
    ├── components/
    │   ├── AppLayout.tsx      # Shell combining Header + Sidebar + content
    │   ├── Header.tsx
    │   ├── Sidebar.tsx
    │   ├── cards/              # Reusable stat, match, and team cards
    │   ├── dashboard/          # Dashboard-only widgets (event selector, matches list)
    │   ├── scout/               # Scouting flow components (match/alliance selectors)
    │   ├── team/                # Team profile (header, sidebar, stats, charts)
    │   └── ui/                  # Low-level UI primitives (progress bars, badges)
    │
    ├── lib/
    │   └── api/                 # Typed API client functions (e.g. `getTeam`)
    │
    ├── types/                   # Shared TypeScript types and enums
    └── utils/                   # Formatting and helper functions
```

---

## Routing

```
Home (/)
│
├── Events (/events)
│   └── Event (/events/{event_key})
│       ├── Results
│       ├── Teams
│       ├── Rankings
│       ├── Insights
│       └── Matches
│           └── Match (/matches/{match_key})
│               └── Team Scout (/matches/{match_key}/{team_number})
│
├── Teams (/teams)
│   └── Team (/teams/{team_key})
│
├── Matches (/matches)
│   └── Match (/matches/{match_key})
│
└── Scout (/scout)
    └── Match (/scout/{match_key})
        └── Team (/scout/{match_key}/{team_number})
```

A full breakdown of every route, its purpose, and its expected contents is documented in the [top-level architecture guide](../README.md).

> **Note:** the `/scout/2025/auto`, `/scout/2025/teleop`, and `/scout/2025/pit` routes are temporary placeholders. They will be merged into a single, unified scouting form.

---

## Contributing

This is an internal tool for Team 7563, but contributions from team members are welcome:

1. Create a branch from `main`.
2. Keep components typed and colocate route-specific components under `src/components/<feature>`.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Open a pull request describing the change.

---

## License

Distributed under the MIT License. See [`LICENSE`](../LICENSE) for details.
