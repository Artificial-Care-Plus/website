'use client'
import { useState } from 'react'
import { serverUrl } from '@/modules/javaServerHelper'
import { IoCloseSharp } from "react-icons/io5";


export default function ModalUser({ setOpenModal }) {

    
    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: '',
        nascimento: '',
        peso: 0,
        altura: 0,
    })

    useState(() => {
        ;(async () => {
            const response = await fetch(
                `${serverUrl}/usuario/${localStorage.getItem('email')}`,
            )
            const user = await response.json()
            console.log(user)
            setUser(user)
        })()
    }
    , [])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed bottom-0 right-0 z-40 h-screen overflow-scroll">
            <div className="relative">
                <div
                    onClick={() => setOpenModal(false)}
                    className="absolute right-2 top-2 cursor-pointer font-extrabold text-black"
                >
                    <IoCloseSharp className='text-3xl'/>
                </div>
                <form action="#" className="formUpdate text-black">
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
                    <input type="hidden" value={user.nascimento} name="nascimento" />
                    <input type="hidden" value={user.email} name="email" />
                    <input type="hidden" value={user.senha} name="senha" />
                    <button>Atualizar</button>
                </form>
            </div>
        </div>
    )
}
