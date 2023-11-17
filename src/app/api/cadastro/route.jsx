import { serverUrl } from '@/components/helper'
import { createUserToken } from '@/components/userValidation'
import { NextRequest } from 'next/server'

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
    const url = `${serverUrl}/usuario`
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
        const data = await response.json()
        if (data.sucesso) {
            data['resposta'] = createUserToken(body.email)
        }
        return new Response(data, { status: response.status })
    } catch (e) {
        return new Response(
            JSON.stringify({
                sucesso: false,
                resposta: 'Servidor não respondeu',
            }),
            { status: 500 },
        )
    }
}
