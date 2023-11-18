import { serverUrl } from '@/scripts/helper'
import { createUserToken } from '@/scripts/userValidation'
import { NextRequest } from 'next/server'

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
    const url = `${serverUrl}/usuario`
    const body = await req.json()
    delete body['manter-logado']
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
            data['resposta'] = await createUserToken(body.email)
        }
        return new Response(JSON.stringify(data), { status: response.status })
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
