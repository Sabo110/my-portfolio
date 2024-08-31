import { z } from "zod"

export const projectSchema = z.object({
    title: z.string().min(1, {message: 'title is required'}),
    description: z.string().min(1, {message: 'description is required'}),
    url: z.string().min(1, {message: 'url is required'}).url({message: 'url must be valid'}),
    stacks: z.string().min(1, {message: 'stacks is required'}),
    visible: z.boolean()
})