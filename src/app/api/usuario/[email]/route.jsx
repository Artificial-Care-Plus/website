import { serverUrl } from '@/modules/javaServerHelper'

export async function PUT(req,{params}) {
    const url = `${serverUrl}/usuario/${params.email}`
    const body = await req.json()
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()
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

export async function GET(req,{params}) {
    const url = `${serverUrl}/usuario/${params.email}`
    try {
        const response = await fetch(url)
        const data = await response.json()
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