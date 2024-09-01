"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProExps } from '@/app/actions'
import ProExpSkeleton from './ProExpSkeleton'

export default function ProExp() {
    const {data, isPending, error} = useQuery({
        queryKey: ['proExps'],
        queryFn: () => getProExps()
    })
  return (
    <section className='' id='experiences'>
        <div className='max-w-3xl w-full mx-auto p-4'>
            <h1 className='md:text-2xl  font-bold'>Experiences Professionnelles</h1>
            <div className='flex flex-col gap-3 mt-3'>
                {isPending && <><ProExpSkeleton /></>}
                {data?.map((item) => (
                    <div className='border rounded shadow-xl p-3 bg-gray-900 text-gray-300' key={item.id}>
                        <ul className='flex flex-col gap-1'>
                            <li><span className='capitalize'>Entreprise: </span> <span className='font-light'>{item.ogarnization_name}</span></li>
                            <li><span className='capitalize'>poste: </span> <span>{item.job_title}</span></li>
                            <li><span className='capitalize'>date de debut: </span> <span>{item.begin_date.toLocaleDateString()}</span></li>
                            <li><span className='capitalize'>date de fin: </span> <span>{item.end_date.toLocaleDateString()}</span></li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
