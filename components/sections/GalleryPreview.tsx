import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import Reveal from "@/components/motion/Reveal";
import { galleryImages } from "@/lib/data";

const preview = galleryImages.slice(0, 5);

export default function GalleryPreview() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            number="04"
            eyebrow="Einblicke"
            title="Ein Abend bei uns."
            description="Steinofen, Weinregal und Kerzenlicht — ein Blick in Küche, Gastraum und Terrasse."
          />
          <div className="hidden sm:block">
            <TextLink href="/galerie">Ganze Galerie</TextLink>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2 sm:gap-5 sm:h-[560px] lg:h-[620px]">
          <Reveal className="col-span-2 row-span-2 sm:col-span-2 sm:h-full">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-full">
              <Image
                src={preview[0].src}
                alt={preview[0].alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          {preview.slice(1).map((image, index) => (
            <Reveal key={image.src} delay={0.08 * (index + 1)} className="sm:h-full">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <TextLink href="/galerie">Ganze Galerie</TextLink>
        </div>
      </Container>
    </section>
  );
}
