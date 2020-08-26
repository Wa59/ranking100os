$(document).ready(function($) {

    var isST = true
    var list = $('#carouselRanking');

    function load(baseHtml) {
        var html = '';
        var ctrl = '';
        topCorps2020.forEach(function(item, index){
            if (item['Ranking'] === 'A-Z') {
                return true;
            }
            
            var temp = baseHtml;
            temp = temp.replace(/##ID##/i, item['ID']);
            temp = temp.replace(/##ITEM_HREF##/g, item['Link']);
            temp = temp.replace(/##ITEM_TITLE##/g, item['Empresa']);
            temp = temp.replace(/##ITEM_POINTS##/g, item['Pontos']);
            temp = temp.replace(/##ITEM_POSITION##/g, item['Ranking']);

            // Check if there is a MinutoCEO
            if (minutoCEO) {
                var mc = undefined;
                minutoCEO.forEach(function(mcItem) {
                    if (mcItem['Empresa'] == item['Empresa']) {
                        mc = mcItem;
                    }
                });
                if (mc) {
                    temp = temp.replace(/##MC_DISPLAY##/g, 'd-block');
                    temp = temp.replace(/##MC_VIDEO##/g, mc['Video']);
                    temp = temp.replace(/##MC_TITLE##/g, mc['Nome']);
                    temp = temp.replace(/##MC_POSITION##/g, mc['Cargo']);
                } else {
                    temp = temp.replace(/##MC_DISPLAY##/g, 'd-none');
                }
            } else {
                temp = temp.replace(/##MC_DISPLAY##/g, 'd-none');
            }

            // Check if there is a OpenTalk
            if (openTalks) {
                var ot = undefined;
                openTalks.forEach(function(otItem) {
                    if (otItem['Empresa'] == item['Empresa']) {
                        ot = otItem;
                    }
                });
                if (ot) {
                    temp = temp.replace(/##OT_DISPLAY##/g, 'd-block');
                    temp = temp.replace(/##OT_VIDEO##/g, ot['Video']);
                    temp = temp.replace(/##OT_TITLE##/g, ot['Nome']);
                } else {
                    temp = temp.replace(/##OT_DISPLAY##/g, 'd-none');
                }
            } else {
                temp = temp.replace(/##OT_DISPLAY##/g, 'd-none');
            }
            
            // Include column on the template
            html+= '<li class="carousel-item' + (isST ? ' active' : '') + '">';
                html+= temp;
            html+= '</li><!--/.carousel-item -->';

            ctrl+= '<li data-target="#carouselRanking" data-slide-to="' + index + '"';
            ctrl+= '' + (isST ? ' class="active"' : '') + '>'+ (index < 9 ? 0 : '') + (index + 1) +'</li>'
            
            isST = false;
        });
        list.find('.carousel-inner').html(html);
        list.find('.carousel-ctrls').prepend(ctrl);
    }

    if (topCorps2020 !== undefined) {
        $.get('templates/rankings/s-r-carousel-card.html', load, 'html');
    }

}); // document.ready
