import { ArrowRight, Leaf, MapPin, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        {/* Ambient Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-bioluminescent-teal/20 blur-3xl" />
          <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-bioluminescent-gold/15 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-500/10 blur-3xl" />
        </div>

        <div className="container-narrow relative z-10 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-forest-100 px-4 py-2 text-sm font-medium text-forest-700">
            <Sparkles className="h-4 w-4" />
            <span>The Planetary Party Protocol</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 mb-6 animate-fade-up">
            <span className="block">Sense. See. Flow.</span>
            <span className="text-gradient block">Celebrate. Regenerate.</span>
          </h1>

          {/* Subtitle */}
          <p className="body-large stagger-2 mx-auto mb-10 max-w-2xl animate-fade-up">
            A living ecosystem platform enabling bioregional communities to
            sense, decide, and act together in service to life.
          </p>

          {/* CTA Buttons */}
          <div className="stagger-3 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="btn-primary glow-teal group text-lg"
            >
              <span>Enter the Protocol</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="btn-ghost text-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-earth-400 p-1">
            <div className="h-2 w-full rounded-full bg-earth-400" />
          </div>
        </div>
      </section>

      {/* Protocol Overview */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <h2 className="heading-2 mb-4">The Living Protocol</h2>
            <p className="body-large mx-auto max-w-2xl">
              Five interconnected phases that mirror the rhythms of living
              systems
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {protocolPhases.map((phase, index) => (
              <div
                key={phase.name}
                className="stagger-${index + 1} group animate-fade-up text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-100 to-bioluminescent-teal/20 transition-transform group-hover:scale-110">
                  <span className="text-2xl">{phase.emoji}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-forest-700">
                  {phase.name}
                </h3>
                <p className="body text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <h2 className="heading-2 mb-4">Bioregional Intelligence</h2>
            <p className="body-large mx-auto max-w-2xl">
              Tools and spaces for communities to coordinate, amplify efforts,
              and emerge as something larger than themselves
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500 to-bioluminescent-teal text-white transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="heading-3 mb-2 text-xl">{feature.title}</h3>
                <p className="body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section relative overflow-hidden bg-forest-900 text-white">
        <div className="absolute inset-0 bg-gradient-organic from-bioluminescent-teal/20 to-bioluminescent-gold/10" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
            Join the Emergence
          </h2>
          <p className="mb-10 text-lg text-earth-200 md:text-xl">
            Connect with your bioregion. Weave with the guilds. Flow with the
            funds. Celebrate together.
          </p>
          <Link
            href="/signup"
            className="btn inline-flex bg-bioluminescent-teal text-forest-950 hover:bg-bioluminescent-cyan"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-earth-200 bg-surface px-4 py-12">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-forest-600" />
              <span className="font-display text-xl font-semibold text-forest-700">
                Planet Party
              </span>
            </div>
            <p className="body text-sm text-earth-500">
              In service to life, together.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const protocolPhases = [
  {
    name: "Sense",
    emoji: "🌊",
    description: "Gather signals from the living world",
  },
  {
    name: "See",
    emoji: "👁️",
    description: "Make patterns visible and meaningful",
  },
  {
    name: "Flow",
    emoji: "💧",
    description: "Move resources to where life needs them",
  },
  {
    name: "Celebrate",
    emoji: "🎉",
    description: "Honor what emerges and those who served",
  },
  {
    name: "Regenerate",
    emoji: "🌱",
    description: "Return energy to the source for new cycles",
  },
];

const features = [
  {
    title: "Bioregional Dashboards",
    description:
      "Real-time sensing of community health, ecological indicators, and collective momentum across your bioregion.",
    icon: MapPin,
  },
  {
    title: "Council Spaces",
    description:
      "Sacred containers for community decision-making, honoring indigenous wisdom and emergent governance.",
    icon: Users,
  },
  {
    title: "Flow Funds",
    description:
      "Trust-based, relational capital that moves fluidly to where life needs it most.",
    icon: Sparkles,
  },
];

