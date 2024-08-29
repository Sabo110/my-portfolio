import { z } from "zod"

export const contactSchema = z.object({
    text: z.string().min(1, "text is required"),
    link: z.string().min(1, "link is required").url("the link must be a url"),
    typ: z.string({ required_error: "type network is required" })
})