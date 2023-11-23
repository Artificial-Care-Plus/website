'use client'
import { useContext, useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import StatusMsg from './StatusMsg'
import { UserContext } from './User'

export default function ModalUser({ setOpenModal }) {
    const [status, setStatus] = useState(null)
    const updateUser = useContext(UserContext)[1]
    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: '',
        nascimento: '',
        peso: 0,
        altura: 0,
    })

    useEffect(() => {
        ;(async () => {
            const response = await fetch(
                `/api/usuario/${localStorage.getItem('email')}`,
            )
            const statusAPI = response.status
            const user = await response.json()
            if (statusAPI === 200) {
                setUser(user)
            } else {
                setStatus({ sucesso: user.sucesso, resposta: user.resposta })
            }
        })()
    }, [])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(
            `/api/usuario/${localStorage.getItem('email')}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            },
        )
        const data = await response.json()
        if (data.sucesso) {
            updateUser({ ...user })
            setStatus({ sucesso: data.sucesso, resposta: data.resposta })
            setTimeout(() => {
                setStatus(null)
                setOpenModal(false)
            }, 2000)
        } else {
            setStatus({ sucesso: data.sucesso, resposta: data.resposta })
            setTimeout(() => {
                setStatus(null)
            }, 2000)
        }
    }

    return (
        <div className="formUpdate fixed right-0 top-0 z-40  w-1/3 overflow-scroll max-lg:w-screen">
            <div className="relative">
                {status && (
                    <div className="absolute left-[50%] z-50 w-full translate-x-[-50%]">
                        <StatusMsg
                            resposta={status.resposta}
                            sucesso={status.sucesso}
                        />
                    </div>
                )}
                <div
                    onClick={() => setOpenModal(false)}
                    className="absolute right-2 top-2 cursor-pointer font-extrabold text-black"
                >
                    <IoCloseSharp className="text-3xl" />
                </div>
                <form
                    action="#"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 p-4 text-black"
                >
                    <legend className="text-2xl font-bold text-black max-lg:text-center">
                        Atualizar Dados
                    </legend>
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="nome">Nome: </label>
                        <input
                            required
                            type="text"
                            name="nome"
                            id="nome"
                            value={user.nome}
                            onChange={handleChange}
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="peso">Peso(kg): </label>
                        <input
                            required
                            type="number"
                            name="peso"
                            step="any"
                            id="peso"
                            value={user.peso}
                            onChange={handleChange}
                            max={400}
                            min={10}
                        />
                    </div>
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="altura">Altura(m): </label>
                        <input
                            required
                            type="number"
                            name="altura"
                            id="altura"
                            value={user.altura}
                            max={3}
                            min={0.5}
                            onChange={handleChange}
                            step="any"
                        />
                    </div>
                    <input
                        type="hidden"
                        value={user.nascimento}
                        name="nascimento"
                    />
                    <input type="hidden" value={user.email} name="email" />
                    <input type="hidden" value={user.senha} name="senha" />
                    <button>Atualizar</button>
                </form>
            </div>
        </div>
    )
}
