"use client"

import React from 'react'
import { Progress } from "@/components/ui/progress"
import { useQuery } from '@tanstack/react-query'
import { getStacks } from '@/app/actions'
import SkillSkeleton from './SkillSkeleton'

export default function Skills() {
    const {data, isPending, error} = useQuery({
        queryKey: ['stacks'],
        queryFn: () => getStacks()
    })
  return (
    <section id='stacks' className='p-4'>
        <div className='max-w-3xl w-full mx-auto h-full'>
            <h1 className='md:text-2xl font-bold'>Mes stacks</h1>
            <div className='mt-4 flex flex-wrap gap-6'>
                {isPending && <><SkillSkeleton /> <SkillSkeleton /> <SkillSkeleton /></>}
                {data?.map((item) => (
                    <div key={item.id} className='flex items-center gap-2'>
                        <span className='uppercase font-light text-sm'> {item.name} </span>
                        <Progress value={item.level === 'debutant' ? 40: item.level === 'intermediaire' ? 60: 80 } className="md:w-[300px] w-[50px]"/>
                        <span className='font-semibold'> {item.level} </span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
