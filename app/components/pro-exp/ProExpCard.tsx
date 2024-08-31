import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import TrashIcon from "../icons/TrashIcon"
import UpdataIcon from "../icons/UpdataIcon"
import Dialoge from "../Dialoge"
import ProExpForm from './ProExpForm'
import DeleteProExp from './DeleteProExp'
import { ProExp } from '@/app/types/ProExp'
import PopoverDemo from '../PopoverDemo'


export default function ProExpCard({ data }: { data: ProExp }) {
    return (
        <Card className="max-w-[350x]">
            <CardContent className="">
                <ul className='mb-3'>
                    <li><span className='font-semibold capitalize text-lg'>organization name :</span> {data.ogarnization_name} </li>
                    <li><span className='font-semibold capitalize text-lg'>job title:</span> {data.job_title} </li>
                    <li><span className='font-semibold capitalize text-lg'>begin date:</span> {data.begin_date.toLocaleDateString('fr-FR')} </li>
                    <li><span className='font-semibold capitalize text-lg'>end date:</span> {data.end_date.toLocaleDateString('fr-FR')} </li>
                </ul>
                {data.description && <PopoverDemo action={ <span className='underline underline-offset-2 cursor-pointer'>read description</span> }> <p> {data.description} </p> </PopoverDemo>}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Dialoge title="Delete contact" action={<TrashIcon className="text-xl cursor-pointer" />}>
                    <DeleteProExp proExpId={data.id} />
                </Dialoge>
                <Dialoge title="Update Professional experience" action={<UpdataIcon className="text-xl cursor-pointer" />}>
                    <ProExpForm proExp={data} />
                </Dialoge>
            </CardFooter>
        </Card>
    )
}
