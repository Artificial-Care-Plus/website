export async function GET(req) {
    const searchParams = new URL(req.url).searchParams
    const workout_type = searchParams.get('workout_type')
    const time = searchParams.get('time')
    const response = await fetch(
        `http://127.0.0.1:5000/calorias?workout_type=${workout_type}&time=${time}`,
    )
    const data = await response.json()
    return new Response(JSON.stringify(data))
}
