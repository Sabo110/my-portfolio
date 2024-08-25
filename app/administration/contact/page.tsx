import React from 'react'
import AddIcon from '@/app/components/icons/AddIcon'
import CreateContact from '@/app/components/contact/CreateContact'
import Dialoge from '@/app/components/Dialoge'

export default function ContactPage() {
  return (
    <div className='p-4'>
      <div className='flex justify-end'>
        <Dialoge title='Add contact' action={<AddIcon className='text-2xl cursor-pointer'/>}> <CreateContact /> </Dialoge>
      </div>
    </div>
  )
}
