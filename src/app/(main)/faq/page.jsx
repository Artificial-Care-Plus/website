import ItemFaq from "@/components/ItemFaq";

export default function Faq() {
    return (
        <main className="flex flex-col gap-4 p-8">
            <h1 className="text-center text-4xl font-semibold">FAQ</h1>
            <ItemFaq
            sumario={"Como faço para me cadastrar na plataforma?"}
            resposta={"R: Para se cadastrar, basta acessar o site da Artificial Care Plus e seguir o processo de registro."}
            />

            <ItemFaq
            sumario={"Quais tipos de dicas e informações a plataforma oferece para melhorar a saúde?"}
            resposta={"R: A plataforma fornece orientações abrangentes sobre saúde, incluindo dicas de nutrição, exercícios, bem-estar e práticas saudáveis para incorporar no dia a dia."}
            />
            < ItemFaq 
            sumario={"Como posso registrar minhas atividades diárias na plataforma?"}
            resposta={"R: No seu painel de usuário, há uma seção específica para registrar suas atividades diárias. Basta inserir as informações solicitadas para acompanhar seu progresso."}
            />
            < ItemFaq
            sumario={"Como posso visualizar meu progresso na plataforma?"}
            resposta={"R: A plataforma oferece gráficos e estatísticas que permitem aos usuários visualizar seu progresso ao longo do tempo. Isso inclui atividades registradas, metas alcançadas e outras métricas relevantes."}
            />
            < ItemFaq
            sumario={"Como são definidas as metas de atividades físicas na plataforma?"}
            resposta={"R: As metas são personalizadas com base nas informações fornecidas durante o cadastro, levando em consideração o perfil de saúde e os objetivos individuais de cada usuário."}
            />
            < ItemFaq
            sumario={"A plataforma oferece suporte técnico ou atendimento ao cliente?"}
            resposta={"R: Sim, a Artificial Care Plus disponibiliza suporte técnico por meio de canais de comunicação específicos. Os usuários podem entrar em contato para esclarecer dúvidas ou relatar problemas."}
            />
            < ItemFaq
            sumario={"Existe algum custo associado ao uso da plataforma?"}
            resposta={"R: Não, o uso da plataforma é gratuito"}
            />
        </main>
    )
}
