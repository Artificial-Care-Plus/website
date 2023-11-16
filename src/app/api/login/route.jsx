import { serverUrl } from '@/components/helper'
import { NextRequest } from 'next/server'

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
    const url = `${serverUrl}/login`
    const body = await req.json()
    console.log(url, body)
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const data = await response.text()
        return new Response(data, { status: response.status })
    } catch (e) {
        return new Response(
            {
                sucesso: false,
                resposta: 'Servidor não respondeu',
            },
            { status: 500 },
        )
    }
}
