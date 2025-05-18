import { listaDeRecomendacoes } from './informacoes/listaDeRecomendacoes.js';

const recomendacoesElement = document.getElementById('recomendacoes');

function gerarElementos() {
    listaDeRecomendacoes.map((recomendacao) => {
        let pTagElement = document.createElement('p');

        pTagElement.innerText = recomendacao;

        recomendacoesElement.appendChild(pTagElement);
    });
}

gerarElementos();
