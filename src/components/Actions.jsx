'use client'

import { serverUrl } from '@/scripts/javaServerHelper'
import { useContext } from 'react'
import { UserContext } from './User'

export default function Actions() {
    const [user, setUser] = useContext(UserContext)
    let value = ''
    let horas = 0
    let desc = ''
    const onClick = () => {
        if (!value || !horas) return
        const body = {
            data: new Date().toJSON().slice(0, 10),
            descricao: desc,
            duracao: horas,
            score: parseInt(value) * horas,
            usuario: {
                email: user.email,
            },
        }
        fetch(`${serverUrl}/acoes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(() => {
            console.log('Enviado')
        })
        setUser({ ...user, score: user.score + parseInt(value) * horas })
        console.log(user)
    }
    return (
        <div className="w-2/3 border-4 border-green-600 p-4">
            <h1 className="text-center text-2xl">
                Quais Atividades Você praticou hoje?
            </h1>
            <div className="flex flex-col items-center gap-2">
                <select
                    className="w-1/2 rounded-lg border border-black p-1"
                    onChange={(e) => {
                        value = e.target.value
                        desc = e.target.options[e.target.selectedIndex].text
                    }}
                >
                    <option value="0" disabled>
                        Selecione
                    </option>
                    <option value="20">Caminhada</option>
                    <option value="30">Corrida</option>
                    <option value="60">Ciclismo</option>
                    <option value="60">Natação</option>
                    <option value="60">Musculação</option>
                    <option value="20">Yoga</option>
                    <option value="15">Alongamento</option>
                    <option value="30">Dança</option>
                </select>
                <label htmlFor="horas">Por quantas horas:</label>
                <input
                    type="number"
                    name="horas"
                    id="horas"
                    className="w-1/6 rounded-lg border border-black p-1"
                    onChange={(e) => {
                        horas = e.target.value
                    }}
                />
                <button
                    onClick={onClick}
                    className="rounded-sm border border-black p-2"
                >
                    Adicionar
                </button>
            </div>
        </div>
    )
}
