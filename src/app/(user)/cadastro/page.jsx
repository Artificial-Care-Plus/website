'use client'

import StatusMsg from '@/components/StatusMsg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function Cadastro() {
    const [status, setStatus] = useState(null)
    const router = useRouter()
    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        if (data.senha !== data['confirm-senha']) {
            setStatus({
                sucesso: false,
                resposta: 'As senhas não coincidem',
            })
            return
        }
        data.peso = parseFloat(data.peso)
        data.altura = parseFloat(data.altura)
        const response = await fetch('/api/cadastro', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const responseData = await response.json()
        setStatus(responseData)
        setTimeout(() => {
            if (responseData.sucesso) {
                localStorage.setItem('credenciais', JSON.stringify(data))
                router.push('/login')
            } else {
                setStatus(null)
            }
        }, 3000)
    }
    return (
        <>
            {status && (
                <StatusMsg
                    resposta={status.resposta}
                    sucesso={status.sucesso}
                />
            )}
            <main className="flex h-full w-full flex-col items-center justify-center gap-4 p-12">
                <form
                    action="#"
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4 rounded-sm border border-black p-4"
                >
                    <div className={'flex justify-around'}>
                        <label htmlFor="nome">Nome: </label>
                        <input
                            required
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Digite seu nome"
                            className="border border-black"
                        />
                    </div>
                    <div className={'flex justify-around'}>
                        <label htmlFor="email">E-mail: </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            className="border border-black"
                        />
                    </div>
                    <div className={'flex justify-around'}>
                        <label htmlFor="senha">Senha: </label>
                        <input
                            required
                            type="password"
                            name="senha"
                            id="senha"
                            minLength={8}
                            placeholder="Digite sua senha"
                            className="border border-black"
                        />
                    </div>
                    <div className="flex justify-around">
                        <label htmlFor="confirm-senha">
                            Confirme sua senha:{' '}
                        </label>
                        <input
                            required
                            type="password"
                            name="confirm-senha"
                            id="confirm-senha"
                            minLength={8}
                            placeholder="Confirme sua senha"
                            className="border border-black"
                        />
                    </div>
                    <div className={'flex justify-around'}>
                        <label htmlFor="nascimento">Nascimento: </label>
                        <input
                            required
                            type="date"
                            name="nascimento"
                            id="nascimento"
                            className="w-2/3 border border-black"
                        />
                    </div>
                    <div className={'flex justify-around'}>
                        <label htmlFor="peso">Peso(kg): </label>
                        <input
                            required
                            type="number"
                            name="peso"
                            step="any"
                            id="peso"
                            max={400}
                            className="border border-black"
                        />
                    </div>
                    <div className={'flex justify-around'}>
                        <label htmlFor="altura">Altura(m): </label>
                        <input
                            required
                            type="number"
                            name="altura"
                            id="altura"
                            max={3}
                            step="any"
                            className="border border-black"
                        />
                    </div>
                    <button className="rounded-lg border border-black p-1">
                        Cadastrar
                    </button>
                </form>
                <p>
                    Já tem uma conta?{' '}
                    <Link
                        className="text-blue-600 transition-all duration-300 hover:text-lg hover:text-blue-800"
                        href={'/login'}
                    >
                        Entre
                    </Link>
                </p>
            </main>
        </>
    )
}
