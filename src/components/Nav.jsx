'use client'
import Link from 'next/link'
import { useState } from 'react'
import { IoMdHelp } from 'react-icons/io'

export default function Nav() {
    const [open, setOpen] = useState(true)

    return (
        <>
            {open ? (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed bottom-4 right-4 z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-[50%] bg-cor-principal shadow-[0_0_2px_2px_rgba(0,0,0,0.55)]  transition-all duration-500"
                >
                    <IoMdHelp className="animate-delay-text text-4xl text-white" />
                </div>
            ) : (
                <div
                    onClick={() => setOpen(true)}
                    className="fixed bottom-0 right-0 z-10 flex h-[10rem] w-[20rem] cursor-pointer items-center justify-center bg-cor-principal shadow-[0_0_2px_2px_rgba(0,0,0,0.25)] transition-all duration-500 max-lg:h-[300px] max-lg:w-screen"
                >
                    <ul className="flex animate-delay-text flex-col items-center justify-center gap-2 text-center text-2xl text-white max-lg:gap-8 max-lg:text-4xl max-lg:underline">
                        <li>
                            <Link className="hover:underline" href={'/about'}>
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href={'/faq'}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href={'/info'}>
                                INFO
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}
