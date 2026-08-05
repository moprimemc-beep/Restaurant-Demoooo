"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import Field, { inputClasses } from "@/components/forms/Field";
import Button from "@/components/ui/Button";
import { reservationSchema, type ReservationValues } from "@/lib/schemas";

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
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
        <h3 className="font-display text-2xl text-ink">Anfrage erfasst</h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          Vielen Dank für Ihre Reservierungsanfrage. Da dies eine Demo-Website ohne
          angebundenes Buchungssystem ist, wurde keine echte Nachricht versendet — in
          einer produktiven Version würden Sie hier eine Bestätigung per E-Mail
          erhalten.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Neue Anfrage stellen
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name?.message}>
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

        <Field id="guests" label="Personen" required error={errors.guests?.message}>
          <select
            id="guests"
            className={inputClasses}
            aria-invalid={Boolean(errors.guests)}
            {...register("guests")}
          >
            {guestOptions.map((option) => (
              <option key={option} value={option}>
                {option} {option === "1" ? "Person" : "Personen"}
              </option>
            ))}
          </select>
        </Field>

        <Field id="date" label="Datum" required error={errors.date?.message}>
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

        <Field id="time" label="Uhrzeit" required error={errors.time?.message}>
          <input
            id="time"
            type="time"
            className={inputClasses}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "time-error" : undefined}
            {...register("time")}
          />
        </Field>

        <Field id="phone" label="Telefonnummer" required error={errors.phone?.message}>
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

        <Field id="email" label="E-Mail" required error={errors.email?.message}>
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

      <Field id="message" label="Nachricht (optional)" error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          placeholder="Allergien, Anlass oder besondere Wünsche"
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
          Ich habe die{" "}
          <a href="/datenschutz" className="underline hover:text-primary">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu.
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
            Wird gesendet …
          </>
        ) : (
          "Reservierung anfragen"
        )}
      </Button>
    </form>
  );
}
