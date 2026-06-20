import {
  ShieldCheck,
  Gem,
  CalendarDays,
  MapPin,
  Landmark,
  Drama,
  Leaf,
  UtensilsCrossed,
  Compass,
  Sun,
  FerrisWheel,
  TreePalm,
  ShoppingBag,
  Tent,
  type LucideIcon,
} from "lucide-react";

/** Semantic icon keys used across destination data → Lucide icons. */
const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  gem: Gem,
  calendar: CalendarDays,
  pin: MapPin,
  landmark: Landmark,
  culture: Drama,
  leaf: Leaf,
  food: UtensilsCrossed,
  paddle: Compass,
  sun: Sun,
  ferris: FerrisWheel,
  palm: TreePalm,
  shopping: ShoppingBag,
  dunes: Tent,
};

export default function FeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Compass;
  return <Icon className={className} strokeWidth={1.6} aria-hidden />;
}
