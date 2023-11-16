export default function AlertMsg({ resposta, sucesso }) {
    return (
        <>
            <div
                className={`${
                    sucesso ? 'bg-green-700' : 'bg-red-700'
                } mx-16 mt-4 rounded-sm border border-black p-2 text-white`}
            >
                <p>
                    {sucesso ? '' : 'Erro:'} {resposta}
                </p>
            </div>
        </>
    )
}
