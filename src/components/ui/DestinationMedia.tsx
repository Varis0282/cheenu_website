import Image from "next/image";
import { cn } from "@/lib/utils";
import DestinationScene, { type SceneKey } from "./DestinationScene";

/**
 * Renders a real destination photo on top of the themed illustrated scene.
 * The scene sits underneath as a coloured backdrop while the photo loads (and
 * as a graceful fallback if the photo ever fails), so there's never a broken
 * image or empty box.
 */
export default function DestinationMedia({
  scene,
  uid,
  image,
  alt,
  from,
  via,
  to,
  accent,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: {
  scene: SceneKey;
  uid: string;
  image?: string;
  alt: string;
  from?: string;
  via?: string;
  to?: string;
  accent?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <div className="absolute inset-0">
        <DestinationScene
          scene={scene}
          uid={uid}
          from={from}
          via={via}
          to={to}
          accent={accent}
          stars={false}
        />
      </div>
      {image && (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
    </div>
  );
}
