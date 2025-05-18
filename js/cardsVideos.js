const cards = [
    {
        'Thumbnail': './assets/thumbnails/thumbnail.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail1.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail1.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail1.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    },
    {
        'Thumbnail': './assets/thumbnails/thumbnail1.png',
        'TempoDeVideo': '00:00',
        'IconeCanal': './assets/logos/logo1.png',
        'Titulo': 'Tem um titulo aqui',
        'NomeCanal': 'Tem um nome aqui',
        'Vizualizações': 'Tem muitas vizualizações aqui',
        'TempoDePublicação': '3 Meses',
    }
];

const videoCards = document.getElementById('video-cards');

function gerarElementos() {
    cards.map((video) => {
        // Cria uma div que vai receber todas as informações do video
        let divFather = document.createElement('div');

        // Cria uma div que vai receber as informações de tempo e a thumbnail do video
        let divThumbTempo = document.createElement('div');
        let imgThumb = document.createElement('img');
        let pTempo = document.createElement('p');

        // Cria uma div que vai receber as informaçõe complementares do video como Icone do canal, Titulo, Nome do Canal, Visualizações e Tempo de Publicação
        let divInfos = document.createElement('div');
        let imgIcone = document.createElement('img');

        let divComplementoInfo = document.createElement('div');
        let pTitulo = document.createElement('p');

        let divOutrasInfos = document.createElement('div');
        let pNomeCanal = document.createElement('p');

        let divTempoVisualizacao = document.createElement('div');
        let pVisualizacao = document.createElement('p');
        let pTempoPublicado = document.createElement('p');
        let pEspacamento = document.createElement('p');

        // Coloca as informações da variavel cards dentro de Thumb e Tempo de Video / Também cria classes para serem usadas no css
        imgThumb.src = video.Thumbnail;
        imgThumb.classList.add('card-thumbnail');
        pTempo.innerText = video.TempoDeVideo;
        pTempo.classList.add('card-tempo-video');

        // Coloca as informações da variavel cards dentro de Icone, Titulo, Nome do canal, Visualizações e Tempo de Publicação / Também cria classes para serem usadas no css
        imgIcone.src = video.IconeCanal;
        imgIcone.classList.add('card-icone');
        pTitulo.innerText = video.Titulo;
        pTitulo.classList.add('card-titulo');
        pNomeCanal.innerText = video.NomeCanal;
        // pNomeCanal.classList.add('card-nome-canal');
        pVisualizacao.innerText = video.Vizualizações;
        pVisualizacao.classList.add('card-visualizacao');
        pTempoPublicado.innerText = video.TempoDePublicação;
        // pTempoPublicado.classList.add('card-tempo-publicacao');
        pEspacamento.innerText = '•';

        divThumbTempo.appendChild(imgThumb);
        divThumbTempo.appendChild(pTempo);
        divThumbTempo.classList.add('container-thumbnail');

        divOutrasInfos.appendChild(pNomeCanal);
        divOutrasInfos.appendChild(divTempoVisualizacao);
        divOutrasInfos.classList.add('card-outras-informacoes');

        divTempoVisualizacao.appendChild(pVisualizacao);
        divTempoVisualizacao.appendChild(pEspacamento);
        divTempoVisualizacao.appendChild(pTempoPublicado);
        divTempoVisualizacao.classList.add('card-tempo-visualizacao');

        divComplementoInfo.appendChild(divOutrasInfos);
        divComplementoInfo.appendChild(pTitulo);
        divComplementoInfo.classList.add('card-informacoes');

        divInfos.appendChild(imgIcone);
        divInfos.appendChild(divComplementoInfo);
        divInfos.classList.add('card-resumo');

        divFather.appendChild(divThumbTempo);
        divFather.appendChild(divInfos);
        divFather.classList.add('cards-container');
        videoCards.appendChild(divFather);
    });
}

gerarElementos();
