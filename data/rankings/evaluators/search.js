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
        $('.results tbody tr, .s-cols').show();
        $('.results .s-buttn-collapse').show();
        $('.results .fake-collapse').removeClass('visible');
    }

    var prevValue = '';
    $('#name').on('keyup change', function(ev) {
        var value = ev.target.value;
        if (!value || (value && value.length < 1)) {
            if (prevValue) {
                prevValue = '';
                showEverything();
            }
            return false;
        }
        
        prevValue = value;

        // Hide all the necessary itens
        $('.results tbody tr, .results .s-cols').hide();
        $('.results .s-buttn-collapse').hide();
        $('.results .fake-collapse').addClass('visible');

        var deepestElement = $('.results *:contains(' + value + ')');
        if (!deepestElement.length) {
            return false;
        }
        deepestElement.parents('.results tr, .results .col').show();
    });

}); // document.ready