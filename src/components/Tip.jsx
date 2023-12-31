'use client'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './User'

export default function Tip() {
    const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

    const [user, setUser] = useContext(UserContext)
    const [tip, setTip] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const score = user.score
                const response = await fetch(`/api/dica/${score}`)
                const data = await response.json()
                setTip(pickRandom(data).texto)
            }
        }
        fetchData()
    }, [user])
    return (
        <div className="flex w-1/3 flex-col items-center justify-center p-4 max-xl:w-full">
            <Image
                alt="Imagem de uma pessoa se exercitando"
                src={'/static/fitness/3.jpg'}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUl5SsBwABYgDK45ai7gAAAABJRU5ErkJggg=="
                width={400}
                height={300}
                className="rounded-lg"
            />
            <h1>Dica: {tip || <span className="animate-pulse">...</span>}</h1>
        </div>
    )
}
