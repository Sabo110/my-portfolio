"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getContacts } from '@/app/actions'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const { isPending, error, data } = useQuery({
        queryKey: ['contacts'],
        queryFn: () => getContacts()
    })
    return (
        <footer className='p-6 bg-gray-900 text-gray-300'>
            <ul className='flex flex-wrap gap-4 justify-center'>
                {data?.map((item) => (
                    <li className='flex items-center gap-1' key={item.id}> {
                        item.typ === 'linkedin' ? <FaLinkedinIn />: 
                        item.typ === 'whatsapp' ? <FaWhatsapp /> : 
                        item.typ === 'gmail' ? <BiLogoGmail /> : 
                        item.typ === 'github' ? <FaGithub /> : ''
                    } {item.text} </li>

                ))}
            </ul>
            <p className='text-center mt-4 text-sm'>@copiright tous droit reservé 2024</p>
        </footer>
    )
}
