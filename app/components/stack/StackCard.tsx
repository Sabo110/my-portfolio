import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Stack } from '@/app/types/Stack'
import TrashIcon from '../icons/TrashIcon'
import UpdataIcon from "../icons/UpdataIcon"
import StackForm from './StackForm'
import DeleteStack from './DeleteStack'
import Dialoge from '../Dialoge'

export default function StackCard({data}: {data: Stack}) {
    return (
        <Card className="min-w-[300px]">
            <CardContent className="flex flex-wrap gap-3">
                <span>{data.name}</span> <span>{data.level}</span>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Dialoge title="Delete stack" action={<TrashIcon className="text-xl cursor-pointer" />}>
                    <DeleteStack stackId={data.id} />
                </Dialoge>
                <Dialoge title="Update stack" action={<UpdataIcon className="text-xl cursor-pointer" />}>
                    <StackForm stack={data}/>
                </Dialoge>
            </CardFooter>
        </Card>
    )
}
