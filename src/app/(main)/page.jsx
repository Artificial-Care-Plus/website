'use client'

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
        <>
            <h1 className="text-2xl">Hello World</h1>
        </>
    )
}
