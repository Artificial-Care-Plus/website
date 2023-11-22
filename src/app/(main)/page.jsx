'use client'

import Actions from '@/components/Actions'
import Statistics from '@/components/Statistics'
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
            <div className="flex h-full w-full flex-row flex-wrap">
                <Actions />
                <Tip />
                <Statistics />
            </div>
        </>
    )
}
