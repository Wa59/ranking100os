var categories = {
    2020: topCorps2020Category,
};

$(document).ready(function($) {

    function load() {
        var html = '';

        if (!years[cYear]) {
            $('#top-category').hide();
            return false;
        }
        $('#top-category').show();

        categories[cYear].forEach(function(item, index){

            // Check if the Match is avaliable
            item['MatchLink'] = '-';
            if (item['Link']) {
                item['MatchLink'] = '<a class="btn btn-primary btn-sm px-3 py-2" href="'+ item['Link'] +'">';
                item['MatchLink']+= '<span>Quero me conectar</span>';
                item['MatchLink']+= '</a>';
            }

            // Include line on the table
            html+= '<tr>';
                html+= '<td class="text-glow">' + item['Ranking'] + '</td>';
                html+= '<td>';

                    html+= '<div class="table-image">';
                        html+= '<img class="img-fluid" src="data/rankings/corps/logos/'+ item['Empresa'] +'.png" alt="Logotipo '+ item['Empresa'] +'">';
                    html+= '</div><!--/.table-image -->';

                html+= '</td>';
                html+= '<td class="text-left">' + item['Empresa'] + '</td>';
                html+= '<td>' + item['Categoria'] + '</td>';
                html+= '<td>' + item['Pontos'] + '</td>';
                html+= '<td>' + item['MatchLink'] + '</td>';
            html+= '</tr>';
        });
        $('#tableCategory').html(html);
    }

    load();

}); // document.ready