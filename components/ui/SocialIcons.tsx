// Minimal outline icons in lucide's visual language.
// lucide-react no longer ships brand/logo icons, so these are hand-drawn
// to match the surrounding stroke-based icon set.
import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l0.5-3.5h-3V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4v10.2a3.3 3.3 0 1 1-2.6-3.23" />
      <path d="M14 4c.4 2.2 2.1 3.8 4.3 4v2.6c-1.6 0-3.1-.5-4.3-1.4" />
    </svg>
  );
}
