var cYear = 2020;
var years = {
    2018: topCorps2018,
    2019: topCorps2019,
    2020: topCorps2020,
};

$(document).ready(function($) {

    function load() {
        var html = '';

        if (!years[cYear]) {
            return false;
        }

        years[cYear].forEach(function(item, index){

            // Check if it has category
            item['Categoria'] = '-';
            if (cYear === 2020) {
                topCorps2020Category.forEach(function(i) {
                    item['Categoria'] = i['Empresa'] === item['Empresa'] ? i['Premio'] : item['Categoria'];
                });
            }

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
        $('#tableBody').html(html);
    }

    load();

}); // document.ready
