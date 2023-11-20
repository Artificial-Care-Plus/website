import Link from 'next/link'

export default function Footer() {
    const membersInfo = [
        ['Amanda Bomfim De Oliveira', 'RM99741', '1TDSPG', 'Dev'],
        ['Cauã Alencar Rojas Romero', 'RM98638', '1TDSPG', 'Dev'],
        ['Ester Dutra da Silva', 'RM97798', '1TDSPG', 'Dev'],
        ['Leonardo dos Santos Guerra', 'RM99738', '1TDSPG', 'Dev'],
        ['Maria Eduarda Ferreira da Mata', 'RM99004', '1TDSPG', 'Dev e PO'],
    ]
    const teste = 1
    return (
        <footer>
            <div className="flex h-1/6 w-full flex-col items-center justify-center gap-2 bg-cor-principal p-4 py-2 text-black">
                <div className="flex w-full justify-between text-xl text-white underline">
                    <Link
                        href={'/about'}
                        className="transition-all duration-100 hover:text-2xl"
                    >
                        Sobre nós
                    </Link>
                    <Link
                        href={'/faq'}
                        className="transition-all duration-100 hover:text-2xl"
                    >
                        FAQ
                    </Link>
                </div>
                <div className="flex w-full flex-row justify-between gap-4 overflow-hidden text-center">
                    {membersInfo.map((member) => (
                        <div key={member}>
                            {member.map((info) => (
                                <p
                                    key={info}
                                    className="flex flex-col items-center justify-center text-white"
                                >
                                    {info}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
