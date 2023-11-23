import { serverUrl } from '@/modules/javaServerHelper'

export async function GET(req, { params }) {
    const url = `${serverUrl}/dicas`
    try {
        const response = await fetch(url)
        let data = await response.json()
        if (response.status === 200) {
            console.log(params)
            if (params.score < 500) {
                data = data.filter((dica) => dica.categoria === 'Ruim')
            } else if (params.score < 1000) {
                data = data.filter((dica) => dica.categoria === 'Neutro')
            } else {
                data = data.filter((dica) => dica.categoria === 'Bom')
            }
            return new Response(JSON.stringify(data), {
                status: response.status,
            })
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
