"use client"

import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { stackSchema } from '@/app/validation-schema/Stack'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
import { Stack } from '@/app/types/Stack'
import { addStack, updateStack } from '@/app/actions'
import { closeDialoge } from '@/app/services/CloseDialoge'
import { successNotification } from '@/app/services/Toast'
import Spinner from '../Spinner'

export default function StackForm({ stack }: { stack?: Stack }) {
    const selectItems = [
        { value: 'debutant', text: 'debutant' },
        { value: 'intermediaire', text: 'intermediaire' },
        { value: 'avancé', text: 'avancé' },
        { value: 'expert', text: 'expert' },
    ]
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (data: Omit<Stack, 'id'>) => stack ? updateStack(stack.id, data) : addStack(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['stacks'] })
            closeDialoge()
            successNotification(data.message)
        }

    })
    const form = useForm<z.infer<typeof stackSchema>>({
        resolver: zodResolver(stackSchema),
        defaultValues: stack ? {
            name: stack.name,
            level: stack.level
        } : {
            name: "",
        },
    })
    function onSubmit(values: z.infer<typeof stackSchema>) {
        mutation.mutate(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {mutation.error && <p className='text-red-400 text-lg'> {mutation.error.message} </p>}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a level" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {selectItems.map((item) => (
                                        <SelectItem value={item.value} key={item.value} className='uppercase'> {item.text} </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={mutation.isPending} className='flex items-center gap-3'> {stack ? 'Update' : 'Add'} {mutation.isPending && <Spinner />} </Button>
            </form>
        </Form>
    )
}
