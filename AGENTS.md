# Project Context for AI Assistants

Planet Party is a living ecosystem platform enabling bioregional communities to sense,
decide, and act together in service to life. The Planetary Party Protocol (PPP) provides
connective architecture for communities to coordinate, amplify efforts, and emerge as
something larger than themselves.

## Always Apply Rules

Core project rules that apply to all tasks:

@rules/git-interaction.mdc @rules/heart-centered-ai-philosophy.mdc
@rules/code-style-and-zen-of-python.mdc

## Tech Stack

- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes with Supabase
- **Database**: Supabase (PostgreSQL) for data persistence
- **Auth**: Supabase Auth with social providers
- **Real-time**: Supabase Realtime for collaborative features
- **Styling**: Tailwind CSS with custom design system
- **State**: React Query (TanStack Query) for server state
- **Testing**: Vitest + Playwright

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (public)/           # Public routes (home, about, etc.)
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

## Domain Concepts

**Bioregions**: Geographic areas defined by ecological and cultural boundaries, not
political ones. Each bioregion has its own dashboard, councils, and flow funds.

**Guilds**: Nine specialized teams stewarding different dimensions:
1. Bioregional Intelligence - dashboards and sensing
2. Technology & Data Sovereignty - digital infrastructure
3. Ecosystem Weaving - cross-sector connections
4. Community Capacity & Trust-Building - relational work
5. Storytelling & Mythos - narrative and culture
6. Regenerative Governance - decision-making structures
7. Event Production & Cultural Activation - gatherings
8. Living Systems & Solutions - ecological regeneration
9. Regenerative Capital Flows - flow funds and economics

**Flow Funds**: Trust-based, relational capital that moves to where life needs it.

**Councils**: Community decision-making bodies at bioregional level.

**The Protocol**: SENSE → SEE → FLOW → CELEBRATE → REGENERATE

## Commands

**Development:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run linter

## Code Conventions

**DO:**
- Follow heart-centered AI philosophy in all user-facing content
- Use TypeScript strict mode
- Write components with accessibility in mind
- Use Supabase Row Level Security (RLS) for data access
- Create commits only when user explicitly requests
- Test critical paths with integration tests

**DON'T:**
- Use `--no-verify` flag unless explicitly requested
- Commit changes without explicit user permission
- Expose API keys or secrets
- Skip error handling
- Write overly complex components

## Design Philosophy

The platform embodies living systems principles:
- **Decentralized** yet **Unified**
- **Adaptive** yet **Grounded**
- **Scalable** yet **Relational**
- **Mythic** yet **Practical**
- **Global** yet **Rooted**

Visual identity uses organic, flowing designs with earth tones and bioluminescent
accents (teal, gold, deep green).

## Git Workflow

**Commit format:** `{emoji} {imperative verb} {concise description}`

Examples:
- `✨ Add bioregional dashboard component`
- `🐛 Fix council member invitation flow`
- `♻️ Refactor flow fund allocation logic`

**Philosophy:** AI makes code changes but leaves version control to user. Commits are
permanent records requiring explicit permission.

## Important Notes

- Rules with `alwaysApply: true` are critical - check frontmatter
- Environment variables must never be committed
- All database operations should use Supabase client
- Real-time subscriptions need proper cleanup
- Authentication state should be checked on protected routes

