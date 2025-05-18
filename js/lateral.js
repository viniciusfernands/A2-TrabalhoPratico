import { menuLateral } from './informacoes/menuLateral.js';

const menuLateralElement = document.getElementById('menu-lateral');

function gerarElementos() {
    menuLateral.map((menu) => {
        let divFather = document.createElement('div');
        let divTagElement = document.createElement('div');
        let pTagElement = document.createElement('p');

        divTagElement.innerHTML = menu.Icone;
        divTagElement.classList.add('icone-lateral');
        pTagElement.innerText = menu.Nome;
        pTagElement.classList.add('texto-lateral')

        divFather.appendChild(divTagElement);
        divFather.appendChild(pTagElement);
        divFather.classList.add('container-lateral')

        menuLateralElement.appendChild(divFather);
    });
}

gerarElementos();
