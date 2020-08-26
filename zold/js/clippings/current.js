// Valor, Estadão

var clippingsRanking = [
    {
      name : 'BMG e Natura são empresas que mais fecham contrato com startups',
      desc : 'Folha de SP',
      logo : 'assets/img/logos-noticias/folha-sp.png',
      href : 'https://www1.folha.uol.com.br/colunas/painelsa/2019/07/bmg-e-natura-sao-empresas-que-mais-fecham-contrato-com-startups.shtml',
    },
    {
      name : 'Pesquisa mostra startups recordistas de investimento no Brasil',
      desc : 'CBN',
      logo : 'assets/img/logos-noticias/cbn.png',
      href : 'https://cbn.globoradio.globo.com/media/audio/268577/pesquisa-mostra-startups-recordistas-de-investimen.htm',
    },
    {
      name : 'As 100 startups brasileiras mais desejadas pelas empresas   ',
      desc : 'Exame',
      logo : 'assets/img/logos-noticias/exame.png',
      href : 'https://exame.abril.com.br/pme/as-100-startups-brasileiras-mais-desejadas-pelas-empresas/',
    },
    {
      name : 'Inovativa Brasil estende prazo de inscrição para a sua próxima edição',
      desc : 'Pequenas Empresas e Grandes Negócios',
      logo : 'assets/img/logos-noticias/pegn.png',
      href : 'https://revistapegn.globo.com/Startups/noticia/2019/07/inovativa-brasil-estende-prazo-de-inscricao-para-sua-proxima-edicao.html',
    },
    {
      name : 'BMG, Natura e Accenture são as empresas que mais investem em startups',
      desc : 'Meio&Mensagem',
      logo : 'assets/img/logos-noticias/meioemensagem.png',
      href : 'https://www.meioemensagem.com.br/home/marketing/2019/07/25/bmg-natura-e-accenture-sao-as-empresas-que-mais-investem-em-startups.html',
    },
    {
      name : 'BMG foi a empresa que mais se relacionou com startups',
      desc : 'Terra',
      logo : 'assets/img/logos-noticias/terra.png',
      href : 'https://www.terra.com.br/noticias/dino/bmg-foi-a-empresa-que-mais-se-relacionou-com-startups,1c4c609bd9a02089e032985874cc641fo39sfprb.html',
    },
    {
      name : 'Plataforma brasileira de comercialização de resíduos fica entre 10 empresas mais inovadoras no ranking 100 Open Startups 2019',
      desc : 'Info Money',
      logo : 'assets/img/logos-noticias/infomoney.png',
      href : 'https://www.infomoney.com.br/negocios/noticias-corporativas/noticia/8562681/plataforma-brasileira-de-comercializacao-de-residuos-fica-entre-10-empresas-mais-inovadoras-no-ranking-100-open-startups-2019-',
    },
    {
      name : 'Região Sul e interior despontam como polo das melhores startups do país',
      desc : 'Uol Tech',
      logo : 'assets/img/logos-noticias/uol.png',
      href : 'https://noticias.uol.com.br/tecnologia/noticias/redacao/2019/07/18/regiao-sul-e-interior-despontam-como-polo-das-melhores-startups-do-pais.htm',
    },
    {
      name : '“Termômetro da inovação”, ranking 100 Open Startups celebra premiados de sua edição 2019',
      desc : 'Valor Investe',
      logo : 'assets/img/logos-noticias/valorinveste.png',
      href : 'https://valorinveste.globo.com/objetivo/empreenda-se/noticia/2019/07/23/termometro-da-inovacao-ranking-100-open-startups-celebra-premiados-de-sua-edicao-2019.ghtml',
    },
    {
        name : 'Plataforma aponta que quase metade da indústria brasileira não identifica tecnologias para melhorar competitividade',
        desc : 'DCI',
        logo : 'assets/img/logos-noticias/dci.png',
        href : 'https://www.dci.com.br/empreendedorismo/plataforma-aponta-que-quase-metade-da-industria-brasileira-n-o-identifica-tecnologias-para-melhorar-competitividade-1.817319',
    },
];

$(document).ready(function($) {

    function load(baseHtml) {
        console.log(baseHtml);
        var html = '';
        clippingsRanking.forEach(function(item, index){
            var temp = baseHtml;
            temp = temp.replace(/##ITEM_DESC##/i, item.desc);
            temp = temp.replace(/##ITEM_HREF##/i, item.href);
            temp = temp.replace(/##ITEM_LOGO##/i, item.logo);
            temp = temp.replace(/##ITEM_NAME##/i, item.name);
            html+= temp;
        });
        $('#s-n-list').html(html);
    }
    $.get('assets/templates/clippings/s-n-list-item.html', load, 'html');

}); // document.ready
