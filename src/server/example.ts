const exampleData =
{
    firstRow: [
        {
            id: "1",
            imgSrc: "src/assets/images/obs.png",
            text: "O Observatório tem como principal objetivo o mapeamento das áreas de pesquisa, perfis de professores e elaboração de indicadores de pesquisa. O Observatório faz parte do Grupo de Pesquisa em Mineração da Dados e Imagens (MiDI) do IFTM Campus Avançado Uberaba Parque Tecnológico. As estatísticas são realizadas usando o currículo Lattes dos professores permanentes da instituição. Para maiores informações, c",
            title: "Observatório",
            size: "all",
            heigth: "h-auto"
        },
        {
            id: "2",
            imgSrc: "src/assets/images/IFTM.png",
            text: "O Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM) é composto, atualmente, pelos Campus Campina Verde, Ibiá, Ituiutaba, Paracatu, Patos de Minas, Patrocínio, Uberaba, Uberaba Parque Tecnológico, Uberlândia e Uberlândia Centro e pela Reitoria. A missão do IFTM é ofertar a Educação Profissional e Tecnológica por meio do Ensino, Pesquisa e Extensão. Para maiores informações, acesse iftm.edu.br.",
            title: "IFTM",
            size: "all",
            heigth: "h-auto"
        },
    ],
    bottomRows: [
        {
            id: "3",
            text: "Os indicadores são ferramentas de gestão que quantificam o desempenho dos docentes do IFTM, sendo essenciais para o seu aprimoramento. A lista de docentes é extraída do Portal da Transparência do Governo Federal anualmente. Os dados utilizados para a elaboração dos indicadores são extraídos da Plataforma Lattes mensalmente. Para saber mais sobre cada indicador, basta clicar no ícone (ao lado do título do indicador)",
            title: "Atualização dos Dados",
            size: "all",
            heigth: "h-auto"
        },
        {
            id: "4",
            text: "Você pode entrar em contato com a equipe de desenvolvimento do Observatório IFTM para relatar problemas, deixar sugestões ou comentários. Basta enviar um email para o líder do projeto. Para ler as principais dúvidas que surgem sobre esta ferramenta e conferir as respostas de cada pergunta, clique aqui.",
            title: "Entre em Contato",
            size: "all",
            heigth: "h-auto"
        }
    ]
}

export const exampleAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(exampleData);
        }, 1000);
    });
}