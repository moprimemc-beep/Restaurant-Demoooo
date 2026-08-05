import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Field({
  id,
  label,
  error,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-primary">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus-visible:border-accent";
