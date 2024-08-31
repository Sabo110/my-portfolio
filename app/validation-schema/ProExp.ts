import { z } from "zod"

export const proExpSchema = z.object({
    ogarnization_name: z.string().min(1, "organization name is required"),
    job_title: z.string().min(1, "job title is required"),
    description: z.string().optional(), // description est facultatif
    begin_date: z.date({invalid_type_error: 'noo'}),
    end_date: z.date(),
    city: z.string().min(1, "city is required"),
    country: z.string().min(1, "country is required"),
    remote: z.boolean(),
});