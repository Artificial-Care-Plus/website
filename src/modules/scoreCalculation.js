import { serverUrl } from './javaServerHelper'

export const getAcoes = async (email) => {
    if (!email) {
        return []
    }
    const response = await fetch(`${serverUrl}/acoes/${email}/20`)
    if (response.status === 404) {
        return []
    }
    const data = await response.json()
    return data
}
export const mapAcoesLabel = (label) => {
    const optionMap = {
        'Treino livre': 1,
        'Bicicleta Ergométrica': 2,
        Caminhada: 3,
        Surfar: 4,
        Ciclismo: 5,
        'Corrida ao ar livre': 6,
        'Corrida de Trilha': 7,
        Natação: 8,
        Trilha: 9,
        Esteira: 10,
        Cricket: 11,
    }
    return optionMap[label] || 1
}
