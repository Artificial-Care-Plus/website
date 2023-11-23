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
                const acoes = await getAcoes(user.email)
                console.log(acoes)
                setHistory(acoes)
            }
        }
        fetchData()
    }, [user])
    return (
        <div>
            <ul className="flex flex-row flex-wrap gap-8">
                {history.length > 1 ? (
                    history.map((item) => {
                        return (
                            <li key={item}>
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
