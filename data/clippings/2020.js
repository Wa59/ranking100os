var clippings = [
    {
        "auth": "Exame",
        "href": "https://exame.com/pme/veja-as-20-empresas-mais-proximas-das-startups-brasileiras/",
        "date": "26/08/2020",
    },
    {
        "auth": "Forbes",
        "href": "https://forbes.com.br/forbes-insider/2020/08/conheca-as-empresas-que-mais-praticam-inovacao-aberta-no-brasil/",
        "date": "25/08/2020",
    },
    {
        "auth": "Estado de São Paulo",
        "href": "https://economia.estadao.com.br/noticias/geralvelha-economia-se-aproxima-de-startups70003410328",
        "date": "25/08/2020",
    },
    {
        "auth": "Veja",
        "href": "https://veja.abril.com.br/blog/radar/mulheres-lideram-40-de-programas-de-inovacao-aberta-em-grandes-empresas/",
        "date": "25/08/2020",
    },
    {
        "auth": "GauchaZH",
        "href": "https://gauchazh.clicrbs.com.br/economia/noticia/2020/08/velha-economia-se-aproxima-de-startups-cke8p7jet004101h8myqy9tgm.html",
        "date": "25/08/2020",
    },
    {
        "auth": "Terra",
        "href": "https://www.terra.com.br/economia/velha-economia-se-aproxima-de-startups2fdc8103ce2a76fcc7fbcb28b7c88cb1mq30ibot.html",
        "date": "25/08/2020",
    },
    {
        "auth": "UOL",
        "href": "https://economia.uol.com.br/noticias/estadao-conteudo/2020/08/24/velha-economia-se-aproxima-de-startups.htm",
        "date": "25/08/2020",
    },
    {
        "auth": "Isto é Dinheiro",
        "href": "https://www.istoedinheiro.com.br/velha-economia-se-aproxima-de-startups/",
        "date": "25/08/2020",
    },
    {
        "auth": "PEGN",
        "href": "https://revistapegn.globo.com/Noticias/noticia/2020/08/pegn-velha-economia-se-aproxima-de-startups.html",
        "date": "25/08/2020",
    },
    {
        "auth": "CNN",
        "href": "https://www.cnnbrasil.com.br/business/2020/08/24/negocios-entre-startups-e-empresas-tradicionais-crescem-20-vezes-em-5-anos",
        "date": "25/08/2020",
    },
    {
        "auth": "r7",
        "href": "https://noticias.r7.com/economia/velha-economia-se-aproxima-de-startups-24082020",
        "date": "25/08/2020",
    },
    {
        "auth": "Meio Mensagem",
        "href": "https://www.msn.com/pt-br/dinheiro/other/velha-economia-se-aproxima-de-startups/ar-BB18iTyf",
        "date": "25/08/2020",
    },
    {
        "auth": "Correio Braziliense",
        "href": "https://www.correiobraziliense.com.br/economia/2020/08/4870676-para-encontrar-novas-solucoes---velha-economia--se-aproxima-de-startups.html",
        "date": "25/08/2020",
    },
    {
        "auth": "Seu Dinheiro",
        "href": "https://www.seudinheiro.com/2020/economia/velha-economia-se-aproxima-de-startups/",
        "date": "25/08/2020",
    },
    {
        "auth": "Dinheiro Rural",
        "href": "https://www.dinheirorural.com.br/velha-economia-se-aproxima-de-startups/",
        "date": "25/08/2020",
    },
    {
        "auth": "Investing.com",
        "href": "https://br.investing.com/news/stock-market-news/velha-economia-se-aproxima-de-startups-777223",
        "date": "25/08/2020",
    },
    {
        "auth": "Página do Estado",
        "href": "https://paginadoestado.com.br/velha-economia-se-aproxima-de-startups/",
        "date": "25/08/2020",
    },
    {
        "auth": "Folha de Vitória",
        "href": "https://www.folhavitoria.com.br/economia/noticia/08/2020/velha-economia-se-aproxima-de-startups",
        "date": "25/08/2020",
    },
    {
        "auth": "A crítica",
        "href": "https://www.acritica.net/editorias/economia/velha-economia-se-aproxima-de-startups/472061/",
        "date": "25/08/2020",
    },
    {
        "auth": "Bem Paraná",
        "href": "https://www.bemparana.com.br/noticia/velha-economia-se-aproxima-de-startups-141#.X0UfHOhKjIU",
        "date": "25/08/2020",
    },
    {
        "auth": "AEPS",
        "href": "https://aeps-rj.com.br/velha-economia-se-aproxima-de-startups/",
        "date": "25/08/2020",
    },
    {
        "auth": "Febrac",
        "href": "http://www.febrac.org.br/v1/index.php/comunicacao/clipping/430-clipping-diario-n-3746-24-de-agosto-de-2020#Velha",
        "date": "25/08/2020",
    },
    {
        "auth": "Brazil News",
        "href": "https://brazil.shafaqna.com/PT/AL/6974565",
        "date": "25/08/2020",
    },
    {
        "auth": "Opinião & Crítica",
        "href": "https://opiniaoecritica.com.br/100-open-startups-conquista-aporte-milionario-para-investir-no-brasil/",
        "date": "25/08/2020",
    },
    {
        "auth": "TI Bahia",
        "href": "http://tibahia.com/startups/engie-esta-entre-as-100-maiores-empresas-de-open-innovation-do-brasil/",
        "date": "25/08/2020",
    },
    {
        "auth": "Eu quero investir",
        "href": "https://www.euqueroinvestir.com/com-efeito-exportacao-e-cambio-jbs-ultrapassa-petrobras-veja-outros-destaques/",
        "date": "25/08/2020",
    }
];

$(document).ready(function($) {

    function load(baseHtml) {
        var html = '';
        clippings.forEach(function(item, index){
            var temp = baseHtml;
            temp = temp.replace(/##ITEM_DATE##/i, item.date);
            temp = temp.replace(/##ITEM_DESC##/i, item.auth);
            temp = temp.replace(/##ITEM_HREF##/i, item.href);
            temp = temp.replace(/##ITEM_NAME##/i, item.name);
            html+= temp;
        });
        $('#s-news-row-2020').html(html);
    }
    $.get('templates/clippings/s-n-list-card.html', load, 'html');

}); // document.ready
