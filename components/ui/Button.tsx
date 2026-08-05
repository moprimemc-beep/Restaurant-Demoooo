import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: boolean;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-cream hover:bg-primary-dark active:scale-[0.98] shadow-[0_10px_30px_-12px_rgba(139,0,0,0.55)]",
  secondary:
    "border border-ink/25 text-ink hover:border-accent hover:text-primary active:scale-[0.98]",
  ghost:
    "text-cream border border-cream/40 hover:border-accent hover:text-accent active:scale-[0.98]",
};

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
