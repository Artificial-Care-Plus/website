'use client'

import { mapAcoesLabel } from '@/modules/scoreCalculation'
import { useContext, useState } from 'react'
import { UserContext } from './User'

export default function Actions() {
    const [user, setUser] = useContext(UserContext)
    const [atividade, setAtividade] = useState('')
    const [desc, setDesc] = useState('')
    const [value, setValue] = useState('')
    const [min, setMin] = useState(0)
    const [dist, setDist] = useState(0)
    const walkExercises = ['3', '6', '7', '9', '10']
    const onClick = async () => {
        if (!value || !min) return
        if (min > 24 * 60)
            return alert('Você não pode adicionar mais de 24 horas por dia')
        const score = Math.trunc(
            (
                await (
                    await fetch(
                        `/api/calorias?workout_type=${mapAcoesLabel(
                            desc,
                        )}&time=${min}`,
                    )
                ).json()
            ).prediction / 5,
        )

        const body = {
            data: new Date().toJSON().slice(0, 10),
            descricao: desc,
            duracao: min,
            score: score,
            usuario: {
                email: user.email,
            },
        }
        fetch('/api/acoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            mode: 'no-cors',
        }).then(() => {
            console.log('Enviado')
        })
        setUser({ ...user, score: user.score + body.score })
        if (dist && walkExercises.includes(atividade)) {
            const steps = Math.trunc(
                (
                    await (
                        await fetch(
                            `/api/passos?workout_type=${mapAcoesLabel(
                                desc,
                            )}&time=${min}&distance=${dist}`,
                        )
                    ).json()
                ).prediction,
            )
            alert(`Você deu ${steps} passos`)
        }
        console.log(user)
    }
    return (
        <div className="w-2/3 border-4 border-green-600 p-4">
            <h1 className="text-center text-2xl">
                Quais Atividades Você praticou hoje?
            </h1>
            <div className="flex flex-col items-center gap-2">
                <select
                    defaultValue="0"
                    className="w-1/2 rounded-lg border border-black p-1"
                    onChange={(e) => {
                        setValue(e.target.value)
                        setDesc(e.target.options[e.target.selectedIndex].text)
                        setAtividade(e.target.value)
                    }}
                    id="atividade"
                >
                    <option value="0" disabled>
                        Selecione
                    </option>
                    <option value="1">Treino livre</option>
                    <option value="2">Bicicleta Ergométrica</option>
                    <option value="3">Caminhada</option>
                    <option value="4">Surfar</option>
                    <option value="5">Ciclismo</option>
                    <option value="6">Corrida ao ar livre</option>
                    <option value="7">Corrida de Trilha</option>
                    <option value="8">Natação</option>
                    <option value="9">Trilha</option>
                    <option value="10">Esteira</option>
                    <option value="11">Cricket</option>
                </select>
                {walkExercises.includes(atividade) ? (
                    <>
                        <label htmlFor="distancia">Por quantos Km:</label>
                        <input
                            type="number"
                            name="distancia"
                            id="distancia"
                            className="w-1/6 rounded-lg border border-black p-1"
                            max={200}
                            min={0.1}
                            onChange={(e) => {
                                setDist(e.target.value)
                            }}
                        />
                    </>
                ) : (
                    ''
                )}
                <label htmlFor="minutos">Por quantos minutos:</label>
                <input
                    type="number"
                    name="minutos"
                    id="minutos"
                    className="w-1/6 rounded-lg border border-black p-1"
                    max={24}
                    min={0.1}
                    onChange={(e) => {
                        setMin(e.target.value)
                    }}
                />
                <button
                    onClick={() => {
                        onClick()
                    }}
                    className="rounded-sm border border-black p-2"
                >
                    Adicionar
                </button>
            </div>
        </div>
    )
}
