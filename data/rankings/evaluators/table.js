var cYear = 2019;
var years = {
    2018: topEvaluators2018,
    2019: topEvaluators2019,
};

$(document).ready(function($) {

    function load() {
        var html = '';

        if (!years[cYear]) {
            return false;
        }

        years[cYear].forEach(function(item, index){
            // Include line on the table
            html+= '<tr>';
                html+= '<td class="text-glow">' + item['rank'] + '</td>';
                html+= '<td class="text-left">' + item['name'] + '</td>';
                html+= '<td class="text-left">' + item['location'] + '</td>';
                html+= '<td>' + item['points'] + '</td>';
            html+= '</tr>';
        });
        $('#tableBody').html(html);
        $('#name').change();
    }

    load();

    $('#year').on('change', function(ev) {
        var value = ev.target.value;
        cYear = value;
        load();
    });

}); // document.ready
