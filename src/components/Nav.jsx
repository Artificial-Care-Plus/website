'use client'
import React from 'react'
import { useState } from 'react'
import { IoMdHelp } from "react-icons/io";
import Link from 'next/link'

export default function Nav() {
    const [open, setOpen] = useState(true)

    return (
        <>
            {open ? (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed bottom-4 right-4 z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-[50%] bg-cor-principal shadow-[0_0_2px_2px_rgba(0,0,0,0.55)]  transition-all duration-500"
                >
                    <IoMdHelp className='text-4xl text-white'/>
                </div>
            ) : (
                <div
                    onClick={() => setOpen(true)}
                    className="md-lg:h-1/2 md-lg:w-screen fixed bottom-0 right-0 z-10 flex h-[10rem] w-[20rem] cursor-pointer items-center justify-center bg-cor-principal shadow-[0_0_2px_2px_rgba(0,0,0,0.25)] transition-all duration-500 "
                >
                  <ul className='flex flex-col items-center justify-center gap-2 text-center text-2xl text-white'>
                    <li><Link className='hover:underline' href={'/about'}>Sobre nós</Link></li>
                    <li><Link className='hover:underline' href={'/faq'}>FAQ</Link></li>
                  </ul>
                </div>
            )}
        </>
    )
}
