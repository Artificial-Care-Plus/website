import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
export default function Header(){
    const user = {
        name: "John Doe",
    }
    return (
        <header className="flex h-16 w-full items-center justify-end bg-blue-400 p-4">
            <Link href={'#'} className='flex flex-wrap items-center gap-4 border-none text-3xl'>
                {user.name}
                <FaUser />
            </Link>
        </header>
    );
}