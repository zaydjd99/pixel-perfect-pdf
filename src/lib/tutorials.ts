import deviceFiretv from "@/assets/device-firetv.png";
import deviceAndroid from "@/assets/device-android.png";
import deviceApple from "@/assets/device-apple.png";
import deviceWindows from "@/assets/device-windows.png";
import deviceTv from "@/assets/device-tv.png";
import deviceMag from "@/assets/device-mag.png";

export type TutorialStep = { title: string; body: string };
export type TutorialMethod = { name: string; tag?: string; steps: TutorialStep[]; link?: { label: string; href: string } };
export type Tutorial = {
  slug: string;
  name: string;
  image: string;
  subtitle: string;
  subtitleDe: string;
  intro: string;
  introDe: string;
  needs: string[];
  needsDe: string[];
  methods: TutorialMethod[];
  methodsDe: TutorialMethod[];
};

const tivimateSteps = (t: "en" | "de"): TutorialStep[] =>
  t === "en"
    ? [
        { title: "Install TiviMate", body: "Download TiviMate IPTV Player from the Google Play Store." },
        { title: "Add Playlist", body: 'Open the app and tap "Add Playlist". Select "Xtream Codes".' },
        { title: "Enter Credentials", body: "Input your server URL, username and password from your welcome email." },
        { title: "Enjoy Your Channels", body: "Wait a few seconds for channels and EPG to sync. Start watching!" },
      ]
    : [
        { title: "TiviMate installieren", body: "Lade TiviMate IPTV Player aus dem Google Play Store herunter." },
        { title: "Playlist hinzufügen", body: 'Öffne die App und tippe auf „Playlist hinzufügen". Wähle „Xtream Codes".' },
        { title: "Zugangsdaten eingeben", body: "Gib Server-URL, Benutzername und Passwort aus deiner Willkommens-E-Mail ein." },
        { title: "Sender genießen", body: "Warte ein paar Sekunden, bis Sender und EPG synchronisieren. Los geht's!" },
      ];

const smartersSteps = (t: "en" | "de"): TutorialStep[] =>
  t === "en"
    ? [
        { title: "Install IPTV Smarters Pro", body: "Download IPTV Smarters Pro from the App / Play Store." },
        { title: "Login with Xtream Codes", body: 'Open the app, tap "Login with Xtream Codes API" and enter your server URL, username and password.' },
        { title: "Start Streaming", body: "Your channels, VOD and EPG load automatically within seconds." },
      ]
    : [
        { title: "IPTV Smarters Pro installieren", body: "Lade IPTV Smarters Pro aus dem App- bzw. Play Store." },
        { title: "Mit Xtream Codes anmelden", body: 'Öffne die App, tippe „Login with Xtream Codes API" und gib Server-URL, Nutzername und Passwort ein.' },
        { title: "Streaming starten", body: "Sender, VOD und EPG werden automatisch innerhalb weniger Sekunden geladen." },
      ];

const hotPlayerSteps = (t: "en" | "de"): TutorialStep[] =>
  t === "en"
    ? [
        { title: "Install Hot Player", body: "Install Hot Player on your device (Downloader code 395800 for Fire TV, App Store / hotplayer.app otherwise)." },
        { title: "Find Your MAC Address", body: "Open Hot Player — your device MAC address is displayed on the welcome screen." },
        { title: "Register at hotplayer.app", body: "On a phone or PC, go to hotplayer.app/upload and log in with your MAC address." },
        { title: "Add Your Playlist", body: 'Choose "M3U or Xtream Code", enter "NexaStream" as the playlist name and paste your M3U URL.' },
        { title: "Restart & Stream", body: "Save and restart Hot Player — your channels load automatically." },
      ]
    : [
        { title: "Hot Player installieren", body: "Installiere Hot Player auf deinem Gerät (Downloader-Code 395800 für Fire TV, App Store / hotplayer.app sonst)." },
        { title: "MAC-Adresse finden", body: "Öffne Hot Player — die MAC-Adresse erscheint auf dem Startbildschirm." },
        { title: "Bei hotplayer.app registrieren", body: "Gehe am Handy oder PC auf hotplayer.app/upload und melde dich mit deiner MAC-Adresse an." },
        { title: "Playlist hinzufügen", body: 'Wähle „M3U oder Xtream Code", gib „NexaStream" als Namen ein und füge deine M3U-URL ein.' },
        { title: "Neu starten & streamen", body: "Speichere und starte Hot Player neu — deine Sender werden automatisch geladen." },
      ];

const iboSteps = (t: "en" | "de"): TutorialStep[] =>
  t === "en"
    ? [
        { title: "Install IBO Player Pro", body: "Install IBO Player Pro on your device." },
        { title: "Note MAC & Device Key", body: "Open the app and note the MAC address and device key shown on screen." },
        { title: "Login at iboplayer.com", body: "Go to iboplayer.com/device/login and authenticate with both credentials." },
        { title: "Add Playlist", body: 'Click "Add playlist", enter "NexaStream" and paste your M3U link.' },
        { title: "Restart & Enjoy", body: "Save and restart IBO Player Pro. Your channels are ready." },
      ]
    : [
        { title: "IBO Player Pro installieren", body: "Installiere IBO Player Pro auf deinem Gerät." },
        { title: "MAC & Device Key notieren", body: "Öffne die App und notiere die angezeigte MAC-Adresse und den Device Key." },
        { title: "Bei iboplayer.com anmelden", body: "Gehe auf iboplayer.com/device/login und melde dich mit beiden Zugangsdaten an." },
        { title: "Playlist hinzufügen", body: 'Klicke auf „Add playlist", gib „NexaStream" ein und füge deinen M3U-Link ein.' },
        { title: "Neu starten & genießen", body: "Speichere und starte IBO Player Pro neu. Deine Sender sind bereit." },
      ];

const smartersIosSteps = (t: "en" | "de"): TutorialStep[] =>
  t === "en"
    ? [
        { title: "Download Smarters Player Lite", body: 'Search "Smarters Player Lite" in the App Store and install it.' },
        { title: "Login with Xtream Codes", body: 'Open the app and select "Login with Xtream Codes API".' },
        { title: "Enter Your Credentials", body: "Type any name, then your username, password and server URL." },
        { title: "Tap Add User", body: 'Tap "Add User" — channels and VOD load within seconds.' },
      ]
    : [
        { title: "Smarters Player Lite laden", body: 'Suche im App Store nach „Smarters Player Lite" und installiere die App.' },
        { title: "Mit Xtream Codes anmelden", body: 'Öffne die App und wähle „Login with Xtream Codes API".' },
        { title: "Zugangsdaten eingeben", body: "Vergib einen Namen und gib Nutzername, Passwort und Server-URL ein." },
        { title: "Add User antippen", body: '„Add User" antippen — Sender und VOD laden innerhalb weniger Sekunden.' },
      ];

const smartTvSteps = (t: "en" | "de", brand: "Samsung" | "LG"): TutorialStep[] =>
  t === "en"
    ? [
        { title: `Install Smart IPTV on ${brand} TV`, body: `Open the ${brand} app store, search for Smart IPTV or IBO Player Pro, then install it.` },
        { title: "Open the app", body: "Launch the app and write down the MAC address and device key shown on the screen." },
        { title: "Send us your details", body: "Send the MAC address/device key to NexaStream support by WhatsApp or Telegram." },
        { title: "Playlist activation", body: "We add your playlist to the app using your subscription credentials." },
        { title: "Restart and watch", body: "Restart the TV app. Live channels, movies and series will load automatically." },
      ]
    : [
        { title: `Smart IPTV auf ${brand} TV installieren`, body: `Öffne den ${brand} App Store, suche Smart IPTV oder IBO Player Pro und installiere die App.` },
        { title: "App öffnen", body: "Starte die App und notiere die MAC-Adresse sowie den Device Key auf dem Bildschirm." },
        { title: "Daten an uns senden", body: "Sende MAC-Adresse/Device Key per WhatsApp oder Telegram an den NexaStream Support." },
        { title: "Playlist-Aktivierung", body: "Wir fügen deine Playlist mit deinen Zugangsdaten in der App hinzu." },
        { title: "Neu starten und schauen", body: "Starte die TV-App neu. Live-Sender, Filme und Serien laden automatisch." },
      ];

const needsBase = (t: "en" | "de", device: string) =>
  t === "en"
    ? [`${device} device`, "NexaStream subscription credentials", "Reliable internet connection"]
    : [`${device}-Gerät`, "NexaStream-Zugangsdaten", "Stabile Internetverbindung"];

export const tutorials: Tutorial[] = [
  {
    slug: "fire-tv",
    name: "Amazon Fire TV / Fire Stick",
    image: deviceFiretv,
    subtitle: "2 recommended methods · Takes less than 2 minutes",
    subtitleDe: "2 empfohlene Methoden · Dauert weniger als 2 Minuten",
    intro: "Set up NexaStream on Fire TV or Fire Stick using Hot Player or IBO Player Pro.",
    introDe: "Richte NexaStream auf Fire TV oder Fire Stick mit Hot Player oder IBO Player Pro ein.",
    needs: needsBase("en", "Amazon Fire TV or Fire Stick"),
    needsDe: needsBase("de", "Amazon Fire TV oder Fire Stick"),
    methods: [
      { name: "Hot Player", tag: "Free", steps: hotPlayerSteps("en"), link: { label: "hotplayer.app", href: "https://hotplayer.app" } },
      { name: "IBO Player Pro", tag: "Freemium", steps: iboSteps("en"), link: { label: "iboplayer.com", href: "https://iboplayer.com" } },
    ],
    methodsDe: [
      { name: "Hot Player", tag: "Kostenlos", steps: hotPlayerSteps("de"), link: { label: "hotplayer.app", href: "https://hotplayer.app" } },
      { name: "IBO Player Pro", tag: "Freemium", steps: iboSteps("de"), link: { label: "iboplayer.com", href: "https://iboplayer.com" } },
    ],
  },
  {
    slug: "android",
    name: "Android TV · Phone · Box",
    image: deviceAndroid,
    subtitle: "3 recommended methods · Takes less than 2 minutes",
    subtitleDe: "3 empfohlene Methoden · Dauert weniger als 2 Minuten",
    intro: "Run NexaStream on any Android device — TV, phone or box.",
    introDe: "Nutze NexaStream auf jedem Android-Gerät — TV, Handy oder Box.",
    needs: needsBase("en", "Android (TV, phone or box)"),
    needsDe: needsBase("de", "Android (TV, Handy oder Box)"),
    methods: [
      { name: "TiviMate IPTV Player", tag: "Paid", steps: tivimateSteps("en"), link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv" } },
      { name: "IPTV Smarters Pro", tag: "Free", steps: smartersSteps("en") },
      { name: "Televizo IPTV Player", tag: "Free", steps: tivimateSteps("en") },
    ],
    methodsDe: [
      { name: "TiviMate IPTV Player", tag: "Kostenpflichtig", steps: tivimateSteps("de"), link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv" } },
      { name: "IPTV Smarters Pro", tag: "Kostenlos", steps: smartersSteps("de") },
      { name: "Televizo IPTV Player", tag: "Kostenlos", steps: tivimateSteps("de") },
    ],
  },
  {
    slug: "ios",
    name: "iPhone · iPad · Apple TV",
    image: deviceApple,
    subtitle: "2 recommended methods · Takes less than 2 minutes",
    subtitleDe: "2 empfohlene Methoden · Dauert weniger als 2 Minuten",
    intro: "Stream NexaStream on iOS 12+ devices and Apple TV.",
    introDe: "Streame NexaStream auf iOS 12+ Geräten und Apple TV.",
    needs: needsBase("en", "iPhone, iPad or Apple TV (iOS 12+)"),
    needsDe: needsBase("de", "iPhone, iPad oder Apple TV (iOS 12+)"),
    methods: [
      { name: "Smarters Player Lite", tag: "Free", steps: smartersIosSteps("en"), link: { label: "App Store", href: "https://apps.apple.com" } },
      { name: "UHF IPTV", tag: "Freemium", steps: smartersIosSteps("en") },
    ],
    methodsDe: [
      { name: "Smarters Player Lite", tag: "Kostenlos", steps: smartersIosSteps("de"), link: { label: "App Store", href: "https://apps.apple.com" } },
      { name: "UHF IPTV", tag: "Freemium", steps: smartersIosSteps("de") },
    ],
  },
  {
    slug: "windows",
    name: "Windows & macOS",
    image: deviceWindows,
    subtitle: "2 recommended methods · Takes less than 2 minutes",
    subtitleDe: "2 empfohlene Methoden · Dauert weniger als 2 Minuten",
    intro: "Set up NexaStream on Windows or macOS desktops.",
    introDe: "Richte NexaStream auf Windows- oder macOS-Computern ein.",
    needs: needsBase("en", "Windows or macOS computer"),
    needsDe: needsBase("de", "Windows- oder macOS-Computer"),
    methods: [
      { name: "Hot Player", tag: "Free", steps: hotPlayerSteps("en"), link: { label: "hotplayer.app", href: "https://hotplayer.app" } },
      { name: "IBO Player Pro", tag: "Freemium", steps: iboSteps("en"), link: { label: "iboplayer.com", href: "https://iboplayer.com" } },
    ],
    methodsDe: [
      { name: "Hot Player", tag: "Kostenlos", steps: hotPlayerSteps("de"), link: { label: "hotplayer.app", href: "https://hotplayer.app" } },
      { name: "IBO Player Pro", tag: "Freemium", steps: iboSteps("de"), link: { label: "iboplayer.com", href: "https://iboplayer.com" } },
    ],
  },
  {
    slug: "roku",
    name: "Roku TV & Streaming Stick",
    image: deviceTv,
    subtitle: "2 recommended methods · Takes less than 2 minutes",
    subtitleDe: "2 empfohlene Methoden · Dauert weniger als 2 Minuten",
    intro: "Set up NexaStream on Roku TVs and Roku streaming sticks.",
    introDe: "Richte NexaStream auf Roku-TVs und Roku-Streaming-Sticks ein.",
    needs: needsBase("en", "Roku TV or Roku streaming device"),
    needsDe: needsBase("de", "Roku-TV oder Roku-Streaming-Gerät"),
    methods: [
      { name: "Hot Player", tag: "Free", steps: hotPlayerSteps("en"), link: { label: "hotplayer.app", href: "https://hotplayer.app" } },
      { name: "IBO Player Pro", tag: "Freemium", steps: iboSteps("en"), link: { label: "iboplayer.com", href: "https://iboplayer.com" } },
    ],
    methodsDe: [
      { name: "Hot Player", tag: "Kostenlos", steps: hotPlayerSteps("de"), link: { label: "hotplayer.app", href: "https://hotplayer.app" } },
      { name: "IBO Player Pro", tag: "Freemium", steps: iboSteps("de"), link: { label: "iboplayer.com", href: "https://iboplayer.com" } },
    ],
  },
  {
    slug: "lg-tv",
    name: "LG TV",
    image: deviceTv,
    subtitle: "Smart IPTV / SS IPTV · Takes less than 2 minutes",
    subtitleDe: "Smart IPTV / SS IPTV · Dauert weniger als 2 Minuten",
    intro: "Use Smart IPTV or SS IPTV on LG WebOS televisions.",
    introDe: "Nutze Smart IPTV oder SS IPTV auf LG-WebOS-Fernsehern.",
    needs: needsBase("en", "LG WebOS TV"),
    needsDe: needsBase("de", "LG-WebOS-TV"),
    methods: [{ name: "Smart IPTV / IBO Player Pro", tag: "Freemium", steps: smartTvSteps("en", "LG") }],
    methodsDe: [{ name: "Smart IPTV / IBO Player Pro", tag: "Freemium", steps: smartTvSteps("de", "LG") }],
  },
  {
    slug: "samsung-tv",
    name: "Samsung TV",
    image: deviceTv,
    subtitle: "Smart IPTV · Takes less than 2 minutes",
    subtitleDe: "Smart IPTV · Dauert weniger als 2 Minuten",
    intro: "Use Smart IPTV on Samsung Tizen televisions.",
    introDe: "Nutze Smart IPTV auf Samsung-Tizen-Fernsehern.",
    needs: needsBase("en", "Samsung Tizen TV"),
    needsDe: needsBase("de", "Samsung-Tizen-TV"),
    methods: [{ name: "Smart IPTV / IBO Player Pro", tag: "Freemium", steps: smartTvSteps("en", "Samsung") }],
    methodsDe: [{ name: "Smart IPTV / IBO Player Pro", tag: "Freemium", steps: smartTvSteps("de", "Samsung") }],
  },
  {
    slug: "mag-stb",
    name: "MAG / STB",
    image: deviceMag,
    subtitle: "Portal URL setup · Takes less than 2 minutes",
    subtitleDe: "Portal-URL-Einrichtung · Dauert weniger als 2 Minuten",
    intro: "Configure your MAG / STB box with the NexaStream portal URL.",
    introDe: "Konfiguriere deine MAG- / STB-Box mit der NexaStream-Portal-URL.",
    needs: needsBase("en", "MAG box or compatible STB"),
    needsDe: needsBase("de", "MAG-Box oder kompatible STB"),
    methods: [
      {
        name: "Portal Setup",
        steps: [
          { title: "Open Settings", body: "On the MAG home screen go to Settings → System Settings → Servers → Portals." },
          { title: "Enter Portal URL", body: "Set Portal 1 name to NexaStream and paste the portal URL from your welcome email." },
          { title: "Reboot Portal", body: "Save and reboot the portal. Your channels load automatically." },
        ],
      },
    ],
    methodsDe: [
      {
        name: "Portal-Einrichtung",
        steps: [
          { title: "Einstellungen öffnen", body: "Auf dem MAG-Startbildschirm: Einstellungen → System → Server → Portale." },
          { title: "Portal-URL eingeben", body: "Setze Portal 1 auf NexaStream und füge die Portal-URL aus deiner Willkommens-E-Mail ein." },
          { title: "Portal neu starten", body: "Speichere und starte das Portal neu. Deine Sender laden automatisch." },
        ],
      },
    ],
  },
];

export const getTutorial = (slug: string) => tutorials.find((t) => t.slug === slug);
