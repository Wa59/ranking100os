$(document).ready(function($) {

    var isST = true
    var list = $('#carouselRanking');

    function load(baseHtml) {
        var html = '';
        var ctrl = '';
        topCorps2020.forEach(function(item, index){
            if (item['Ranking'] === 'A-Z') {
                console.log('item.ranking is a-z', item['Ranking']);
                return true;
            }
            console.log('item.ranking is NOT a-z', item['Ranking']);
            
            var temp = baseHtml;
            temp = temp.replace(/##ID##/i, item['ID']);
            temp = temp.replace(/##ITEM_HREF##/g, item['Link']);
            temp = temp.replace(/##ITEM_TITLE##/g, item['Empresa']);
            temp = temp.replace(/##ITEM_POINTS##/g, item['Pontos']);
            temp = temp.replace(/##ITEM_POSITION##/g, item['Ranking']);
            
            // Include column on the template
            html+= '<li class="carousel-item' + (isST ? ' active' : '') + '">';
                html+= temp;
            html+= '</li><!--/.carousel-item -->';

            ctrl+= '<li data-target="#carouselRanking" data-slide-to="' + index + '"';
            ctrl+= '' + (isST ? ' active' : '') + '>'+ (index < 9 ? 0 : '') + (index + 1) +'</li>'
            
            isST = false;
        });
        list.find('.carousel-inner').html(html);
        list.find('.carousel-ctrls').html(ctrl);
    }

    if (topCorps2020 !== undefined) {
        $.get('templates/rankings/s-r-carousel-card.html', load, 'html');
    }

}); // document.ready
