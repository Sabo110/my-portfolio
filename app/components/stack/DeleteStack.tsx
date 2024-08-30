import React from 'react'
import { closeDialoge } from '@/app/services/CloseDialoge'
import { Button } from "@/components/ui/button"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteStack } from '@/app/actions'
import { errorNotification, successNotification } from '@/app/services/Toast'
import Spinner from '../Spinner'

export default function DeleteStack({stackId}: {stackId: number}) {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: () => deleteStack(stackId),
        onSuccess: (data) => {
            //invalide la query
            queryClient.invalidateQueries({queryKey: ['stacks']})
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
            <h1>Do you want delete this stack</h1>
            <div className='flex items-center gap-3 mt-3'>
                <Button variant="destructive" className='flex items-center gap-2' onClick={() => mutation.mutate()} disabled={mutation.isPending}>Yes {mutation.isPending && <Spinner />} </Button>
                <Button onClick={closeDialoge}>No</Button>
            </div>
        </div>
    )
}
