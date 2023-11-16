'use client'

import StatusMsg from '@/components/StatusMsg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
export default function Login() {
    const email = useRef(null)
    const senha = useRef(null)
    const button = useRef(null)
    const [status, setStatus] = useState(null)
    const router = useRouter()
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            router.push('/')
        } else if (localStorage.getItem('credenciais')) {
            const credenciais = JSON.parse(localStorage.getItem('credenciais'))
            console.log(credenciais)
            email.current.value = credenciais.email
            senha.current.value = credenciais.senha
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
            localStorage.setItem('credenciais', JSON.stringify(data))
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
                            ref={senha}
                        />
                    </div>
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
                        className="text-blue-600 transition-all duration-300 hover:text-lg hover:text-blue-800"
                        href={'/cadastro'}
                    >
                        Crie sua conta
                    </Link>
                </p>
            </main>
        </>
    )
}
