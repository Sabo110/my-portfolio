import { z } from "zod"

export const stackSchema = z.object({
    name: z.string().min(1, "Name is required"),
    level: z.string({required_error: "Level is required"})
})