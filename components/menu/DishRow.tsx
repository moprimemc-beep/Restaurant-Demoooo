import type { Dish } from "@/lib/content";

export default function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="py-5">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-lg text-ink sm:text-xl">{dish.name}</span>
        <span
          className="h-px flex-1 translate-y-[-3px] border-b border-dotted border-ink/25"
          aria-hidden="true"
        />
        <span className="whitespace-nowrap font-display text-lg italic text-primary sm:text-xl">
          {dish.price}
        </span>
      </div>
      {dish.description && (
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-soft">
          {dish.description}
        </p>
      )}
    </li>
  );
}
