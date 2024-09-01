"use client"

import { BiLinkExternal } from "react-icons/bi";
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProjects } from '@/app/actions'
import { Project } from '@/app/types/Project'
import { errorNotification } from '@/app/services/Toast'
import { Badge } from "@/components/ui/badge"
import ProjectSkeleton from "./ProjectSkeleton";

export default function Projects() {
    const { isPending, error, data } = useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects()
    })
    if (error) {
        errorNotification(error.message)
    }
    return (
        <section className='p-4'>
            <div className='max-w-3xl w-full mx-auto'>
                <h1 className="text-2xl font-bold mb-3">Mes projets</h1>
                <div className="flex flex-wrap gap-5">
                    {isPending && <><ProjectSkeleton /> <ProjectSkeleton /> <ProjectSkeleton /> </>}
                    {data?.map((item: Project) => (
                        <div className='border rounded p-4 max-w-[350px] w-full flex flex-col gap-5 shadow-lg' key={item.id}>
                            <h1 className='font-semibold md:text-lg'> {item.title} </h1>
                            <p> {item.description} </p>
                            <div className='flex flex-wrap gap-3'>
                                {item.stacks.split(' ').map((it, index) => (
                                    <Badge key={index} className="px-3 py-1 font-light md:text-base"> {it} </Badge>
                                ))}
                            </div>
                            <div>
                                <a href={item.url} target="_blank"><BiLinkExternal className="md:text-2xl text-lg" /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
