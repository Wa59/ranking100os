// Valor, Estadão

var clippingsRanking = [
    {
      name : 'BMG e Natura são empresas que mais fecham contrato com startups',
      auth : 'Folha de SP',
      logo : 'assets/img/logos-noticias/folha-sp.png',
      href : 'https://www1.folha.uol.com.br/colunas/painelsa/2019/07/bmg-e-natura-sao-empresas-que-mais-fecham-contrato-com-startups.shtml',
    },
    {
      name : 'Pesquisa mostra startups recordistas de investimento no Brasil',
      auth : 'CBN',
      logo : 'assets/img/logos-noticias/cbn.png',
      href : 'https://cbn.globoradio.globo.com/media/audio/268577/pesquisa-mostra-startups-recordistas-de-investimen.htm',
    },
    {
      name : 'As 100 startups brasileiras mais desejadas pelas empresas   ',
      auth : 'Exame',
      logo : 'assets/img/logos-noticias/exame.png',
      href : 'https://exame.abril.com.br/pme/as-100-startups-brasileiras-mais-desejadas-pelas-empresas/',
    },
    {
      name : 'Inovativa Brasil estende prazo de inscrição para a sua próxima edição',
      auth : 'Pequenas Empresas e Grandes Negócios',
      logo : 'assets/img/logos-noticias/pegn.png',
      href : 'https://revistapegn.globo.com/Startups/noticia/2019/07/inovativa-brasil-estende-prazo-de-inscricao-para-sua-proxima-edicao.html',
    },
    {
      name : 'BMG, Natura e Accenture são as empresas que mais investem em startups',
      auth : 'Meio&Mensagem',
      logo : 'assets/img/logos-noticias/meioemensagem.png',
      href : 'https://www.meioemensagem.com.br/home/marketing/2019/07/25/bmg-natura-e-accenture-sao-as-empresas-que-mais-investem-em-startups.html',
    },
    {
      name : 'BMG foi a empresa que mais se relacionou com startups',
      auth : 'Terra',
      logo : 'assets/img/logos-noticias/terra.png',
      href : 'https://www.terra.com.br/noticias/dino/bmg-foi-a-empresa-que-mais-se-relacionou-com-startups,1c4c609bd9a02089e032985874cc641fo39sfprb.html',
    },
    {
      name : 'Plataforma brasileira de comercialização de resíduos fica entre 10 empresas mais inovadoras no ranking 100 Open Startups 2019',
      auth : 'Info Money',
      logo : 'assets/img/logos-noticias/infomoney.png',
      href : 'https://www.infomoney.com.br/negocios/noticias-corporativas/noticia/8562681/plataforma-brasileira-de-comercializacao-de-residuos-fica-entre-10-empresas-mais-inovadoras-no-ranking-100-open-startups-2019-',
    },
    {
      name : 'Região Sul e interior despontam como polo das melhores startups do país',
      auth : 'Uol Tech',
      logo : 'assets/img/logos-noticias/uol.png',
      href : 'https://noticias.uol.com.br/tecnologia/noticias/redacao/2019/07/18/regiao-sul-e-interior-despontam-como-polo-das-melhores-startups-do-pais.htm',
    },
    {
      name : '“Termômetro da inovação”, ranking 100 Open Startups celebra premiados de sua edição 2019',
      auth : 'Valor Investe',
      logo : 'assets/img/logos-noticias/valorinveste.png',
      href : 'https://valorinveste.globo.com/objetivo/empreenda-se/noticia/2019/07/23/termometro-da-inovacao-ranking-100-open-startups-celebra-premiados-de-sua-edicao-2019.ghtml',
    },
    {
        name : 'Plataforma aponta que quase metade da indústria brasileira não identifica tecnologias para melhorar competitividade',
        auth : 'DCI',
        logo : 'assets/img/logos-noticias/dci.png',
        href : 'https://www.dci.com.br/empreendedorismo/plataforma-aponta-que-quase-metade-da-industria-brasileira-n-o-identifica-tecnologias-para-melhorar-competitividade-1.817319',
    },
];
$(document).ready(function($) {

    var items = '';

    clippingsRanking.forEach(function(item, index){
        items+= '<li class="s-n-list-item mt-4 col-12 col-sm-6 col-md-3 text-center">';
        items+= '<a class="s-n-list-link mx-auto" href="' + item.href + '" title="' + item.name + '" target="_blank">';
            items+= '<img class="img-fluid mt-4" src="' + item.logo + '" alt="' + item.auth + '" />';
        items+= '</a></li>';
    });
    $('#s-n-list').append(items);

}); // document.ready
