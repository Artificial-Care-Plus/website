'use client'
import { serverUrl } from '@/scripts/javaServerHelper'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
export default function Header() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const response = fetch(
            `${serverUrl}/usuario/${localStorage.getItem('email')}`,
        )
        response.then((res) => res.json()).then((res) => setUser(res))
    }, [])
    const loadingSpan = <span className="animate-pulse text-4xl">...</span>
    return (
        <header className="flex h-16 w-full items-center justify-between bg-blue-400 p-4 text-3xl">
            <p className="text-2xl">
                Sua pontuação: {user ? user.score : loadingSpan}
            </p>
            <p className="text-xl">
                Dica do dia: Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <Link
                href={'#'}
                className="flex flex-wrap items-center gap-4 border-none"
            >
                {user ? user.nome : loadingSpan}
                <FaUser />
            </Link>
        </header>
    )
}
