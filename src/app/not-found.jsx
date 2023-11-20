import Link from 'next/link'

export default function Error() {
    return (
        <>
            <div className="p-4">
                <h1 className="text-4xl font-bold">
                    Parece que algo deu errado!
                </h1>
                <Link
                    href={'/'}
                    className="text-2xl font-bold text-blue-400 underline"
                >
                    Clique aqui para voltar
                </Link>
            </div>
        </>
    )
}
