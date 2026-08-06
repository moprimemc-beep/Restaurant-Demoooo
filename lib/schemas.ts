import { z } from "zod";
import type { Content } from "@/lib/content";

export function createReservationSchema(errors: Content["reservationPage"]["form"]["errors"]) {
  return z.object({
    name: z.string().trim().min(2, errors.name),
    guests: z.string().min(1, errors.guests),
    date: z.string().min(1, errors.date),
    time: z.string().min(1, errors.time),
    phone: z.string().trim().min(6, errors.phone),
    email: z.string().trim().email(errors.email),
    message: z.string().trim().max(500, errors.message).optional(),
    privacy: z.literal(true, errors.privacy),
  });
}

export type ReservationValues = z.infer<ReturnType<typeof createReservationSchema>>;

export function createContactSchema(errors: Content["contactPage"]["form"]["errors"]) {
  return z.object({
    name: z.string().trim().min(2, errors.name),
    email: z.string().trim().email(errors.email),
    subject: z.string().trim().min(2, errors.subject),
    message: z.string().trim().min(10, errors.message),
    privacy: z.literal(true, errors.privacy),
  });
}

export type ContactValues = z.infer<ReturnType<typeof createContactSchema>>;
