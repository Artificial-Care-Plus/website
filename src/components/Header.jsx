'use client'
import { serverUrl } from '@/modules/javaServerHelper'
import { getAcoes } from '@/modules/scoreCalculation'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { PiHeartbeatFill } from 'react-icons/pi'
import { UserContext } from './User'
import logo from '/public/static/logo.svg'
import ModalUser from './ModalUser'

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
            if (acoes.length !== 0) {
                newUser['score'] = acoes.reduce(
                    (acc, cur) => acc + cur.score,
                    0,
                )
            }
            setUser(newUser)
        })()
    }, [setUser])
    const loadingSpan = <span className="animate-pulse text-4xl">...</span>
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className="flex h-fit w-full items-center justify-between bg-cor-principal p-4 text-xl text-white max-lg:flex-col">
            {openModal && <ModalUser 
            setOpenModal={setOpenModal}
            />}
            <Link href="/">
                <Image
                    src={logo}
                    height={86}
                    alt={'Logo'}
                    className="transition-all duration-300 hover:scale-110"
                />
            </Link>
            <div className="flex h-full flex-col items-end justify-between">
                <p className="flex flex-wrap items-center gap-4 border-none ">
                    Health Score: {user ? user.score : loadingSpan}{' '}
                    <PiHeartbeatFill />
                </p>
                <button
                    onClick={() => setOpenModal(true)}
                    className="flex flex-wrap items-center gap-4 border-none"
                >
                    {user ? user.nome : loadingSpan}
                    <FaUser />
                </button>
            </div>
        </header>
    )
}
