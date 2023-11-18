import { serverUrl } from './javaServerHelper'

export const getAcoes = async (email) => {
    const response = await fetch(`${serverUrl}/acoes/${email}/20`)
    if (response.status === 404) {
        return []
    }
    const data = await response.json()
    return data
}
