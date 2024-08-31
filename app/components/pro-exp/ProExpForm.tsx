import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { nullable, z } from "zod"
import { cn } from "@/lib/utils"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { proExpSchema } from '@/app/validation-schema/ProExp'
import { ProExp } from '@/app/types/ProExp'
import { addProExp, updateProExp } from '@/app/actions'
import { closeDialoge } from '@/app/services/CloseDialoge'
import { successNotification } from '@/app/services/Toast'
import Spinner from '../Spinner'

export default function ProExpForm({ proExp }: { proExp?: ProExp }) {
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof proExpSchema>>({
        resolver: zodResolver(proExpSchema),
        defaultValues: proExp ? {
            ogarnization_name: proExp.ogarnization_name,
            job_title: proExp.job_title,
            description: proExp.description === null ? undefined: proExp.description,
            begin_date: proExp.begin_date,
            end_date: proExp.end_date,
            city: proExp.city,
            country: proExp.country,
            remote: proExp.remote,
        } : {
            ogarnization_name: '',
            job_title: '',
            description: undefined,
            begin_date: new Date(),
            end_date: new Date(),
            city: '',
            country: '',
            remote: false,
        }
    })
    const onSubmit = (values: z.infer<typeof proExpSchema>) => {
        // console.log(values);
        mutation.mutate(values)
    }
    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof proExpSchema>) => proExp ? updateProExp(proExp.id, data) : addProExp(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['proExps'] })
            closeDialoge()
            successNotification(data.message)
        }
    })
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                {mutation.error && <p className='text-red-400 text-lg'> {mutation.error.message} </p>}
                <FormField
                    control={form.control}
                    name="ogarnization_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization name</FormLabel>
                            <FormControl>
                                <Input placeholder="Organization name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="job_title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job title</FormLabel>
                            <FormControl>
                                <Input placeholder="Job title" {...field} />
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
                    name="begin_date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Begin date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="end_date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>End date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input placeholder="city" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input placeholder="country" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="remote"
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
                                    Remote
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={mutation.isPending} className='flex items-center gap-3'> {proExp ? 'Update' : 'Add'} {mutation.isPending && <Spinner />} </Button>
            </form>
        </Form>
    )
}
