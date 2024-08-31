import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Spinner from '../Spinner'
import { closeDialoge } from '@/app/services/CloseDialoge'
import { successNotification } from '@/app/services/Toast'
import { Project } from '@/app/types/Project'
import { addProject, updateProject } from '@/app/actions'
import { projectSchema } from '@/app/validation-schema/Project'
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectForm({ project }: { project?: Project }) {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (data: Omit<Project, 'id'>) => project ? updateProject(project.id, data) : addProject(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            closeDialoge()
            successNotification(data.message)
        }

    })
    const form = useForm<z.infer<typeof projectSchema>>({
        resolver: zodResolver(projectSchema),
        defaultValues: project ? {
            title: project.title,
            description: project.description,
            url: project.url,
            visible: project.visible,
            stacks: project.stacks
        } : {
            title: '',
            description: '',
            url: '',
            visible: false,
            stacks: ''
        },
    })
    function onSubmit(values: z.infer<typeof projectSchema>) {
        mutation.mutate(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {mutation.error && <p className='text-red-400 text-lg'> {mutation.error.message} </p>}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project title</FormLabel>
                            <FormControl>
                                <Input placeholder="project title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="description"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="stacks"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Stacks</FormLabel>
                            <FormControl>
                                <Input placeholder="project title" {...field} />
                            </FormControl>
                            <FormDescription>
                                separé par une trait de 6(-)
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project url</FormLabel>
                            <FormControl>
                                <Input placeholder="project url" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="visible"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    visible
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={mutation.isPending} className='flex items-center gap-3'> {project ? 'Update' : 'Add'} {mutation.isPending && <Spinner />} </Button>
            </form>
        </Form>
    )
}
