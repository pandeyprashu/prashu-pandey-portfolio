import { cn } from "@/lib/utils";

interface BulletMarkerProps {
  className?: string;
}

export function BulletMarker({ className }: BulletMarkerProps) {
  return (
    <span aria-hidden className={cn("flex h-lh shrink-0 items-center", className)}>
      <span className="size-1.5 rounded-sm bg-brand-solid" />
    </span>
  );
}
