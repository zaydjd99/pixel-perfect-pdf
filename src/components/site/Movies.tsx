import { ChevronLeft, ChevronRight } from "lucide-react";

const posters = [
  { t: "Galactic Wars", g: "from-orange-500/40 to-red-700/40" },
  { t: "Operation Dawn", g: "from-amber-600/40 to-yellow-900/40" },
  { t: "The Inquiry", g: "from-emerald-700/40 to-stone-800/40" },
  { t: "Desert Storm", g: "from-orange-600/40 to-rose-900/40" },
  { t: "Last Stand", g: "from-rose-600/40 to-zinc-900/40" },
];

export function Movies() {
  return (
    <section className="bg-surface/40 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Movies & <span className="text-gradient-green">TV Shows</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Unlimited entertainment library updated daily
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 grid place-items-center rounded-full border border-border bg-surface hover:bg-surface-2">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 grid place-items-center rounded-full border border-border bg-surface hover:bg-surface-2">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {posters.map((p) => (
            <div
              key={p.t}
              className={`aspect-[2/3] rounded-lg bg-gradient-to-br ${p.g} border border-border relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-sm font-semibold">{p.t}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  HD · 2024
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
