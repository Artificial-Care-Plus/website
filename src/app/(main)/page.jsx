'use client'

import Tip from '@/components/Tip'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            router.push('/login')
        }
    })
    return (
        <div className="flex flex-row flex-wrap">
            <div className="w-2/3 border-4 border-green-600">
                <h1 className="text-2xl">Hello World</h1>
            </div>
            <Tip />
            <div className="w-full border-4 border-blue-700">
                <h1>Gráfico</h1>
            </div>
        </div>
    )
}
