"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import Field, { inputClasses } from "@/components/forms/Field";
import Button from "@/components/ui/Button";
import { createReservationSchema, type ReservationValues } from "@/lib/schemas";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const { locale, content } = useLocale();
  const form = content.reservationPage.form;
  const schema = useMemo(() => createReservationSchema(form.errors), [form.errors]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      guests: "2",
      date: "",
      time: "",
      phone: "",
      email: "",
      message: "",
      privacy: undefined,
    },
  });

  const onSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    reset();
  };

  const today = new Date().toISOString().split("T")[0];

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
        <Field id="name" label={form.name} required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>

        <Field id="guests" label={form.guests} required error={errors.guests?.message}>
          <select
            id="guests"
            className={inputClasses}
            aria-invalid={Boolean(errors.guests)}
            {...register("guests")}
          >
            {guestOptions.map((option) => (
              <option key={option} value={option}>
                {option} {option === "1" ? form.guestUnit : form.guestsUnitPlural}
              </option>
            ))}
          </select>
        </Field>

        <Field id="date" label={form.date} required error={errors.date?.message}>
          <input
            id="date"
            type="date"
            min={today}
            className={inputClasses}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined}
            {...register("date")}
          />
        </Field>

        <Field id="time" label={form.time} required error={errors.time?.message}>
          <input
            id="time"
            type="time"
            className={inputClasses}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "time-error" : undefined}
            {...register("time")}
          />
        </Field>

        <Field id="phone" label={form.phone} required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>

        <Field id="email" label={form.email} required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>

      <Field id="message" label={form.message} error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          placeholder={form.messagePlaceholder}
          className={inputClasses}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          type="checkbox"
          className="mt-1 size-4 shrink-0 accent-primary"
          aria-invalid={Boolean(errors.privacy)}
          aria-describedby={errors.privacy ? "privacy-error" : undefined}
          {...register("privacy")}
        />
        <label htmlFor="privacy" className="text-sm text-ink-soft">
          {form.privacyPrefix}{" "}
          <a href={localizedHref(locale, "/datenschutz")} className="underline hover:text-primary">
            {form.privacyLink}
          </a>{" "}
          {form.privacySuffix}
        </label>
      </div>
      {errors.privacy && (
        <p id="privacy-error" role="alert" className="-mt-3 text-sm text-primary">
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
