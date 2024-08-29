import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Contact } from "@/app/types/Contact"
import TrashIcon from "../icons/TrashIcon"
import UpdataIcon from "../icons/UpdataIcon"
import Dialoge from "../Dialoge"
import DeleteContact from "./DeleteContact"
import ContactForm from "./ContactForm"

export function ContactCard({ data }: { data: Contact }) {
  return (
    <Card className="min-w-[300px]">
      <CardContent className="flex flex-wrap gap-3">
        <span>{data.typ}</span> <span>{data.text}</span>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialoge title="Delete contact" action={<TrashIcon className="text-xl cursor-pointer" />}>
          <DeleteContact contactId={data.id}/>
        </Dialoge>
        <Dialoge title="Update contact" action={<UpdataIcon className="text-xl cursor-pointer" />}>
          <ContactForm contact={data}/>
        </Dialoge>
      </CardFooter>
    </Card>
  )
}
