var categories = {
    2020: topCorps2020Category,
};

$(document).ready(function($) {

    var list = $('#tableBodyCategory');
    var cols = list.attr('data-col') ? list.attr('data-col') : 'col-6 col-md-4 col-lg-3 col-xl-2';

    function load(baseHtml) {
        var html = '';
    
        if (!categories[cYear]) {
            $('#top-category').hide();
            return false;
        }
        $('#top-category').show();
    
        categories[cYear].forEach(function(item, index){
            
            // Check if the Match is avaliable
            item['MatchLink'] = '';
            years[cYear].forEach(function(i) {
                if (i['Link']) {
                    item['MatchLink'] = '<a class="btn btn-primary btn-sm px-3 py-2" href="'+ i['Link'] +'">';
                    item['MatchLink']+= '<span>Quero me conectar</span>';
                    item['MatchLink']+= '</a>';
                }
            });
            
            var temp = baseHtml;
            temp = temp.replace(/##ID##/i, index);
            temp = temp.replace(/##ITEM_COMPANY##/g, item['Empresa']);
            temp = temp.replace(/##ITEM_CATEGORIA##/g, item['Premio']);
            temp = temp.replace(/##ITEM_MATCH##/g, item['MatchLink']);
            
            // Include column on the template
            html+= '<div class="s-cols col '+ cols + '">';
                html+= temp;
            html+= '</div><!--/.s-cols -->';
        });
        list.html(html);
    }

    $.get('templates/rankings/s-r-corps-category.html', load, 'html');

    $('#year').on('change', function(ev) {
        var value = ev.target.value;
        cYear = value;
        load();
    });

}); // document.ready