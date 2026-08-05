import Reveal from "@/components/motion/Reveal";
import DishRow from "@/components/menu/DishRow";
import DishFeature from "@/components/menu/DishFeature";
import type { MenuCategory } from "@/lib/data";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export default function CategorySection({
  category,
  tone = "base",
}: {
  category: MenuCategory;
  tone?: "base" | "alt";
}) {
  const featured = category.dishes.filter((dish) => dish.image);
  const rest = category.dishes.filter((dish) => !dish.image);

  return (
    <section
      id={category.id}
      className={cn(
        "scroll-mt-40 py-16 sm:scroll-mt-48 sm:py-20",
        tone === "alt" ? "bg-surface" : "bg-background"
      )}
    >
      <Container narrow={false}>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-40">
              <span className="font-display text-sm italic text-primary">
                {category.number}
              </span>
              <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                {category.label}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                {category.intro}
              </p>
            </div>
          </Reveal>

          <div>
            {featured.length > 0 && (
              <Reveal>
                <div className="mb-10 grid gap-6 sm:grid-cols-2">
                  {featured.map((dish) => (
                    <DishFeature key={dish.name} dish={dish} />
                  ))}
                </div>
              </Reveal>
            )}

            {rest.length > 0 && (
              <Reveal delay={0.05}>
                <ul className="divide-y divide-ink/8">
                  {rest.map((dish) => (
                    <DishRow key={dish.name} dish={dish} />
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
