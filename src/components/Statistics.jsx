'use client'

import { getAcoes } from '@/modules/scoreCalculation'
import { useEffect, useState } from 'react'

export default function Statistics() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const acoes = await getAcoes()
            console.log(acoes)
        }
        fetchData()
    }, [])
    return (
        <>
            {data.length === 0 ? (
                <p>Sem dados para mostrar...</p>
            ) : (
                <p>Tem dados para mostrar...</p>
            )}
        </>
    )
}
