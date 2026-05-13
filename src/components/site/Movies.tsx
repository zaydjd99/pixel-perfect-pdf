import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

const posters = [
  "01313a8afee0e5d0bf29f8a654a1a8ea.webp",
  "10d1f43206bddd0c6ff215b41863efc3.webp",
  "4-1-1.webp",
  "551196002d621d1281d1350100dda067.webp",
  "5DM2wMt9nZUDnbE0zuGt2joigYd.webp",
  "6-min-1.webp",
  "7-1-1.webp",
  "9b7fc8e686026c8394e0be396e055078.webp",
  "9bc9500f2924843409a2eab9d158366d.webp",
  "a-man-called-otto.webp",
  "a89pLcZGLZVwM8KTIs0BWprnMHt.webp",
  "f04b7cee0e021e7d60eb64543f87f9c2.webp",
  "fG639Twc2QOYmrAVx3Onj864YHW.webp",
  "magic-mikes.webp",
  "movie-05.webp",
  "movie-poster-1.webp",
  "movie-poster-2.webp",
  "movie-poster-3.webp",
  "pkDiSsxBOfNz4IO3LqmztgM8xOe.webp",
  "tinywow_Film_1_15266411-1.webp",
  "tinywow_Film_2_15266479.webp",
  "tokyno-gfx-blachowicz-adesyana.webp",
  "ymMaqwKN3Ovy9nlIRmk5GsnxEkx.webp",
  "zCZJXSDPZKGml4I5zvxNpdx8jra.webp",
];

const PER_SLIDE = 5;
const slides = Array.from({ length: Math.ceil(posters.length / PER_SLIDE) }, (_, i) =>
  posters.slice(i * PER_SLIDE, i * PER_SLIDE + PER_SLIDE)
);

export function Movies() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((i) => (i + total - 1) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="overflow-hidden bg-surface/40 border-y border-border/40 pt-10 pb-0 md:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {isGerman ? "Filme & " : "Movies & "}<span className="text-gradient-green">{isGerman ? "TV-Serien" : "TV Shows"}</span>
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {isGerman ? "Unbegrenzte Unterhaltungsbibliothek, täglich aktualisiert" : "Unlimited entertainment library updated daily"}
            </p>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button type="button" onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-2">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-2">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden select-none pb-10">
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ width: `${total * 100}%`, transform: `translateX(-${index * (100 / total)}%)` }}
          >
            {slides.map((slide, si) => (
              <div key={si} className="shrink-0" style={{ width: `${100 / total}%` }}>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-4 xl:grid-cols-5">
                  {slide.map((file, pi) => (
                    <article
                      key={file}
                      className={`group relative aspect-[0.7] overflow-hidden rounded-xl border border-border bg-surface-2 shadow-[0_12px_40px_rgba(0,0,0,0.3)] ${pi >= 3 ? "hidden md:block" : ""} ${pi >= 4 ? "hidden xl:block" : ""}`}
                    >
                      <img
                        src={`/movie-posters/${file}`}
                        alt={file.replace(/\.[a-z]+$/, "")}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-4 md:hidden pb-8">
          <button type="button" onClick={prev} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground active:bg-surface-2">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs text-muted-foreground">{index + 1} / {total}</span>
          <button type="button" onClick={next} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground active:bg-surface-2">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
