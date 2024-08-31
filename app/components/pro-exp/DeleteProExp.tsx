"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { closeDialoge } from '@/app/services/CloseDialoge'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { successNotification, errorNotification } from '@/app/services/Toast'
import { deleteProExp } from '@/app/actions'
import Spinner from '../Spinner'

export default function DeleteProExp({ proExpId }: { proExpId: number }) {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: () => deleteProExp(proExpId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['proExps'] })
            closeDialoge()
            successNotification(data.message)
        },
        onError: (error) => {
            closeDialoge()
            errorNotification(error.message)
        }
    })
    return (
        <div>
            <h1>Do you want delete this professional experience ?</h1>
            <div className="flex items-center gap-3 mt-3">
                <Button variant="destructive" className='flex items-center gap-2' onClick={() => mutation.mutate()} disabled={mutation.isPending}>Yes {mutation.isPending && <Spinner />} </Button>
                <Button onClick={closeDialoge}>No</Button>
            </div>
        </div>
    )
}
