import { listaDeRecomendacoes } from './informacoes/listaDeRecomendacoes.js';

const recomendacoesElement = document.getElementById('recomendacoes');

function gerarElementos() {
    listaDeRecomendacoes.forEach((recomendacao) => {
        let pTagElement = document.createElement('p');

        pTagElement.innerText = recomendacao;

        recomendacoesElement.appendChild(pTagElement);
    });
}

gerarElementos();
