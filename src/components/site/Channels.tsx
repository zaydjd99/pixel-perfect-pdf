import { Trophy, Clapperboard, Newspaper, Film, ListVideo, Baby, BookOpen } from "lucide-react";

const cats = [
  { i: Trophy, n: "Sports", c: "3,500+", d: "channels included" },
  { i: Clapperboard, n: "Entertainment", c: "5,000+", d: "channels included" },
  { i: Newspaper, n: "News", c: "1,200+", d: "channels included" },
  { i: Film, n: "Movies", c: "140,000+", d: "titles included" },
  { i: ListVideo, n: "Series", c: "40,000+", d: "titles included" },
  { i: Baby, n: "Kids", c: "800+", d: "channels included" },
  { i: BookOpen, n: "Documentaries", c: "1,500+", d: "titles included" },
];

export function Channels() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          Channels & Live Events
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          Explore our <span className="text-gradient-green">massive channel library</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Live sports, major events & blockbuster entertainment — Champions League, Formula 1,
          Premier League and thousands more channels from across the world, all in one place.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {cats.map((c) => (
          <div
            key={c.n}
            className="relative rounded-xl border border-border bg-surface/50 p-5 hover:border-primary/40 transition group overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-surface-2 grid place-items-center text-primary">
                <c.i className="w-5 h-5" />
              </div>
              <div className="text-xs px-2 py-0.5 rounded-md bg-primary/15 text-primary font-medium">
                {c.c}
              </div>
            </div>
            <div className="mt-4 font-semibold">{c.n}</div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {c.c} {c.d}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        🔞 Adult (18+) content is not included by default — available upon request only.
      </p>

      <div className="mt-8 flex items-center justify-between rounded-xl border border-border bg-surface/40 p-4">
        <span className="text-sm text-muted-foreground">
          Latest movies and series added regularly.
        </span>
        <button className="text-sm font-medium px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground">
          Get full access →
        </button>
      </div>
    </section>
  );
}
