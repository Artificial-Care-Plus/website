'use client'
export default function Actions() {
    let value = 0
    return (
        <div className="w-2/3 border-4 border-green-600 p-4">
            <h1 className="text-center text-2xl">
                Quais Atividades Você praticou hoje?
            </h1>
            <div className="flex flex-col items-center gap-2">
                <select
                    className="w-1/2 rounded-lg border border-black p-1"
                    onChange={(e) => {
                        value = e.target.value
                    }}
                >
                    <option value="0" disabled>
                        Selecione
                    </option>
                    <option value="20">Caminhada</option>
                    <option value="30">Corrida</option>
                    <option value="60">Ciclismo</option>
                    <option value="60">Natação</option>
                    <option value="60">Musculação</option>
                    <option value="20">Yoga</option>
                    <option value="15">Alongamento</option>
                    <option value="30">Dança</option>
                </select>

                <button className="rounded-sm border border-black p-2">
                    Adicionar
                </button>
            </div>
        </div>
    )
}
