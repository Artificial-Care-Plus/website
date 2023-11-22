import React from 'react'

export default function Info() {
    return (
        <>
            <div class="container mx-auto p-8">
                <h1 class="mb-8 text-4xl font-bold text-cor-principal">
                    Cuide da Sua Saúde!
                </h1>

                <p class="mb-4 text-lg">
                    A saúde é um bem precioso que muitas vezes damos como
                    garantido. No entanto, é fundamental lembrar que cuidar de
                    nossa saúde não só melhora nossa qualidade de vida, mas
                    também previne doenças e promove bem-estar geral.
                </p>

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div class="rounded-lg bg-white p-6 shadow-md">
                        <h2 class="mb-4 text-2xl font-semibold text-cor-principal">
                            Alimentação Balanceada
                        </h2>
                        <p class="text-gray-700 ">
                            Uma alimentação saudável é a base para manter o
                            corpo funcionando de maneira adequada. Priorize
                            alimentos frescos, frutas, vegetais e evite o
                            excesso de alimentos processados.
                        </p>
                    </div>

                    <div class="rounded-lg bg-white p-6 shadow-md">
                        <h2 class="mb-4 text-2xl font-semibold text-cor-principal">
                            Atividade Física Regular
                        </h2>
                        <p class="text-gray-700">
                            O sedentarismo é prejudicial à saúde. Encontre uma
                            atividade física que você goste e a inclua na sua
                            rotina diária. Pode ser caminhada, corrida, yoga ou
                            qualquer outra atividade que mantenha seu corpo em
                            movimento.
                        </p>
                    </div>

                    <div class="rounded-lg bg-white p-6 shadow-md">
                        <h2 class="mb-4 text-2xl font-semibold text-cor-principal">
                            Mentalidade Positiva
                        </h2>
                        <p class="text-gray-700">
                            A saúde mental é tão importante quanto a saúde
                            física. Cuide da sua mente praticando a gratidão,
                            meditação e buscando apoio quando necessário. Manter
                            uma mentalidade positiva contribui para o equilíbrio
                            emocional.
                        </p>
                    </div>

                    <div class="rounded-lg bg-white p-6 shadow-md">
                        <h2 class="mb-4 text-2xl font-semibold text-cor-principal">
                            Check-ups Regulares
                        </h2>
                        <p class="text-gray-700">
                            Faça exames médicos regularmente, mesmo que esteja
                            se sentindo bem. A prevenção é a chave para detectar
                            problemas de saúde em estágios iniciais, aumentando
                            as chances de tratamento eficaz.
                        </p>
                    </div>
                </div>

                <p class="mt-8 text-lg text-black">
                    Lembre-se, pequenas mudanças podem fazer uma grande
                    diferença na sua saúde. Invista em hábitos saudáveis hoje
                    para colher os benefícios amanhã!
                </p>
            </div>
        </>
    )
}
