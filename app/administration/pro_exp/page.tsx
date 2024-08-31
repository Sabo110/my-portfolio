"use client"

import React from 'react'
import AddIcon from '@/app/components/icons/AddIcon'
import Dialoge from '@/app/components/Dialoge'
import ProExpForm from '@/app/components/pro-exp/ProExpForm'
import { useQuery } from '@tanstack/react-query'
import { getProExps } from '@/app/actions'
import { errorNotification } from '@/app/services/Toast'
import { ProExp } from '@/app/types/ProExp'
import ProExpCard from '@/app/components/pro-exp/ProExpCard'

export default function ProExpPage() {
  const { data, error, isPending } = useQuery({
    queryKey: ['proExps'],
    queryFn: () => getProExps()
  })
  if (error) {
    errorNotification(error.message)
  }
  return (
    <div className='p-4'>
      <div className='flex justify-end'>
        <Dialoge title='Add Professional experience' action={<AddIcon className="text-2xl cursor-pointer" />}> <ProExpForm /> </Dialoge>
      </div>
      <div className='flex flex-wrap md:justify-start justify-center gap-4'>
        {data?.length === 0 && <h1 className='text-2xl font-bold'>No professional experience available !</h1>}
        {data?.map((item: ProExp) => (
          <ProExpCard data={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}
