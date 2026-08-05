import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export default function StoryBlock({
  number,
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  reverse = false,
  tone = "base",
}: {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "base" | "alt";
}) {
  return (
    <section className={cn("py-20 sm:py-28", tone === "alt" ? "bg-surface" : "bg-background")}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-soft">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading number={number} eyebrow={eyebrow} title={title} />
            <div className="mt-6 space-y-4">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
