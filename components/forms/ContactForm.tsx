"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import Field, { inputClasses } from "@/components/forms/Field";
import Button from "@/components/ui/Button";
import { createContactSchema, type ContactValues } from "@/lib/schemas";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const { locale, content } = useLocale();
  const form = content.contactPage.form;
  const schema = useMemo(() => createContactSchema(form.errors), [form.errors]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "", privacy: undefined },
  });

  const onSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-[1.5rem] bg-cream p-10 text-center shadow-card"
      >
        <CheckCircle2 className="size-10 text-secondary" aria-hidden="true" />
        <h3 className="font-display text-2xl text-ink">{form.successTitle}</h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">{form.successText}</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          {form.successButton}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="c-name" label={form.name} required error={errors.name?.message}>
          <input
            id="c-name"
            type="text"
            autoComplete="name"
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </Field>
        <Field id="c-email" label={form.email} required error={errors.email?.message}>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>
      </div>

      <Field id="c-subject" label={form.subject} required error={errors.subject?.message}>
        <input
          id="c-subject"
          type="text"
          className={inputClasses}
          aria-invalid={Boolean(errors.subject)}
          {...register("subject")}
        />
      </Field>

      <Field id="c-message" label={form.message} required error={errors.message?.message}>
        <textarea
          id="c-message"
          rows={5}
          className={inputClasses}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="c-privacy"
          type="checkbox"
          className="mt-1 size-4 shrink-0 accent-primary"
          aria-invalid={Boolean(errors.privacy)}
          {...register("privacy")}
        />
        <label htmlFor="c-privacy" className="text-sm text-ink-soft">
          {form.privacyPrefix}{" "}
          <a href={localizedHref(locale, "/datenschutz")} className="underline hover:text-primary">
            {form.privacyLink}
          </a>{" "}
          {form.privacySuffix}
        </label>
      </div>
      {errors.privacy && (
        <p role="alert" className="-mt-3 text-sm text-primary">
          {errors.privacy.message}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            {form.submitting}
          </>
        ) : (
          form.submit
        )}
      </Button>
    </form>
  );
}
