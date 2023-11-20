export default function Faq() {
    return (
        <main className="flex flex-col gap-4 p-8">
            <h1 className="text-center text-4xl font-semibold">FAQ</h1>
            <details>
                <summary className="text-xl">
                    Como faço para me cadastrar na plataforma?
                </summary>
                <p>
                    R: Para se cadastrar, basta acessar o site da Artificial
                    Care Plus e seguir o processo de registro,
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    Quais tipos de dicas e informações a plataforma oferece para
                    melhorar a saúde?
                </summary>
                <p>
                    R: A plataforma fornece orientações abrangentes sobre saúde,
                    incluindo dicas de nutrição, exercícios, bem-estar e
                    práticas saudáveis para incorporar no dia a dia.
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    Como posso registrar minhas atividades diárias na
                    plataforma?
                </summary>
                <p>
                    R: No seu painel de usuário, há uma seção específica para
                    registrar suas atividades diárias. Basta inserir as
                    informações solicitadas para acompanhar seu progresso.
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    Qual é o propósito do sistema de pontuação na plataforma?
                </summary>
                <p>
                    R: O sistema de pontuação visa incentivar a prática de
                    atividades físicas. Ao realizar exercícios e alcançar metas
                    saudáveis, os usuários acumulam pontos, proporcionando uma
                    experiência mais envolvente e motivadora.
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    Como funciona o acompanhamento de progresso na plataforma?
                </summary>
                <p>
                    R: A plataforma oferece gráficos e estatísticas que permitem
                    aos usuários visualizar seu progresso ao longo do tempo.
                    Isso inclui atividades registradas, metas alcançadas e
                    outras métricas relevantes.
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    Como são definidas as metas de atividades físicas na
                    plataforma?
                </summary>
                <p>
                    R: As metas são personalizadas com base nas informações
                    fornecidas durante o cadastro, levando em consideração o
                    perfil de saúde e os objetivos individuais de cada usuário.
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    A plataforma oferece suporte técnico ou atendimento ao
                    cliente?
                </summary>
                <p>
                    R: Sim, a Artificial Care Plus disponibiliza suporte técnico
                    por meio de canais de comunicação específicos. Os usuários
                    podem entrar em contato para esclarecer dúvidas ou relatar
                    problemas.
                </p>
            </details>
            <details>
                <summary className="text-xl">
                    Existe algum custo associado ao uso da plataforma?
                </summary>
                <p>R: Não, o uso da plataforma é gratuito</p>
            </details>
        </main>
    )
}
