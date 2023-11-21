'use client'

import Actions from '@/components/Actions'
import Tip from '@/components/Tip'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Nav from '@/components/Nav'

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            router.push('/login')
        }
    })
    return (
        <>
        <div className="flex flex-row flex-wrap">
            <Actions />
            <Tip />
            <div className="w-full border-4 border-blue-700">
                <h1>Gráfico</h1>
            </div>  
        </div>   
        </>
    )
}
