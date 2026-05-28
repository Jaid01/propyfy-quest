export type ProjectCategory =
  | "Office"
  | "Retail"
  | "Mixed-Use"
  | "Hospitality"
  | "Warehousing";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  developer: string;
  size: string;
  status: string;
  tagline: string;
  description: string;
  highlights: string[];
  amenities: string[];
  image: string;
}

export const projects: Project[] = [
  {
    slug: "axis-one-bkc",
    name: "Axis One BKC",
    category: "Office",
    location: "Bandra Kurla Complex, Mumbai",
    developer: "Atlas Developers",
    size: "1.4M sq ft · Grade A",
    status: "Under Construction · Q4 2026",
    tagline: "A vertical headquarters for India's next decade.",
    description:
      "Axis One BKC is a 42-storey Grade-A commercial tower engineered for global occupiers — column-free floor plates, LEED Platinum systems, and an immersive arrival sequence.",
    highlights: ["LEED Platinum target", "Column-free 30,000 sq ft floors", "Triple-glazed unitised facade", "5-level basement parking"],
    amenities: ["Sky lobby", "Wellness floor", "Executive concierge", "Charging plazas"],
    image: "/projects/axis-one.jpg",
  },
  {
    slug: "lumen-high-street",
    name: "Lumen High Street",
    category: "Retail",
    location: "Lower Parel, Mumbai",
    developer: "Meridian Estates",
    size: "320,000 sq ft GLA",
    status: "Pre-leasing",
    tagline: "An experiential retail spine for South Mumbai.",
    description:
      "A four-level high-street retail destination anchored by flagship F&B and lifestyle brands, with an open-to-sky plaza and curated event programming.",
    highlights: ["Anchor + boutique mix", "Open-air promenade", "Valet + multi-modal access", "Brand activation zones"],
    amenities: ["F&B terrace", "Atrium events", "Pop-up bays", "Premium washrooms"],
    image: "/projects/lumen.jpg",
  },
  {
    slug: "northpoint-mixed-use",
    name: "Northpoint District",
    category: "Mixed-Use",
    location: "Thane, MMR",
    developer: "Northpoint Realty",
    size: "3.2M sq ft master plan",
    status: "Phase 1 launched",
    tagline: "A walkable mixed-use district built around a green spine.",
    description:
      "Offices, branded residences, retail and a boutique hotel arranged around a 4-acre central park. Underground service grid, smart mobility and a unified app-controlled experience.",
    highlights: ["4-acre central park", "Underground services", "Smart mobility", "Branded residences"],
    amenities: ["Park clubhouse", "EV transit loop", "District concierge", "Sky bridge"],
    image: "/projects/northpoint.jpg",
  },
  {
    slug: "aman-bay-hotel",
    name: "Aman Bay",
    category: "Hospitality",
    location: "Navi Mumbai Waterfront",
    developer: "Bay Hospitality LLP",
    size: "210 keys · 5-star",
    status: "Investment opportunity",
    tagline: "Waterfront luxury hospitality with structured returns.",
    description:
      "A 5-star branded hotel and serviced residences on the Navi Mumbai waterfront. Structured investment with operator guarantees and a stable hospitality yield profile.",
    highlights: ["Branded operator", "Yield-backed structure", "Waterfront frontage", "MICE-grade ballroom"],
    amenities: ["Sea-facing suites", "Destination spa", "Rooftop bar", "Marina access"],
    image: "/projects/aman-bay.jpg",
  },
  {
    slug: "skyline-logistics-park",
    name: "Skyline Logistics Park",
    category: "Warehousing",
    location: "Bhiwandi, MMR",
    developer: "Skyline Industrial",
    size: "2.1M sq ft Grade A warehousing",
    status: "Operational + Phase 2",
    tagline: "Grade-A warehousing engineered for modern supply chains.",
    description:
      "FM2-compliant flooring, 12m clear height, dock-high loading and 24/7 truck movement. Strategic location on the JNPT corridor with rail and highway access.",
    highlights: ["12m clear height", "FM2 flooring", "Dock + drive-in", "JNPT corridor"],
    amenities: ["Truck plaza", "Driver lounge", "Solar roof", "Fire safety NFPA"],
    image: "/projects/skyline.jpg",
  },
  {
    slug: "meridian-office-park",
    name: "Meridian Office Park",
    category: "Office",
    location: "Powai, Mumbai",
    developer: "Meridian Estates",
    size: "900,000 sq ft · Pre-certified Platinum",
    status: "Ready possession",
    tagline: "Campus-style commercial — ready to occupy.",
    description:
      "Low-rise campus with three interlinked towers, a landscaped quad and a wellness pavilion. Pre-fit floors available for fast move-in.",
    highlights: ["Campus layout", "Pre-fit floors", "Landscaped quad", "Wellness pavilion"],
    amenities: ["F&B court", "Sports deck", "Day care", "Cycle hub"],
    image: "/projects/meridian.jpg",
  },
];

export const categories: ProjectCategory[] = [
  "Office",
  "Retail",
  "Mixed-Use",
  "Hospitality",
  "Warehousing",
];
