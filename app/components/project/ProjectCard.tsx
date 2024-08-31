import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Project } from '@/app/types/Project'
import TrashIcon from '../icons/TrashIcon'
import UpdataIcon from "../icons/UpdataIcon"
import ProjectForm from './ProjectForm'
import DeleteProject from './DeleteProject'
import Dialoge from '../Dialoge'
import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ data }: { data: Project }) {
    return (
        <Card className="max-w-[300px]">
            <CardHeader>
                <CardTitle> {data.title} </CardTitle>
                <CardDescription> {data.description} </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
                {data.stacks.split(' ').map((item, index) => (
                    <Badge key={index} className='px-3 py-1'> {item} </Badge>
                ))}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Dialoge title="Delete stack" action={<TrashIcon className="text-xl cursor-pointer" />}>
                    <DeleteProject projectId={data.id} />
                </Dialoge>
                <Dialoge title="Update stack" action={<UpdataIcon className="text-xl cursor-pointer" />}>
                    <ProjectForm project={data} />
                </Dialoge>
            </CardFooter>
        </Card>
    )
}
