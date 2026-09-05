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

export const LIGHTING_GALLERY = [
  {
    src: "/images/lighting-01.png",
    tag: { es: "Stage / truss", en: "Stage / truss" },
    caption: { es: "Rig profesional: truss, moving heads y atmósfera en haz", en: "Pro rig: truss, moving heads and beam atmosphere" },
  },
  {
    src: "/images/lighting-02.png",
    tag: { es: "Outdoor / festival", en: "Outdoor / festival" },
    caption: { es: "Escenario outdoor con LED wall, truss y look de festival", en: "Outdoor stage with LED wall, truss and festival look" },
  },
  {
    src: "/images/lighting-03.png",
    tag: { es: "LED Pixel", en: "LED Pixel" },
    caption: { es: "Detalle de instalación LED pixel bar e ingeniería de data/power", en: "LED pixel bar install detail — data/power engineering" },
  },
  {
    src: "/images/lighting-04.png",
    tag: { es: "Live look", en: "Live look" },
    caption: { es: "Look en vivo desde cabina: wash azul-verde y haze", en: "Live booth look: blue-green wash and haze" },
  },
] as const;

export const LIGHTING_EXPERTISE = [
  {
    id: "light-design",
    code: "01",
    title: { es: "Light design", en: "Light design" },
    detail: {
      es: "Diseño de looks, pacing y narrativa lumínica para shows y festivales.",
      en: "Look design, pacing and lighting narrative for shows and festivals.",
    },
  },
  {
    id: "engineering",
    code: "02",
    title: { es: "Ingeniería en iluminación", en: "Lighting engineering" },
    detail: {
      es: "Patch DMX, power distro, pixel mapping, fixtures y control en vivo.",
      en: "DMX patch, power distro, pixel mapping, fixtures and live control.",
    },
  },
  {
    id: "stage",
    code: "03",
    title: { es: "Stage manager", en: "Stage manager" },
    detail: {
      es: "Coordinación de escenario, timings, backline y flujo del show.",
      en: "Stage coordination, timings, backline and show flow.",
    },
  },
  {
    id: "repair",
    code: "04",
    title: { es: "Técnico en reparación", en: "Repair technician" },
    detail: {
      es: "Diagnóstico y reparación de fixtures, LED, controladores y cableado.",
      en: "Diagnostics and repair of fixtures, LED, controllers and cabling.",
    },
  },
  {
    id: "business",
    code: "05",
    title: { es: "Music business", en: "Music business" },
    detail: {
      es: "Producción, riders, logística y puente entre talento, venue y crew.",
      en: "Production, riders, logistics and the bridge between talent, venue and crew.",
    },
  },
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
  "LIGHT DESIGN",
  "STAGE MANAGER",
  "LED PIXEL",
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
    lighting: string;
    gallery: string;
    videos: string;
    rider: string;
    gear: string;
    booking: string;
  };
  lighting: Section & {
    note: string;
    years: string;
    expertiseLabel: string;
    galleryLabel: string;
    galleryHint: string;
    paragraphs: string[];
    services: string[];
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
    lighting: "Luces",
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
  lighting: {
    kicker: "03 — Escenario & luz",
    title: "Light design",
    note: "Iluminador y light designer para shows y festivales multidisciplinarios.",
    years: "+10 años en escenario, luz y producción.",
    expertiseLabel: "Expertise",
    galleryLabel: "04 — Instalaciones",
    galleryHint: "LED pixel · mapping · looks en vivo",
    paragraphs: [
      "Además de la cabina, FerchX trabaja la noche desde la ingeniería de iluminación: LED pixel, fixtures, control DMX, looks interactivos y la lectura del espacio. Diseña atmósfera con la misma precisión con la que construye un set.",
      "Más de una década como stage manager, light jockey, técnico de reparación y puente de music business: del rider al power distro, del ensayo al cue final. Perfil listo para festivales, marcas y producciones que necesitan un experto que entiende talento, crew y venue.",
      "Presenta propuestas dignas de escenario grande — instalación, operación en vivo y soporte técnico — con criterio de ingeniería y sensibilidad de artista.",
    ],
    services: [
      "Diseño e instalación LED / pixel mapping",
      "Operación en vivo · light jockey · laser VJ",
      "Stage management y coordinación técnica",
    ],
  },
  gallery: {
    kicker: "05 — Archivo",
    title: "Galería",
    note: "Clic en cualquier foto para verla completa.",
    download: "Descargar",
  },
  videos: {
    kicker: "06 — En vivo",
    title: "Videos",
    note: "Cabina, sets y cortes desde Instagram.",
    openIg: "Ver en Instagram",
  },
  rider: {
    kicker: "07 — Requerimientos",
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
    kicker: "08 — Si el venue no tiene equipo",
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
    kicker: "09 — Contacto",
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
    lighting: "Lights",
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
  lighting: {
    kicker: "03 — Stage & light",
    title: "Light design",
    note: "Lighting designer for multidisciplinary shows and festivals.",
    years: "10+ years on stage, light and production.",
    expertiseLabel: "Expertise",
    galleryLabel: "04 — Installations",
    galleryHint: "LED pixel · mapping · live looks",
    paragraphs: [
      "Beyond the booth, FerchX shapes the night through lighting engineering: LED pixel, fixtures, DMX control, interactive looks and reading the room. He designs atmosphere with the same precision he builds a set.",
      "Over a decade as stage manager, light jockey, repair technician and music-business bridge: from rider to power distro, from rehearsal to final cue. A profile built for festivals, brands and productions that need someone who understands talent, crew and venue.",
      "He delivers stage-ready proposals — install, live operation and technical support — with engineering rigor and an artist's eye.",
    ],
    services: [
      "LED design & pixel-mapping installs",
      "Live operation · light jockey · laser VJ",
      "Stage management and technical coordination",
    ],
  },
  gallery: {
    kicker: "05 — Archive",
    title: "Gallery",
    note: "Click any photo to open it full size.",
    download: "Download",
  },
  videos: {
    kicker: "06 — Live",
    title: "Videos",
    note: "Booth cuts and live sets from Instagram.",
    openIg: "Open on Instagram",
  },
  rider: {
    kicker: "07 — Requirements",
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
    kicker: "08 — If the venue has no gear",
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
    kicker: "09 — Contact",
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
