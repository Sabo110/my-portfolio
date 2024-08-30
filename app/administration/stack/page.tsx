"use client"

import React from 'react'
import AddIcon from '@/app/components/icons/AddIcon'
import Dialoge from '@/app/components/Dialoge'
import StackForm from '@/app/components/stack/StackForm'
import { getStacks } from '@/app/actions'
import { useQuery } from '@tanstack/react-query'
import StackCard from '@/app/components/stack/StackCard'
import { Stack } from '@/app/types/Stack'
import { errorNotification } from '@/app/services/Toast'
import Spinner from '@/app/components/Spinner'

export default function StackPage() {
  const { isPending, error, data } = useQuery<Stack[]|[]>({
    queryKey: ['stacks'],
    queryFn: () => getStacks()
  })
  if (error) {
    errorNotification(error.message)
  }
  return (
    <div className='p-4'>
      <div className='flex justify-end'>
        <Dialoge title='Add stack' action={<AddIcon className='text-2xl cursor-pointer' />}> <StackForm /> </Dialoge>
      </div>
      <div className='flex flex-wrap md:justify-start justify-center gap-4'>
        {isPending && <div className='flex items-center gap-2'><Spinner /> chargement...</div> }
        {data?.length === 0 && <h1 className='text-2xl font-bold'>No stack available !</h1>}
        {data?.map((item) => (
          <StackCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
