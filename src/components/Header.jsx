'use client'
import { getAcoes } from '@/modules/scoreCalculation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { PiHeartbeatFill } from 'react-icons/pi'
import { IoLogOut } from 'react-icons/io5'
import ModalUser from './ModalUser'
import { UserContext } from './User'
import logo from '/public/static/logo.svg'

export default function Header() {
    const [user, setUser] = useContext(UserContext)
    const router = useRouter()
    const handleLogout = () => {
        sessionStorage.clear()
        localStorage.removeItem('token')
        setUser({})
        router.push('/login', { scroll: false })
    }

    useEffect(() => {
        ;(async () => {
            const response = await fetch(
                `api/usuario/${localStorage.getItem('email')}`,
            )
            const user = await response.json()
            const acoes = await getAcoes(user.email)
            const newUser = { ...user, score: 0 }
            if (acoes.length !== 0) {
                const score = acoes
                    .map((acao) => acao.score)
                    .reduce((acc, cur) => acc + cur)
                newUser.score = Math.trunc(score)
            }
            setUser(newUser)
        })()
    }, [setUser])
    const loadingSpan = <span className="animate-pulse text-4xl">...</span>
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className="flex h-fit w-full items-center justify-between bg-cor-principal p-4 text-xl text-white max-lg:flex-col">
            {openModal && <ModalUser setOpenModal={setOpenModal} />}
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
                <button
                    onClick={() => handleLogout()}
                    className="flex flex-wrap items-center gap-4 border-none"
                >
                    Sair
                    <IoLogOut />
                </button>
            </div>
        </header>
    )
}
