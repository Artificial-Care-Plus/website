'use client'

import Actions from '@/components/Actions'
import History from '@/components/History'
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
        <>
            <div className="flex w-full flex-row flex-wrap justify-center">
                <Tip />
                <Actions />
                <History />
            </div>
        </>
    )
}
