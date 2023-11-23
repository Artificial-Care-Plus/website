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
    const [history, setHistory] = useState([])
    const [user, setUser] = useContext(UserContext)
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                setTimeout(async () => {
                    // Esse timeout é só para dar tempo do servidor receber a ação
                    const acoes = await getAcoes(user.email)
                    console.log(acoes)
                    setHistory(acoes)
                }, 1000)
            }
        }
        fetchData()
    }, [user])
    return (
        <div>
            <ul className="grid grid-cols-3 gap-4">
                {history.length > 1 ? (
                    history.map((item, index) => {
                        return (
                            <li key={index}>
                                {new Date(item.data).toLocaleDateString()}:{' '}
                                {item.descricao} - {item.score} Pontos:{' '}
                                {item.duracao} Minutos
                            </li>
                        )
                    })
                ) : (
                    <span className="animate-pulse text-2xl">...</span>
                )}
            </ul>
        </div>
    )
}
