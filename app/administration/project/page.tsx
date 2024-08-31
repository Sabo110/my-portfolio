"use client"

import React from 'react'
import AddIcon from '@/app/components/icons/AddIcon'
import Dialoge from '@/app/components/Dialoge'
import ProjectForm from '@/app/components/project/ProjectForm'
import { useQuery } from '@tanstack/react-query'
import { getProjects } from '@/app/actions'
import { errorNotification } from '@/app/services/Toast'
import { Project } from '@/app/types/Project'
import ProjectCard from '@/app/components/project/ProjectCard'

export default function ProjectPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects()
  })
  if (error) {
    errorNotification(error.message)
  }
  return (
    <div className='p-4'>
      <div className='flex justify-end'>
        <Dialoge title='Add Professional experience' action={<AddIcon className="text-2xl cursor-pointer" />}> <ProjectForm /> </Dialoge>
      </div>
      <div className='flex flex-wrap md:justify-start justify-center gap-4'>
        {data?.length === 0 && <h1 className='text-2xl font-bold'>No project available !</h1>}
        {data?.map((item: Project) => (
          <ProjectCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
