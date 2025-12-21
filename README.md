# 🌍 Planet Party

> A living ecosystem platform enabling bioregional communities to sense, decide, and act together in service to life.

## The Planetary Party Protocol (PPP)

**SENSE → SEE → FLOW → CELEBRATE → REGENERATE**

Planet Party provides the connective architecture for bioregional communities to coordinate, amplify efforts, and emerge as something larger than themselves.

## ✨ Features

- **Bioregional Dashboards** - Real-time sensing of community health and ecological indicators
- **Council Spaces** - Sacred containers for community decision-making
- **Guild System** - Nine specialized teams stewarding different dimensions
- **Flow Funds** - Trust-based, relational capital that moves to where life needs it

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm
- Supabase account (for database)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Supabase credentials to .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (public)/           # Public routes (home, about)
│   ├── (auth)/             # Auth routes (login, signup)
│   ├── dashboard/          # Bioregional intelligence dashboards
│   ├── councils/           # Council management
│   ├── guilds/             # Guild system
│   ├── flow-funds/         # Flow fund management
│   └── api/                # API routes
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components
│   ├── dashboard/          # Dashboard-specific components
│   └── forms/              # Form components
├── lib/                    # Utilities and shared code
│   ├── supabase/           # Supabase client and helpers
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Utility functions
├── types/                  # TypeScript type definitions
└── styles/                 # Global styles and theme
```

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Styling**: Tailwind CSS
- **State**: TanStack Query (React Query)
- **Testing**: Vitest + Playwright

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run typecheck` | TypeScript type checking |
| `npm run db:generate` | Generate database types |

## 🎨 Design Philosophy

The platform embodies living systems principles:

- **Decentralized** yet **Unified**
- **Adaptive** yet **Grounded**
- **Scalable** yet **Relational**
- **Mythic** yet **Practical**
- **Global** yet **Rooted**

Visual identity uses organic, flowing designs with earth tones and bioluminescent accents (teal, gold, deep green).

## 🌱 The Nine Guilds

1. **Bioregional Intelligence** - Dashboards and sensing
2. **Technology & Data Sovereignty** - Digital infrastructure
3. **Ecosystem Weaving** - Cross-sector connections
4. **Community Capacity & Trust-Building** - Relational work
5. **Storytelling & Mythos** - Narrative and culture
6. **Regenerative Governance** - Decision-making structures
7. **Event Production & Cultural Activation** - Gatherings
8. **Living Systems & Solutions** - Ecological regeneration
9. **Regenerative Capital Flows** - Flow funds and economics

## 🤝 AI Development

This project uses the [ai-coding-config](https://github.com/TechNickAI/ai-coding-config) toolkit for AI-assisted development.

### Available Commands

| Command | Description |
|---------|-------------|
| `/autotask` | Autonomous task completion |
| `/troubleshoot` | Debug issues step by step |
| `/address-pr-comments` | Handle PR feedback |
| `/create-prompt` | Generate effective prompts |

### Available Agents

| Agent | Purpose |
|-------|---------|
| `code-reviewer` | Review code quality |
| `debugger` | Deep dive into bugs |
| `test-engineer` | Write comprehensive tests |
| `ux-designer` | Design review and suggestions |

## 📄 License

MIT © Planet Party

---

*In service to life, together.* 🌍💚
