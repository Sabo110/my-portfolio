import React from 'react'
import Image from 'next/image'
import photo from '@/public/images/Image2portfolio.jpeg'

export default function About() {
    return (
        <section className='p-4'>
            <div className='max-w-3xl w-full mx-auto h-full flex flex-col justify-center items-center gap-5'>
                <Image src={photo} alt='photo de yoba sabo' width={100} height={100} className='h-[200px] w-[200px] rounded-full' />
                <p className='leading-relaxed text-justify'>
                    👋 Salut ! moi c'est <span>Yoba Sabo</span> étudiant niveau licence en génie logiciel. Je suis développeur web junior full-stack <span>Next.js</span> et aussi fullstack <span>Django</span>.
                    Je suis très curieux et passionné par le developpement web, surtout par le désir de résoudre des problèmes de la société en utilisant la programmation.
                    Je souhaite acquérir d'avantage d'expérience professionnelles afin de pourvoir mieux impacter mon entourage et la future entreprise pour laqelle je travaillerai.
                    Bienvenue dans mon univers de code 🚀
                </p>
            </div>
        </section>
    )
}
