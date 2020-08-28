$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

$(document).ready(function($) {

    $('form').on('submit', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        $('#year').change();
        $('#name').change();
        
        return false;
    });

    function showEverything() {
        $('tbody tr, .s-cols').show();
        $('.s-buttn-collapse').show();
        $('.fake-collapse').removeClass('visible');
    }

    var prevValue = '';
    $('#name').on('keyup change', function(ev) {
        var value = ev.target.value;
        if (!value || (value && value.length < 3)) {
            if (prevValue) {
                prevValue = '';
                showEverything();
            }
            return false;
        }
        
        prevValue = value;

        // Hide all the necessary itens
        $('tbody tr, .s-cols').hide();
        $('.s-buttn-collapse').hide();
        $('.fake-collapse').addClass('visible');

        var deepestElement = $('*:contains(' + value + ')');
        if (!deepestElement.length) {
            return false;
        }
        deepestElement.parents('tr, .col').show();
    });

}); // document.ready