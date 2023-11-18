'use client'
import { serverUrl } from '@/modules/javaServerHelper'
import { getAcoes } from '@/modules/scoreCalculation'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { UserContext } from './User'

export default function Header() {
    const [user, setUser] = useContext(UserContext)
    useEffect(() => {
        ;(async () => {
            const response = await fetch(
                `${serverUrl}/usuario/${localStorage.getItem('email')}`,
            )
            const user = await response.json()
            const acoes = await getAcoes(user.email)
            const newUser = { ...user, score: 0 }
            if (!acoes.length === 0) {
                newUser['score'] = acoes.reduce(
                    (acc, cur) => acc + cur.score,
                    0,
                )
            }
            setUser(newUser)
        })()
    }, [setUser])
    const loadingSpan = <span className="animate-pulse text-4xl">...</span>
    return (
        <header className="flex h-16 w-full items-center justify-between bg-blue-400 p-4 text-3xl">
            <p className="text-2xl">
                Sua pontuação: {user ? user.score : loadingSpan}
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
