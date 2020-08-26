$(document).ready(function($) {

    var list = $('#s-mc-list');
    var numb = list.attr('data-num');
    var cols = list.attr('data-col') ? list.attr('data-col') : 'col-12 col-md-6 col-lg-4 col-xl-3';

    function load(baseHtml) {
        var html = '';
        minutoCEO.forEach(function(item, index){
            if (numb && index > numb - 1) {
                return true;
            }
            
            var temp = baseHtml;
            temp = temp.replace(/##ID##/i, index);
            temp = temp.replace(/##ITEM_VIDEO##/i, item['Video']);
            temp = temp.replace(/##ITEM_TITLE##/i, item['Nome']);
            temp = temp.replace(/##ITEM_COMPANY##/i, item['Empresa']);
            temp = temp.replace(/##ITEM_TOP##/i, item['TOP']);
            
            // Include column on the template
            html+= '<div class="s-cols col '+ cols + '">';
                html+= temp;
            html+= '</div><!--/.s-cols -->';
        });
        list.html(html);
    }

    if (minutoCEO !== undefined) {
        $.get('templates/minutos/s-mc-list-card.html', load, 'html');
    }

}); // document.ready
