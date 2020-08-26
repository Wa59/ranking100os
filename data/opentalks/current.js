$(document).ready(function($) {

    var list = $('#s-ot-list');
    var numb = list.attr('data-num');
    var cols = list.attr('data-col') ? list.attr('data-col') : 'col-12 col-md-6 col-lg-4 col-xl-3';

    function load(baseHtml) {
        var html = '';
        openTalks.forEach(function(item, index){
            if (numb && index > numb - 1) {
                return true;
            }
            
            var temp = baseHtml;
            temp = temp.replace(/##ID##/g, index);
            temp = temp.replace(/##ITEM_TOP##/g, item['TOP']);
            temp = temp.replace(/##ITEM_VIDEO##/g, item['Video']);
            temp = temp.replace(/##ITEM_TITLE##/g, item['Nome']);
            temp = temp.replace(/##ITEM_COMPANY##/g, item['Empresa']);
            
            // Include column on the template
            html+= '<div class="s-cols col '+ cols + '">';
                html+= temp;
            html+= '</div><!--/.s-cols -->';
        });
        list.html(html);
    }

    if (openTalks !== undefined) {
        $.get('templates/opentalks/s-ot-list-card.html', load, 'html');
    }

}); // document.ready
