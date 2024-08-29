"use client"

import React from 'react'
import AddIcon from '@/app/components/icons/AddIcon'
import Dialoge from '@/app/components/Dialoge'
import { getContacts } from '@/app/actions'
import { useQuery } from '@tanstack/react-query'
import { ContactCard } from '@/app/components/contact/ContactCard'
import { Contact } from '@/app/types/Contact'
import { errorNotification } from '@/app/services/Toast'
import ContactForm from '@/app/components/contact/ContactForm'

export default function ContactPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts()
  })
  if (error) {
    errorNotification(error.message)
  }
  return (
    <div className='p-4'>
      <div className='flex justify-end'>
        <Dialoge title='Add contact' action={<AddIcon className="text-2xl cursor-pointer" />}> <ContactForm /> </Dialoge>
      </div>
      <div className='flex flex-wrap md:justify-start justify-center gap-4'>
        {data?.length === 0 && <h1 className='text-2xl font-bold'>No contact available !</h1>}
        {data?.map((item: Contact) => (
          <ContactCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
