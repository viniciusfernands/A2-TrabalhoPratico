const listaDeRecomendacoes = [
    "Todos",
    "Filmes",
    "Séries",
    "Desenhos",
    "Desenvolvimento Web",
    "Sistema de Informação",
    "Videos curtos",
    "Ao Vivo",
    "Filmes",
    "Séries",
    "Desenhos",
    "Desenvolvimento Web",
    "Sistema de Informação",
    "Videos curtos",
    "Ao Vivo",
];

const recomendacoesElement = document.getElementById('recomendacoes');

function gerarElementos() {
    listaDeRecomendacoes.map((recomendacao) => {
        let pTagElement = document.createElement('p');

        pTagElement.innerText = recomendacao;

        recomendacoesElement.appendChild(pTagElement);
    });
}

gerarElementos();
