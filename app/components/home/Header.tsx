import React from 'react'

export default function Header() {
    const sectionLinks = [
        {text: 'A propos', link: '#about'},
        {text: 'projets', link: '#projects'},
        {text: 'experiences', link: '#experiences'},
        {text: 'Stacks', link: '#stacks'},
        {text: 'contact', link: '#contact'}

    ]
  return (
    <header>
        <div className='max-w-3xl w-full mx-auto p-4 text-center'>
            <span className='text-xl font-bold uppercase'>Yoba Sabo</span>
        </div>
    </header>
  )
}
