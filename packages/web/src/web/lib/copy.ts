export type Lang = "es" | "en";

export const LINKS = {
  soundcloud: "https://soundcloud.com/ferchx0408",
  spotify: "https://open.spotify.com/intl-es/artist/19T7tmXoFdH1gSnazAaKkH",
  spotifyEmbed: "https://open.spotify.com/embed/artist/19T7tmXoFdH1gSnazAaKkH?theme=0",
  appleMusic: "https://music.apple.com/es/artist/ferchx/1821387743",
  instagram: "https://www.instagram.com/ferchx_bhdp",
  whatsapp: "https://wa.me/528445927862",
  phoneLabel: "+52 844 592 7862",
  nodo: "https://nododjgear.com",
} as const;

export const GALLERY = [
  "/images/ferchx-01.jpg",
  "/images/ferchx-02.jpg",
  "/images/ferchx-03.jpg",
] as const;

/** Equipment shown as visual cards in the rider */
export const GEAR = [
  {
    id: "cdj",
    name: "Pioneer CDJ-3000 / 3000X",
    qty: "2×",
    role: { es: "Reproductores", en: "Players" },
    detail: {
      es: "Enlazados por LAN. Ideal: tercer CDJ en cabina.",
      en: "Linked via LAN. Ideal: third CDJ in the booth.",
    },
  },
  {
    id: "mixer",
    name: "Pioneer DJM-V10-LF",
    qty: "1×",
    role: { es: "Mezcladora", en: "Mixer" },
    detail: {
      es: "Preferida. Alternativas: DJM-A9 o DJM-900NXS2.",
      en: "Preferred. Alternatives: DJM-A9 or DJM-900NXS2.",
    },
  },
  {
    id: "rmx",
    name: "Pioneer RMX-1000",
    qty: "1×",
    role: { es: "Efectos", en: "Effects" },
    detail: {
      es: "En send/return de la mezcladora, si el venue lo permite.",
      en: "On mixer send/return when the venue allows.",
    },
  },
  {
    id: "monitors",
    name: "Monitores de cabina",
    qty: "2×",
    role: { es: "Monitoreo", en: "Monitoring" },
    detail: {
      es: "Con control de volumen independiente.",
      en: "With independent volume control.",
    },
  },
  {
    id: "booth",
    name: "Cabina / mesa",
    qty: "—",
    role: { es: "Espacio", en: "Booth" },
    detail: {
      es: "Mesa firme ~1.00 m alto, mínimo 2 m de ancho.",
      en: "Solid table ~1.00 m high, 2 m wide minimum.",
    },
  },
  {
    id: "power",
    name: "Energía + luces",
    qty: "4×",
    role: { es: "Infra", en: "Power" },
    detail: {
      es: "4 contactos aterrizados 110 V. Luz tenue; DMX si hay show.",
      en: "4 grounded 110 V outlets. Dim light; DMX if light show.",
    },
  },
] as const;

/**
 * Instagram / live videos. Reel URLs get filled as we confirm them from @ferchx_bhdp.
 * Until then the UI still links out to Instagram highlights.
 */
export const VIDEOS = [
  {
    id: "reel-daqf5",
    title: { es: "Manu House — cabina", en: "Manu House — booth" },
    href: "https://www.instagram.com/ferchx_bhdp/reel/Daqf5OJJRrY/",
    embed: "https://www.instagram.com/reel/Daqf5OJJRrY/embed",
    kind: "reel" as const,
    note: {
      es: "Set en cabina, ambiente tropical outdoor.",
      en: "Booth set in a tropical outdoor space.",
    },
  },
  {
    id: "reel-drtj",
    title: { es: "Skatepark Fest 2025", en: "Skatepark Fest 2025" },
    href: "https://www.instagram.com/ferchx_bhdp/reel/DRtjXucDkjM/",
    embed: "https://www.instagram.com/reel/DRtjXucDkjM/embed",
    kind: "reel" as const,
    note: {
      es: "Pista en vivo — equipo con @nodo_dj_gear.",
      en: "Live crowd — gear with @nodo_dj_gear.",
    },
  },
  {
    id: "reel-drsq",
    title: { es: "Electric Night Chihuahua", en: "Electric Night Chihuahua" },
    href: "https://www.instagram.com/ferchx_bhdp/reel/DRsqOCoibOw/",
    embed: "https://www.instagram.com/reel/DRsqOCoibOw/embed",
    kind: "reel" as const,
    note: {
      es: "Soundcheck / night — decks y cabina en vivo.",
      en: "Soundcheck / night — live decks and booth.",
    },
  },
  {
    id: "reel-dwm",
    title: { es: "Barbol — stage", en: "Barbol — stage" },
    href: "https://www.instagram.com/ferchx_bhdp/reel/DW_MhorDgb2/",
    embed: "https://www.instagram.com/reel/DW_MhorDgb2/embed",
    kind: "reel" as const,
    note: {
      es: "Montaje outdoor de escenario y producción.",
      en: "Outdoor stage setup and production.",
    },
  },
  {
    id: "reel-dx2x",
    title: { es: "LED / pixel bar", en: "LED / pixel bar" },
    href: "https://www.instagram.com/ferchx_bhdp/reel/DX2X4DJJZoc/",
    embed: "https://www.instagram.com/reel/DX2X4DJJZoc/embed",
    kind: "reel" as const,
    note: {
      es: "Instalación LED junto a setup de evento.",
      en: "LED pixel install next to the event setup.",
    },
  },
  {
    id: "highlight-ferchx",
    title: { es: "Highlight 🎧 FerchX dj", en: "Highlight 🎧 FerchX dj" },
    href: "https://www.instagram.com/stories/highlights/18020925587237560/",
    embed: null,
    kind: "highlight" as const,
    note: {
      es: "Historias destacadas de DJ FerchX.",
      en: "DJ FerchX story highlights.",
    },
  },
  {
    id: "highlight-nodo",
    title: { es: "Highlight Nodo DJ", en: "Highlight Nodo DJ" },
    href: "https://www.instagram.com/stories/highlights/17867827698243356/",
    embed: null,
    kind: "highlight" as const,
    note: {
      es: "Historias de Nodo DJ Gear / producción.",
      en: "Nodo DJ Gear / production highlights.",
    },
  },
] as const;

export const MARQUEE = [
  "TECH HOUSE",
  "MELODIC HOUSE",
  "STAGE MANAGER",
  "LIGHT JOCKEY",
  "LASER VJ",
  "PRODUCTOR",
  "SALTILLO MX",
] as const;

type Section = { kicker: string; title: string };

export type Copy = {
  nav: {
    sets: string;
    bio: string;
    gallery: string;
    videos: string;
    rider: string;
    gear: string;
    booking: string;
  };
  hero: {
    tag: string;
    genres: string;
    city: string;
    cta: string;
    scroll: string;
  };
  sets: Section & { note: string; platforms: string };
  bio: Section & { paragraphs: string[]; copyBtn: string; copied: string; roles: string[] };
  gallery: Section & { note: string; download: string };
  videos: Section & { note: string; openIg: string };
  rider: Section & {
    note: string;
    rows: { label: string; value: string }[];
    flexible: string;
    gearTitle: string;
  };
  gear: Section & {
    note: string;
    cta: string;
    visit: string;
    points: string[];
  };
  booking: Section & {
    line: string;
    whatsapp: string;
    instagram: string;
    basedIn: string;
  };
  footer: { rights: string; builtWith: string };
};

const es: Copy = {
  nav: {
    sets: "Sets",
    bio: "Bio",
    gallery: "Galería",
    videos: "Videos",
    rider: "Rider",
    gear: "Renta",
    booking: "Booking",
  },
  hero: {
    tag: "Press Kit",
    genres: "TECH HOUSE · MELODIC HOUSE",
    city: "SALTILLO, MÉXICO",
    cta: "Escuchar",
    scroll: "Scroll",
  },
  sets: {
    kicker: "01 — Escucha",
    title: "Sets",
    note: "Selección en SoundCloud y catálogo en plataformas.",
    platforms: "Plataformas",
  },
  bio: {
    kicker: "02 — Quién es",
    title: "Bio",
    roles: ["DJ", "Productor", "Stage Manager", "Light Jockey", "Laser VJ"],
    paragraphs: [
      "FerchX es DJ y productor mexicano radicado en Saltillo. Su historia con la música electrónica empezó mucho antes de la cabina: montando escenarios, instalando y rentando equipo, dirigiendo la noche como stage manager, light jockey y laser VJ. Aprendió la escena desde adentro — cómo se construye una fiesta, cómo respira un cuarto y qué la sostiene hasta el final.",
      "Por eso sus sets no son una simple selección de discos, sino experiencias multisensoriales. Tech house y melodic house como columna vertebral, con la lectura de pista de alguien que ha estado en los dos lados del escenario: el que arma la producción y el que la vive. Sus fiestas se volvieron referencia en la escena local, de esas que se cuentan entre los que estuvieron.",
      "Durante años cargó una inquietud más profunda: la necesidad de forjar su propio legado sonoro. El tiempo postergó esas maquetas, pero hoy están saliendo. FerchX ya suena en Spotify, Apple Music y SoundCloud.",
    ],
    copyBtn: "Copiar esta bio",
    copied: "Copiada ✓",
  },
  gallery: {
    kicker: "03 — Archivo",
    title: "Galería",
    note: "Clic en cualquier foto para verla completa.",
    download: "Descargar",
  },
  videos: {
    kicker: "04 — En vivo",
    title: "Videos",
    note: "Cabina, sets y cortes desde Instagram.",
    openIg: "Ver en Instagram",
  },
  rider: {
    kicker: "05 — Requerimientos",
    title: "Rider técnico",
    note: "Equipo estándar. Todo es adaptable al venue.",
    gearTitle: "Equipo en cabina",
    rows: [
      { label: "Reproductores", value: "2× Pioneer CDJ-3000 o CDJ-3000X, enlazados por LAN" },
      {
        label: "Mezcladora",
        value: "Pioneer DJM-V10-LF (preferido). Alternativas: DJM-A9 o DJM-900NXS2",
      },
      {
        label: "Adicional",
        value:
          "Si es posible: 1× Pioneer RMX-1000 en el send/return de la mezcladora y un tercer CDJ-3000 / CDJ-3000X",
      },
      { label: "Monitoreo", value: "2 monitores de cabina con control de volumen independiente" },
      { label: "Cabina", value: "Mesa firme a ~1.00 m de altura, mínimo 2 m de ancho" },
      { label: "Energía", value: "4 contactos aterrizados 110 V dentro de la cabina" },
      { label: "Iluminación", value: "Luz tenue en cabina; DMX disponible si hay show de luces" },
      { label: "Extras", value: "2 botellas de agua, toalla y espacio para laptop" },
      { label: "Lleva", value: "USB propios; control de iluminación y láser bajo solicitud" },
    ],
    flexible: "¿Tu venue tiene otro setup? Escríbeme y lo resolvemos.",
  },
  gear: {
    kicker: "06 — Si el venue no tiene equipo",
    title: "Renta de equipo",
    note: "Nodo DJ Gear arma el setup completo para tu evento: CDJs, mixer, monitoreo y soporte técnico.",
    cta: "Cotizar en Nodo DJ Gear",
    visit: "Abrir nododjgear.com",
    points: [
      "Renta profesional de CDJ, mezcladoras y monitoreo",
      "Backliners y soporte en el venue",
      "Planeación técnica a partir del rider de FerchX",
      "Monterrey y norte de México",
    ],
  },
  booking: {
    kicker: "07 — Contacto",
    title: "Booking",
    line: "Fechas, festivales, producción de escenario y show de luces.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    basedIn: "Base en Saltillo, Coahuila — disponible para viajar.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    builtWith: "Press kit oficial",
  },
};

const en: Copy = {
  nav: {
    sets: "Sets",
    bio: "Bio",
    gallery: "Gallery",
    videos: "Videos",
    rider: "Rider",
    gear: "Rental",
    booking: "Booking",
  },
  hero: {
    tag: "Press Kit",
    genres: "TECH HOUSE · MELODIC HOUSE",
    city: "SALTILLO, MEXICO",
    cta: "Listen",
    scroll: "Scroll",
  },
  sets: {
    kicker: "01 — Listen",
    title: "Sets",
    note: "Selected mixes on SoundCloud, full catalogue on streaming.",
    platforms: "Platforms",
  },
  bio: {
    kicker: "02 — Who he is",
    title: "Bio",
    roles: ["DJ", "Producer", "Stage Manager", "Light Jockey", "Laser VJ"],
    paragraphs: [
      "FerchX is a Mexican DJ and producer based in Saltillo. His story with electronic music started long before the booth: building stages, installing and renting gear, running the night as stage manager, light jockey and laser VJ. He learned the scene from the inside — how a party is built, how a room breathes, and what keeps it alive until the end.",
      "That is why his sets are not just a record selection but multisensory experiences. Tech house and melodic house at the core, read through the eyes of someone who has been on both sides of the stage: the one who builds the production and the one who lives it. His parties became a reference in the local scene — the kind people who were there still talk about.",
      "For years he carried a deeper restlessness: the need to forge his own sonic legacy. Time kept those demos on hold, but they are coming out now. FerchX is already on Spotify, Apple Music and SoundCloud.",
    ],
    copyBtn: "Copy this bio",
    copied: "Copied ✓",
  },
  gallery: {
    kicker: "03 — Archive",
    title: "Gallery",
    note: "Click any photo to open it full size.",
    download: "Download",
  },
  videos: {
    kicker: "04 — Live",
    title: "Videos",
    note: "Booth cuts and live sets from Instagram.",
    openIg: "Open on Instagram",
  },
  rider: {
    kicker: "05 — Requirements",
    title: "Technical rider",
    note: "Standard gear. Everything can be adapted to the venue.",
    gearTitle: "Booth gear",
    rows: [
      { label: "Players", value: "2× Pioneer CDJ-3000 or CDJ-3000X, linked via LAN" },
      {
        label: "Mixer",
        value: "Pioneer DJM-V10-LF (preferred). Alternatives: DJM-A9 or DJM-900NXS2",
      },
      {
        label: "Add-on",
        value:
          "If possible: 1× Pioneer RMX-1000 on the mixer's send/return and a third CDJ-3000 / CDJ-3000X",
      },
      { label: "Monitoring", value: "2 booth monitors with independent volume control" },
      { label: "Booth", value: "Solid table at ~1.00 m height, 2 m wide minimum" },
      { label: "Power", value: "4 grounded 110 V outlets inside the booth" },
      { label: "Lighting", value: "Dim booth light; DMX available if there is a light show" },
      { label: "Extras", value: "2 bottles of water, a towel and space for a laptop" },
      { label: "Brings", value: "Own USB drives; lighting and laser control on request" },
    ],
    flexible: "Different setup at your venue? Message me and we'll work it out.",
  },
  gear: {
    kicker: "06 — If the venue has no gear",
    title: "Equipment rental",
    note: "Nodo DJ Gear builds the full setup for your event: CDJs, mixer, monitoring and on-site support.",
    cta: "Get a Nodo DJ Gear quote",
    visit: "Open nododjgear.com",
    points: [
      "Pro rental of CDJs, mixers and monitoring",
      "Backliners and on-site support",
      "Technical planning from FerchX's rider",
      "Monterrey & northern Mexico",
    ],
  },
  booking: {
    kicker: "07 — Contact",
    title: "Booking",
    line: "Dates, festivals, stage production and light shows.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    basedIn: "Based in Saltillo, Coahuila — available to travel.",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Official press kit",
  },
};

export const COPY: Record<Lang, Copy> = { es, en };
