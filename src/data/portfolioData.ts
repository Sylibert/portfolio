export interface VideoItem {
  title: string;
  url: string;
  youtubeId: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  category: 'corporate' | 'pub' | 'mode';
  categoryLabel: string;
  thumbnail: string;
  summary: string;
  deliverables: string[];
  videos: VideoItem[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Opale Capital – Présentation Institutionnelle & vulgarisation du Private Equity",
    client: "Opale Capital",
    category: "corporate",
    categoryLabel: "Corporate & Finance",
    thumbnail: "https://img.youtube.com/vi/pb4Kzj5as6k/maxresdefault.jpg",
    summary: "Série d'interviews et capsules institutionnelles décryptant l'investissement en Private Equity avec une esthétique premium et rassurante.",
    deliverables: ["3x Vidéos format 16:9 (4K)"],
    videos: [
      { title: "Présentation de Opale", url: "https://www.youtube.com/watch?v=pb4Kzj5as6k", youtubeId: "pb4Kzj5as6k" },
      { title: "Présentation de Antoine", url: "https://youtu.be/nZ21MtBQ4vY", youtubeId: "nZ21MtBQ4vY" },
      { title: "Présentation de Louise", url: "https://youtu.be/bIGXWv0-SYk", youtubeId: "bIGXWv0-SYk" },
    ],
  },
  {
    id: 2,
    title: "Homunity – L'expérience du crowdfunding immobilier",
    client: "Homunity",
    category: "corporate",
    categoryLabel: "Corporate & Finance",
    thumbnail: "https://img.youtube.com/vi/_Lej58E-tAc/maxresdefault.jpg",
    summary: "Mise en avant des experts Homunity pour humaniser la plateforme de financement participatif immobilier et rassurer les investisseurs.",
    deliverables: ["2x Vidéos format 16:9 (4K)"],
    videos: [
      { title: "Présentation de Homunity", url: "https://youtu.be/_Lej58E-tAc", youtubeId: "_Lej58E-tAc" },
      { title: "Présentation de Lucie", url: "https://youtu.be/if1HaTri2sk", youtubeId: "if1HaTri2sk" },
    ],
  },
  {
    id: 3,
    title: "Fédération des Détaillants en Chaussures de France",
    client: "FDCF",
    category: "pub",
    categoryLabel: "PUB",
    thumbnail: "https://img.youtube.com/vi/A8qd4licud4/maxresdefault.jpg",
    summary: "Spot promotionnel valorisant l'artisanat, le savoir-faire et le commerce de proximité à travers le territoire français.",
    deliverables: ["Format 16:9 (4K)", "Mixage voix off & sound design"],
    videos: [
      { title: "Présentation FDCF", url: "https://youtu.be/A8qd4licud4", youtubeId: "A8qd4licud4" },
    ],
  },
  {
    id: 4,
    title: "SOL'S – Lookbook & Collection Urbaine",
    client: "SOL'S",
    category: "mode",
    categoryLabel: "Mode & Fashion",
    thumbnail: "https://img.youtube.com/vi/4JUVipIfxyc/maxresdefault.jpg",
    summary: "Campagne vidéo multi-collections : dynamisme urbain, textures textiles et direction photo léchée pour le leader européen du textile.",
    deliverables: ["Vidéo lookbook 16:9 et 9:16", "Formats Teaser TikTok/Instagram"],
    videos: [
      { title: "Printemps / Été", url: "https://youtu.be/4JUVipIfxyc", youtubeId: "4JUVipIfxyc" },
      { title: "Édition", url: "https://youtu.be/jQ7NRX70RO0", youtubeId: "jQ7NRX70RO0" },
      { title: "PTSF", url: "https://youtu.be/4b5K7DPZ2SE", youtubeId: "4b5K7DPZ2SE" },
      { title: "Active", url: "https://youtu.be/9pRAkpMJ4hE", youtubeId: "9pRAkpMJ4hE" },
      { title: "Basic", url: "https://youtu.be/RHL426wEBN8", youtubeId: "RHL426wEBN8" },
    ],
  },
  {
    id: 5,
    title: "Dîme Tribe – Behind The Scenes nouvelle collection",
    client: "Dîme Tribe",
    category: "mode",
    categoryLabel: "Mode & Fashion",
    thumbnail: "https://img.youtube.com/vi/_mUv5jfDot0/hqdefault.jpg",
    summary: "Immersion backstage au cœur de la création de la nouvelle collection de la marque streetwear émergente.",
    deliverables: ["BTS Vidéo formats 16:9 & 9:16", "Sound design immersif", "Rythme clip urbain"],
    videos: [
      { title: "Behind The Scenes", url: "https://youtu.be/_mUv5jfDot0", youtubeId: "_mUv5jfDot0" },
    ],
  },
  {
    id: 6,
    title: "Next Management – Portrait & Profil d'Agence",
    client: "Next Management",
    category: "mode",
    categoryLabel: "Mode & Fashion",
    thumbnail: "https://img.youtube.com/vi/SsM8sExEJfI/maxresdefault.jpg",
    summary: "Portrait vidéo stylisé de Nathan Japy, mannequin représenté par la prestigieuse agence internationale Next Management.",
    deliverables: ["Film Portrait format 16:9", "Traitements optiques cinématographiques"],
    videos: [
      { title: "Nathan Japy – Agence Next", url: "https://youtu.be/SsM8sExEJfI", youtubeId: "SsM8sExEJfI" },
    ],
  },
  {
    id: 7,
    title: "ASK – Captations & Visuels de Marque / Projets Musicaux",
    client: "ASK",
    category: "mode",
    categoryLabel: "Mode & Musique",
    thumbnail: "https://img.youtube.com/vi/4T1aMHJWVHw/maxresdefault.jpg",
    summary: "Créations visuelles hybrides entre mode, performance scénique et esthétique musicale contemporaine.",
    deliverables: ["Vidéo hybride 16:9 & 9:16", "Éclairages dynamiques", "Montage sync audio"],
    videos: [
      { title: "Captation & Univers Musical", url: "https://youtu.be/4T1aMHJWVHw", youtubeId: "4T1aMHJWVHw" },
    ],
  },
];

export const CLIENTS = [
  { name: "OPALE CAPITAL", category: "Finance", icon: "fa-solid fa-chart-line", projectId: 1 },
  { name: "HOMUNITY", category: "Immobilier", icon: "fa-solid fa-city", projectId: 2 },
  { name: "FDCF", category: "Institutionnel", icon: "fa-solid fa-shoe-prints", projectId: 3 },
  { name: "SOL'S", category: "Textile", icon: "fa-solid fa-shirt", projectId: 4 },
  { name: "DÎME TRIBE", category: "Streetwear", icon: "fa-solid fa-gem", projectId: 5 },
  { name: "NEXT MANAGEMENT", category: "Modélisme", icon: "fa-solid fa-person-dress", projectId: 6 },
  { name: "ASK", category: "Mode & Son", icon: "fa-solid fa-music", projectId: 7 },
];
