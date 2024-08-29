import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { contactSchema } from '@/app/validation-schema/Contact'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Contact } from '@/app/types/Contact'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateContact, addContact } from '@/app/actions'
import { closeDialoge } from '@/app/services/CloseDialoge'
import { successNotification } from '@/app/services/Toast'
import Spinner from '../Spinner'

export default function ContactForm({ contact }: { contact?: Contact }) {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (data: Omit<Contact, 'id'>) => contact ? updateContact(contact.id, data) : addContact(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['contacts']})
            closeDialoge()
            successNotification(data.message)
        }
    })
    const selectItems = [
        { value: 'github', text: 'github' },
        { value: 'gmail', text: 'gmail' },
        { value: 'whatsapp', text: 'whatsapp' },
        { value: 'linkedin', text: 'linkedin' }
    ]
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: contact ? {
            typ: contact.typ,
            text: contact.text,
            link: contact.link
        } : {
            text: '',
            link: ''
        }
    })
    const onSubmit = (values: z.infer<typeof contactSchema>) => {
        mutation.mutate(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {mutation.error && <p className='text-red-400 text-lg'> {mutation.error.message} </p> }
                <FormField
                    control={form.control}
                    name="typ"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a type for the contact" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {selectItems.map((item) => (
                                        <SelectItem value={item.value} key={item.value}> {item.text} </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Text</FormLabel>
                            <FormControl>
                                <Input placeholder="Text contact" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link</FormLabel>
                            <FormControl>
                                <Input placeholder="Link contact" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={mutation.isPending} className='flex items-center gap-3'> {contact ? 'Update' : 'Add'} {mutation.isPending && <Spinner />} </Button>
            </form>
        </Form>
    )
}
