import React from 'react'
import { closeDialoge } from '@/app/services/CloseDialoge'
import { Button } from "@/components/ui/button"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProject } from '@/app/actions'
import { errorNotification, successNotification } from '@/app/services/Toast'
import Spinner from '../Spinner'

export default function DeleteProject({ projectId }: { projectId: number }) {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: () => deleteProject(projectId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
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
            <h1>Do you want delete this project ?</h1>
            <div className='flex items-center gap-3 mt-3'>
                <Button variant="destructive" className='flex items-center gap-2' onClick={() => mutation.mutate()} disabled={mutation.isPending}>Yes {mutation.isPending && <Spinner />} </Button>
                <Button onClick={closeDialoge}>No</Button>
            </div>
        </div>
    )
}
