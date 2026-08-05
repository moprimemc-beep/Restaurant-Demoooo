"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "@/components/gallery/Lightbox";

export type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative block w-full overflow-hidden rounded-[1.25rem] break-inside-avoid shadow-card"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={index % 3 === 0 ? 1100 : 700}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span
              className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100"
              aria-hidden="true"
            >
              <Expand className="size-6 text-cream" />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            images={images}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={(next) => setOpenIndex(next)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
