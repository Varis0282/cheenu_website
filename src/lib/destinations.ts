/**
 * Destination & tour content.
 * ─────────────────────────────────────────────────────────────────────────
 * All copy here is extracted from the brochures. Each destination is fully
 * data-driven so adding a 5th destination later is just a new object below.
 *
 * `icon` values are semantic keys resolved to Lucide icons in <FeatureIcon/>.
 * `scene` selects the hand-built SVG backdrop in <DestinationScene/>.
 * `image` is optional — drop a real photo in /public/images and set the path
 * to use a photograph instead of the illustrated scene.
 */

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  country: string;
  flag: string;
  /** Short evocative label shown on cards. */
  kicker: string;
  /** Brochure hero line, e.g. "Beyond Limits. Beyond Expectations." */
  headline: string;
  tagline: string;
  /** Sub-tagline, e.g. "A City of Wonders. An Adventure of a Lifetime." */
  subtitle: string;
  intro: string;
  /** Closing brochure line. */
  closing: string;
  scene: "desert" | "marina" | "bay" | "island";
  /** Theme colours used to build gradients (any valid CSS colour). */
  theme: {
    from: string;
    via: string;
    to: string;
    accent: string;
    accentSoft: string;
  };
  image?: string;
  quickFacts: { label: string; value: string }[];
  whyChoose: Feature[];
  experiences: Feature[];
  highlights: string[];
  badges: string[];
};

export const destinations: Destination[] = [
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    flag: "🇻🇳",
    kicker: "Different Culture. Breathtaking Views.",
    headline: "Unforgettable Memories Await",
    tagline: "Dream It. Live It. Love It.",
    subtitle: "A Journey of a Lifetime Awaits You.",
    intro:
      "From vibrant cities to serene landscapes, Vietnam is a journey that stays with you forever. Cruise emerald bays, wander ancient towns and taste flavours you'll never forget.",
    closing: "Vietnam — Where Every Moment Becomes a Memory.",
    scene: "bay",
    theme: {
      from: "#0c2a23",
      via: "#0f5132",
      to: "#caa24a",
      accent: "#34d399",
      accentSoft: "#a7f3d0",
    },
    quickFacts: [
      { label: "Best time", value: "Oct – Apr" },
      { label: "Ideal trip", value: "6 – 9 days" },
      { label: "Great for", value: "Couples · Families" },
    ],
    whyChoose: [
      {
        icon: "shield",
        title: "Safe & Welcoming",
        description: "Friendly locals, a safe environment and warm hospitality.",
      },
      {
        icon: "gem",
        title: "World-Class Experiences",
        description: "From UNESCO sites to stunning natural wonders — Vietnam has it all.",
      },
      {
        icon: "calendar",
        title: "Year-Round Destination",
        description: "Perfect weather in every season for every kind of traveler.",
      },
      {
        icon: "pin",
        title: "Easy Access",
        description: "Well-connected with convenient flights from major cities.",
      },
    ],
    experiences: [
      {
        icon: "landmark",
        title: "Iconic Destinations",
        description: "Explore Ha Long Bay, Hoi An Ancient Town, Ho Chi Minh City, Hanoi and more.",
      },
      {
        icon: "culture",
        title: "Rich Culture & Heritage",
        description: "Discover centuries-old traditions, temples, pagodas and vibrant local life.",
      },
      {
        icon: "leaf",
        title: "Nature's Masterpiece",
        description: "From lush rice terraces in Sapa to the stunning caves of Phong Nha.",
      },
      {
        icon: "food",
        title: "Flavors of Vietnam",
        description: "Savor delicious street food, traditional cuisine and unique local flavors.",
      },
      {
        icon: "paddle",
        title: "Adventure & Fun",
        description: "Cruise, trek, cycle, kayak and enjoy thrilling experiences for every explorer.",
      },
    ],
    highlights: [
      "Ha Long Bay Cruise",
      "Hoi An Ancient Town",
      "Sapa Rice Terraces",
      "Hanoi Old Quarter",
      "Phong Nha Caves",
    ],
    badges: [
      "Stunning Landscapes",
      "Iconic Attractions",
      "Exciting Adventures",
      "Shopping Paradise",
      "Memories That Last",
    ],
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    flag: "🇮🇩",
    kicker: "Breathtaking Places. Thrilling Adventures.",
    headline: "Timeless Memories Await",
    tagline: "Dream It. Live It.",
    subtitle: "An Island of Gods. An Adventure for the Soul.",
    intro:
      "Bali is more than a destination, it's an experience of a lifetime. From stunning beaches and lush landscapes to rich culture and exhilarating adventures — Bali has it all.",
    closing: "Bali — Where Every Moment Becomes Magic.",
    scene: "island",
    theme: {
      from: "#0a2e2a",
      via: "#0d4f43",
      to: "#e8843c",
      accent: "#f59e0b",
      accentSoft: "#fcd9a8",
    },
    quickFacts: [
      { label: "Best time", value: "Apr – Oct" },
      { label: "Ideal trip", value: "5 – 8 days" },
      { label: "Great for", value: "Honeymoon · Friends" },
    ],
    whyChoose: [
      {
        icon: "shield",
        title: "Safe & Welcoming",
        description: "Known for its warm hospitality and traveler-friendly environment.",
      },
      {
        icon: "gem",
        title: "World-Class Experiences",
        description: "From luxury stays to unique adventures, Bali offers experiences like no other.",
      },
      {
        icon: "calendar",
        title: "Year-Round Destination",
        description: "Perfect tropical weather all year round for every kind of traveler.",
      },
      {
        icon: "pin",
        title: "Easy Access",
        description: "Direct flights and convenient connections from major cities worldwide.",
      },
    ],
    experiences: [
      {
        icon: "landmark",
        title: "Iconic Landmarks",
        description: "Visit the majestic Uluwatu Temple, Tanah Lot, Tirta Empul and more.",
      },
      {
        icon: "paddle",
        title: "Adventure & Activities",
        description: "Swing over jungles, surf the waves, dive into crystal-clear waters and more.",
      },
      {
        icon: "sun",
        title: "Beaches & Sunsets",
        description: "Relax at Kuta, Seminyak and Nusa Dua and watch magical Bali sunsets.",
      },
      {
        icon: "leaf",
        title: "Nature & Scenery",
        description: "Explore rice terraces, volcanic mountains, hidden waterfalls and lush jungles.",
      },
      {
        icon: "culture",
        title: "Rich Culture & Heritage",
        description: "Experience traditional dance, local festivals, art and the spiritual side of Bali.",
      },
    ],
    highlights: [
      "Uluwatu Temple",
      "Tanah Lot Sunset",
      "Tegallalang Rice Terraces",
      "Nusa Penida",
      "Ubud Jungle Swing",
    ],
    badges: [
      "Thrilling Adventures",
      "Iconic Attractions",
      "Relaxing Beaches",
      "Shopping & Nightlife",
      "Delicious Cuisine",
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    kicker: "Small Island. Big Adventures.",
    headline: "Endless Memories Await",
    tagline: "Dream It. Live It.",
    subtitle: "A City of Possibilities. An Adventure of a Lifetime.",
    intro:
      "Singapore is where modern wonders meet natural beauty, exciting attractions meet rich culture, and every moment becomes a memory to treasure.",
    closing: "Singapore — Where Every Moment Inspires You.",
    scene: "marina",
    theme: {
      from: "#0a1c3d",
      via: "#123a6b",
      to: "#d4af37",
      accent: "#38bdf8",
      accentSoft: "#bae6fd",
    },
    quickFacts: [
      { label: "Best time", value: "Feb – Apr" },
      { label: "Ideal trip", value: "4 – 6 days" },
      { label: "Great for", value: "Families · First-timers" },
    ],
    whyChoose: [
      {
        icon: "shield",
        title: "Safe & Welcoming",
        description: "One of the world's safest cities with warm hospitality.",
      },
      {
        icon: "gem",
        title: "World-Class Experiences",
        description: "From thrilling attractions to fine dining and shopping — the best of everything.",
      },
      {
        icon: "calendar",
        title: "Year-Round Destination",
        description: "Perfect weather all year round for non-stop adventures.",
      },
      {
        icon: "pin",
        title: "Easy Access",
        description: "Well-connected with direct flights from major cities worldwide.",
      },
    ],
    experiences: [
      {
        icon: "landmark",
        title: "Iconic Landmarks",
        description: "Marina Bay Sands, Merlion Park, Gardens by the Bay and more.",
      },
      {
        icon: "ferris",
        title: "Theme Park Thrills",
        description: "Feel the rush at Universal Studios and Adventure Cove Waterpark.",
      },
      {
        icon: "palm",
        title: "Sentosa Escapes",
        description: "Relax on stunning beaches, enjoy exciting rides and the best island getaway.",
      },
      {
        icon: "food",
        title: "Culinary Delights",
        description: "Savor flavors from hawker favorites to Michelin-starred restaurants.",
      },
      {
        icon: "shopping",
        title: "Shop. Dine. Indulge.",
        description: "From Orchard Road to local boutiques — shop till you drop.",
      },
    ],
    highlights: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Universal Studios",
      "Sentosa Island",
      "Merlion Park",
    ],
    badges: [
      "Thrilling Adventures",
      "Iconic Attractions",
      "Relaxing Getaways",
      "Shopping & Dining",
      "Memories That Last",
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    kicker: "Beyond Limits. Beyond Expectations.",
    headline: "An Adventure of a Lifetime",
    tagline: "Dream It. Live It.",
    subtitle: "A City of Wonders. An Adventure of a Lifetime.",
    intro:
      "Dubai is not just a destination, it's an adventure playground where modern marvels meet thrilling experiences — soaring towers, golden deserts and unmatched luxury.",
    closing: "Dubai — Where Every Moment Is Extraordinary.",
    scene: "desert",
    theme: {
      from: "#0a1730",
      via: "#15356b",
      to: "#e0a92e",
      accent: "#f0b429",
      accentSoft: "#fde68a",
    },
    quickFacts: [
      { label: "Best time", value: "Nov – Mar" },
      { label: "Ideal trip", value: "4 – 7 days" },
      { label: "Great for", value: "Luxury · Families" },
    ],
    whyChoose: [
      {
        icon: "shield",
        title: "Safe & Welcoming",
        description: "A family-friendly destination with world-class safety.",
      },
      {
        icon: "gem",
        title: "World-Class Service",
        description: "Experience unmatched hospitality and premium services.",
      },
      {
        icon: "calendar",
        title: "Year-Round Destination",
        description: "Perfect weather, endless activities, all year round.",
      },
      {
        icon: "pin",
        title: "Easy Access",
        description: "Well-connected with direct flights from around the world.",
      },
    ],
    experiences: [
      {
        icon: "dunes",
        title: "Desert Safari",
        description: "Dune bashing, camel rides, sandboarding and a magical BBQ under the stars.",
      },
      {
        icon: "paddle",
        title: "Skydiving Over Palm",
        description: "Take the leap and enjoy breathtaking views of the Palm Jumeirah from 13,000 ft.",
      },
      {
        icon: "sun",
        title: "Water Adventures",
        description: "Jet Ski, Flyboard, Parasailing and more along Dubai's stunning coastline.",
      },
      {
        icon: "landmark",
        title: "Iconic Attractions",
        description: "Burj Khalifa, Dubai Marina, Ain Dubai, Dubai Frame and more landmarks.",
      },
      {
        icon: "gem",
        title: "Luxury Experiences",
        description: "Indulge in luxury stays, fine dining, shopping and unmatched hospitality.",
      },
    ],
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Marina Cruise",
      "Palm Jumeirah",
      "Dubai Frame",
    ],
    badges: [
      "Thrilling Adventures",
      "World-Class Attractions",
      "Luxury Experiences",
      "Unforgettable Memories",
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

/* ── International group tours ──────────────────────────────────────────── */

export type GroupRegion = {
  name: string;
  flag: string;
  tagline: string;
  scene: "desert" | "marina" | "bay" | "island" | "city" | "alps";
  accent: string;
};

export const groupRegions: GroupRegion[] = [
  { name: "Europe", flag: "🇪🇺", tagline: "Timeless Cities · Rich Culture", scene: "city", accent: "#60a5fa" },
  { name: "Japan", flag: "🇯🇵", tagline: "Tradition Meets Modernity", scene: "city", accent: "#fb7185" },
  { name: "Southeast Asia", flag: "🏝️", tagline: "Exotic Beaches · Vibrant Cultures", scene: "island", accent: "#34d399" },
  { name: "Dubai", flag: "🇦🇪", tagline: "Luxury Shopping · Desert Adventures", scene: "desert", accent: "#f0b429" },
  { name: "Switzerland", flag: "🇨🇭", tagline: "Breathtaking Views · Peaceful Escapes", scene: "alps", accent: "#818cf8" },
];

export const tourHighlights = [
  "Travel with a friendly group & expert tour leader",
  "Handpicked attractions & local experiences",
  "Comfortable stays & quality meals",
  "Safe, hassle-free & well-organized trips",
  "Memories, fun & new friendships",
];

export const tourInclusions = [
  "Return International Flights",
  "Hotel Accommodation",
  "Daily Breakfast & Selected Meals",
  "Airport Transfers & All Sightseeing",
  "Tour Manager Throughout the Tour",
  "Travel Insurance",
  "All Taxes",
];
