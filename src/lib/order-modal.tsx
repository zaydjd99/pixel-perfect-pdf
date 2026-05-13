import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { X, Zap } from "lucide-react";
import { telegramUrl, whatsappUrl } from "@/lib/site-links";
import { useLanguage } from "@/lib/language";

type OrderContext = { open: (planLabel?: string) => void; close: () => void };

const Ctx = createContext<OrderContext | null>(null);

export function useOrderModal() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useOrderModal must be used inside OrderModalProvider");
  return c;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.46 2.04 7.76L.5 31.5l7.92-2.07A15.43 15.43 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5Zm0 28.16c-2.5 0-4.95-.66-7.1-1.92l-.51-.3-4.7 1.23 1.26-4.58-.33-.53A12.66 12.66 0 1 1 28.66 16c0 6.98-5.68 12.66-12.66 12.66Zm6.95-9.48c-.38-.19-2.25-1.11-2.6-1.24-.35-.13-.6-.19-.85.19-.25.38-.97 1.24-1.19 1.49-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88-1.13-1.01-1.89-2.25-2.11-2.63-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.05-1.17-2.81-.31-.74-.62-.64-.85-.65l-.72-.01c-.25 0-.66.09-1 .47-.34.38-1.31 1.28-1.31 3.13 0 1.85 1.34 3.63 1.53 3.88.19.25 2.65 4.05 6.42 5.68.9.39 1.6.62 2.14.79.9.29 1.72.25 2.37.15.72-.11 2.25-.92 2.57-1.81.32-.89.32-1.65.22-1.81-.09-.16-.34-.25-.72-.44Z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0Zm7.43 11-2.48 11.7c-.18.83-.68 1.03-1.38.64l-3.81-2.81-1.84 1.77c-.2.2-.37.37-.77.37l.27-3.88 7.07-6.39c.31-.27-.07-.43-.48-.16l-8.74 5.5-3.76-1.18c-.82-.26-.83-.82.17-1.21l14.7-5.67c.68-.25 1.28.16 1.05 1.32Z" />
    </svg>
  );
}

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [openState, setOpenState] = useState(false);
  const [plan, setPlan] = useState<string | undefined>();
  const { language } = useLanguage();
  const isGerman = language === "de";

  const open = useCallback((planLabel?: string) => {
    setPlan(planLabel);
    setOpenState(true);
  }, []);
  const close = useCallback(() => setOpenState(false), []);

  useEffect(() => {
    if (!openState) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openState, close]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      {openState && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={close}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border bg-surface shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold pr-8">
              {isGerman ? "Wie möchtest du bestellen?" : "How would you like to order?"}
            </h3>
            {plan && (
              <div className="mt-1 text-xs text-muted-foreground">
                {isGerman ? "Ausgewählter Plan: " : "Plan selected: "}
                <span className="text-foreground">{plan}</span>
              </div>
            )}
            <div className="mt-2 flex items-center gap-1.5 text-xs text-primary">
              <Zap className="w-3.5 h-3.5 fill-current" />
              {isGerman ? "Schneller Support · Verfügbar 9h–Mitternacht" : "Fast support · Available 9h–midnight"}
            </div>

            <div className="mt-5 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 w-full rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 transition px-4 py-3.5"
              >
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                <span className="font-medium">{isGerman ? "Per WhatsApp bestellen" : "Order via WhatsApp"}</span>
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 w-full rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 transition px-4 py-3.5"
              >
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#229ED9] text-white">
                  <TelegramIcon className="w-5 h-5" />
                </span>
                <span className="font-medium">{isGerman ? "Per Telegram bestellen" : "Order via Telegram"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

export { WhatsAppIcon, TelegramIcon };
