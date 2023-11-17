import { serverUrl } from '@/components/helper'
import { createUserToken, revalidateUser } from '@/components/userValidation'
import { NextRequest } from 'next/server'

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
    const url = `${serverUrl}/login`
    const body = await req.json()
    if (body.token && body.email) {
        const newToken = revalidateUser(body.email)
        if (newToken) {
            return new Response(
                JSON.stringify({
                    sucesso: true,
                    resposta: newToken,
                }),
                { status: 200 },
            )
        }
        return new Response(
            JSON.stringify({
                sucesso: false,
                resposta: 'Faça login novamente',
            }),
            { status: 401 },
        )
    }
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
        return new Response(JSON.stringify(data), { status: response.status })
    } catch (e) {
        return new Response(
            JSON.stringify({
                sucesso: false,
                resposta: 'Servidor não respondeu',
                token: null,
            }),
            { status: 500 },
        )
    }
}
