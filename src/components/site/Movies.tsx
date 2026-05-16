import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

const posters = [
  // Featured — new posters from user upload
  "movie-poster-1.webp",
  "movie-poster-2.webp",
  "movie-poster-3.webp",
  "movie-05.webp",
  "magic-mikes.webp",
  "tinywow_Film_1_15266411-1.webp",
  "tinywow_Film_2_15266479.webp",
  "pkDiSsxBOfNz4IO3LqmztgM8xOe.webp",
  "ymMaqwKN3Ovy9nlIRmk5GsnxEkx.webp",
  "zCZJXSDPZKGml4I5zvxNpdx8jra.webp",
  "tokyno-gfx-blachowicz-adesyana.webp",
  // Existing catalogue
  "5DM2wMt9nZUDnbE0zuGt2joigYd.webp",
  "fG639Twc2QOYmrAVx3Onj864YHW.webp",
  "a89pLcZGLZVwM8KTIs0BWprnMHt.webp",
  "9b7fc8e686026c8394e0be396e055078.webp",
  "6-min-1.webp",
  "f04b7cee0e021e7d60eb64543f87f9c2.webp",
  "9bc9500f2924843409a2eab9d158366d.webp",
  "a-man-called-otto.webp",
];

const PER_SLIDE = 5;
const slides = Array.from({ length: Math.ceil(posters.length / PER_SLIDE) }, (_, i) =>
  posters.slice(i * PER_SLIDE, i * PER_SLIDE + PER_SLIDE)
);

export function Movies() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const [index, setIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const total = slides.length;
  const mobileTotal = 5;
  const mobilePosters = Array.from({ length: 3 }, (_, i) => posters[(mobileIndex * 3 + i) % posters.length]);

  const prev = () => setIndex((i) => (i + total - 1) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const prevMobile = () => setMobileIndex((i) => (i + mobileTotal - 1) % mobileTotal);
  const nextMobile = () => setMobileIndex((i) => (i + 1) % mobileTotal);

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

        <div className="hidden overflow-hidden select-none pb-10 md:block">
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ width: `${total * 100}%`, transform: `translateX(-${index * (100 / total)}%)` }}
          >
            {slides.map((slide, si) => (
              <div key={si} className="shrink-0" style={{ width: `${100 / total}%` }}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
                  {slide.map((file, pi) => (
                    <article
                      key={file}
                      className={`group relative aspect-[0.7] overflow-hidden rounded-xl border border-border bg-surface-2 shadow-[0_12px_40px_rgba(0,0,0,0.3)] ${pi >= 4 ? "hidden sm:block" : ""}`}
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

        <div className="select-none md:hidden">
          <div className="grid grid-cols-3 gap-3">
            {mobilePosters.map((file) => (
              <article key={`${mobileIndex}-${file}`} className="relative aspect-[0.7] overflow-hidden rounded-xl border border-border bg-surface-2 shadow-[0_12px_32px_rgb(0_0_0/0.35)]">
                <img
                  src={`/movie-posters/${file}`}
                  alt={file.replace(/\.[a-z]+$/, "")}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-4 md:hidden pb-8">
          <button type="button" onClick={prevMobile} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground active:bg-surface-2">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs text-muted-foreground">{mobileIndex + 1} / {mobileTotal}</span>
          <button type="button" onClick={nextMobile} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground active:bg-surface-2">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
