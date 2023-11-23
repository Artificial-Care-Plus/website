import { getAcoes } from '@/modules/scoreCalculation'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './User'

export default function History() {
    /*
    data
    descricao
    duracao
    id
    score
    */
    const [userEscolha, setUserEscolha] = useState(4)
    const [history, setHistory] = useState([])
    const [fetchFeito, setFetchFeito] = useState(false)
    const [user, setUser] = useContext(UserContext)

    const handleUserEcolha = () => {
        if (userEscolha + 5 > history.length && history.length > 30) {
            setUserEscolha(30)
            return
        } else if (userEscolha + 5 > history.length) {
            setUserEscolha(history.length)
            return
        } else if (history.length < 5) {
            setUserEscolha(history.length)
            return
        }

        setUserEscolha(userEscolha + 5)
    }

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                setTimeout(async () => {
                    // Esse timeout é só para dar tempo do servidor receber a ação
                    const acoes = await getAcoes(user.email)
                    setHistory(acoes)
                    setFetchFeito(true)
                    console.log(acoes)
                }, 1000)
            }
        }
        fetchData()
    }, [user])
    return (
        <div className="flex w-full flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold">Histórico</h1>

            {fetchFeito == false ? (
                <span className="animate-pulse text-2xl">...</span>
            ) : (
                <div className="flex flex-col items-center  gap-4">
                    <ul className="flex w-full flex-row flex-wrap justify-center gap-4 p-4 max-lg:p-0">
                        {history.length > 1 ? (
                            history.map((item, index) => {
                                if (index > userEscolha) return null
                                return (
                                    <li key={index}>
                                        <div className="w-[16rem] rounded-xl bg-slate-300 p-4 shadow-lg">
                                            <p>
                                                Data:{' '}
                                                {new Date(
                                                    item.data,
                                                ).toLocaleDateString()}
                                            </p>
                                            <p>Tipo: {item.descricao}</p>
                                            <p>Score: {item.score} pts</p>
                                            <p>
                                                Minutos: {item.duracao} Minutos
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        ) : (
                            <p className="animate-pulse text-2xl">
                                Adicione uma Ação
                            </p>
                        )}
                    </ul>
                    {0 < userEscolha && userEscolha < history.length && (
                        <p
                            className="cursor-pointer text-xl hover:text-slate-600 hover:underline"
                            onClick={handleUserEcolha}
                        >
                            Ver Mais
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}
