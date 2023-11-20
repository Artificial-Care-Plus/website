import React, { Children } from 'react'
import Image from 'next/image'
import logo from '/public/static/logo.svg'

export default function HeaderUser({ children }) {
    return (
        <>
            <header className="relative flex h-16 w-full items-center justify-center bg-cor-principal text-white">
                <Image
                    src={logo}
                    alt="Logo"
                    height={64}
                    className="absolute left-1 top-0 max-lg:relative max-lg:left-0"
                />
                <h1 className="text-4xl font-bold italic max-lg:hidden">
                    {children}
                </h1>
            </header>
        </>
    )
}
