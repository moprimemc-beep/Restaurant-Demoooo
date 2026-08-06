import Image from "next/image";
import type { Dish } from "@/lib/content";

export default function DishFeature({ dish }: { dish: Dish }) {
  if (!dish.image) return null;

  return (
    <figure className="overflow-hidden rounded-[1.5rem] bg-cream shadow-card">
      <div className="relative aspect-[4/3]">
        <Image
          src={dish.image}
          alt={`${dish.name} — ${dish.description}`}
          fill
          sizes="(min-width: 1024px) 380px, 90vw"
          className="object-cover"
        />
      </div>
      <figcaption className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-xl text-ink">{dish.name}</span>
          <span className="whitespace-nowrap font-display text-lg italic text-primary">
            {dish.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
      </figcaption>
    </figure>
  );
}
