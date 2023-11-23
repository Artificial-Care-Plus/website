import { serverUrl } from '@/modules/javaServerHelper'

export async function GET(req) {
    const searchParams = new URL(req.url).searchParams
    const email = searchParams.get('email')
    const response = await fetch(`${serverUrl}/acoes/${email}/20`)
    if (response.status === 404) {
        return new Response(
            JSON.stringify({
                sucesso: false,
                acoes: [],
            }),
        )
    }
    const actions = await response.json()
    return new Response(JSON.stringify(actions))
}
export async function POST(req) {
    const body = await req.json()
    console.log(body)
    const response = await fetch(`${serverUrl}/acoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    if (response.status === 404) {
        return new Response(
            JSON.stringify({
                sucesso: false,
                resposta: 'Usuário não encontrado',
            }),
        )
    }
    const data = await response.json()
    return new Response(JSON.stringify(data), { status: response.status })
}
