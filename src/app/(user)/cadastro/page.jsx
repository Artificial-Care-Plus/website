'use client'

import StatusMsg from '@/components/StatusMsg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import logo from '/public/static/logo.svg'
export default function Cadastro() {
    const [status, setStatus] = useState(null)
    const router = useRouter()
    let manterLogado = false
    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        if (data.senha !== data['confirm-senha']) {
            setStatus({
                sucesso: false,
                resposta: 'As senhas não coincidem',
            })
            setTimeout(() => {
                setStatus(null)
            }, 3000)
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
        if (!responseData.sucesso) {
            setTimeout(() => {
                setStatus(null)
            }, 3000)
            return
        } else {
            sessionStorage.setItem('token', responseData.resposta)
            localStorage.setItem('email', data.email)
            if (manterLogado) {
                localStorage.setItem('token', responseData.resposta)
            }
            router.push('/login')
        }
    }
    return (
        <>
            <header className="flex relative justify-center items-center h-16 w-full bg-cor-principal text-white">
                <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className='absolute top-1 left-1 max-lg:relative max-lg:top-0 max-lg:left-0'
                />
                <h1 className="text-4xl font-bold italic max-lg:hidden">Faça seu cadastro e cuide da sua saúde!</h1>
            </header>
            {status && (
                <StatusMsg
                    resposta={status.resposta}
                    sucesso={status.sucesso}
                />
            )}
            <main className="flex h-full w-full flex-col items-center justify-center gap-4 p-12 max-lg:p-0 max-lg:pb-8 max-lg:pt-8">
                <form
                    action="#"
                    onSubmit={onSubmit}
                    className="formCadastro"
                >
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="nome">Nome: </label>
                        <input
                            required
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="email">E-mail: </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="senha">Senha: </label>
                        <input
                            required
                            type="password"
                            name="senha"
                            id="senha"
                            minLength={8}
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div className="flex flex-col justify-around">
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
                        />
                    </div>
                    <div className={'flex flex-col justify-around'}>
                        <label htmlFor="nascimento">Nascimento: </label>
                        <input
                            required
                            type="date"
                            name="nascimento"
                            id="nascimento"
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
                            max={3}
                            min={0.5}
                            step="any"
                        />
                    </div>
                    <div className="flex justify-around">
                        <label
                            htmlFor="manter-logado"
                            className='flex items-center gap-2'
                        >
                            Deseja continuar conectado
                            <input
                                type="checkbox"
                                name="manter-logado"
                                id="manter-logado"
                                onChange={(e) =>
                                    (manterLogado = e.target.checked)
                                }
                                className="border border-black"
                            />
                        </label>
                    </div>
                    <button>
                        Cadastrar
                    </button>
                </form>
                <p>
                    Já tem uma conta?{' '}
                    <Link
                        className="text-blue-600 transition-all duration-300 hover:text-blue-800 hover:underline"
                        href={'/login'}
                    >
                        Entre
                    </Link>
                </p>
            </main>
        </>
    )
}
