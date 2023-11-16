import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
export default function Header() {
    const user = {
        name: 'John Doe',
        score: 100,
    }
    return (
        <header className="flex h-16 w-full items-center justify-between bg-blue-400 p-4 text-3xl">
            <p className="text-2xl">Sua pontuação: {user.score}</p>
            <p className="text-xl">
                Dica do dia: Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <Link
                href={'#'}
                className="flex flex-wrap items-center gap-4 border-none"
            >
                {user.name}
                <FaUser />
            </Link>
        </header>
    )
}
