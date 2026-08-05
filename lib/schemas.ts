import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  guests: z
    .string()
    .min(1, "Bitte wählen Sie die Anzahl der Personen."),
  date: z.string().min(1, "Bitte wählen Sie ein Datum."),
  time: z.string().min(1, "Bitte wählen Sie eine Uhrzeit."),
  phone: z
    .string()
    .trim()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  message: z.string().trim().max(500, "Maximal 500 Zeichen.").optional(),
  privacy: z.literal(true, "Bitte stimmen Sie der Datenschutzerklärung zu."),
});

export type ReservationValues = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  subject: z.string().trim().min(2, "Bitte geben Sie einen Betreff ein."),
  message: z.string().trim().min(10, "Ihre Nachricht sollte mindestens 10 Zeichen umfassen."),
  privacy: z.literal(true, "Bitte stimmen Sie der Datenschutzerklärung zu."),
});

export type ContactValues = z.infer<typeof contactSchema>;
