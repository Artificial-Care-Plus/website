'use client'

import StatusMsg from '@/components/StatusMsg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
export default function Login() {
    const email = useRef(null)
    const button = useRef(null)
    const token = useRef(null)
    let manterLogado = false
    const [status, setStatus] = useState(null)
    const router = useRouter()
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            router.push('/')
        } else if (
            localStorage.getItem('email') &&
            localStorage.getItem('token')
        ) {
            email.current.value = localStorage.getItem('email')
            token.current.value = localStorage.getItem('token')
            button.current.click()
        }
    }, [router])
    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const responseData = await response.json()
        if (responseData.sucesso) {
            sessionStorage.setItem('token', responseData.resposta)
            localStorage.setItem('email', data.email)
            if (manterLogado) {
                localStorage.setItem('token', responseData.resposta)
            }
            router.push('/')
        } else {
            setStatus(responseData)
            setTimeout(() => {
                setStatus(null)
            }, 3000)
        }
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
                    className="flex flex-col gap-4 rounded-sm border border-black p-2"
                    onSubmit={onSubmit}
                >
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input
                            type="email"
                            className="border border-black"
                            name="email"
                            id="email"
                            ref={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha: </label>
                        <input
                            type="password"
                            name="senha"
                            className="border border-black"
                            id="senha"
                        />
                    </div>
                    <div className="flex justify-around">
                        <label
                            htmlFor="manter-logado"
                            className="flex justify-around"
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
                    <input type="hidden" name="token" ref={token} />
                    <button
                        ref={button}
                        className="rounded-lg border border-black p-1"
                    >
                        Entrar
                    </button>
                </form>
                <p>
                    Ainda não tem cadastro?{' '}
                    <Link
                        className="text-blue-600 transition-all duration-300 hover:text-blue-800 hover:underline"
                        href={'/cadastro'}
                    >
                        Crie sua conta
                    </Link>
                </p>
            </main>
        </>
    )
}
