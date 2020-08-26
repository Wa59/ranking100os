$(document).ready(function($) {
    $window = $(window);

    // Back2Init scroll listener
    $window.scroll(function() {
        if ($window.scrollTop() > 100) {
            $('.back2init').addClass('visible');
            return;
        }
        $('.back2init').removeClass('visible');
    });

    // Close modal on link click
    $('.modal').on('click', 'a', function() {
        $(this).parents('.modal').modal('hide');
    });


    $('.s-buttn-collapse').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var $this = $(this);
        
        $this.toggleClass('visible');
        $($this.attr('data-target')).toggleClass('visible');

        var scrollTo = $($this.attr('data-scroll-to')).offset().top;
        // setTimeout(function() { 
            $("html, body").animate({ scrollTop: scrollTo - 140 }, 500);
        // }, 300);
    });

}); //document.ready

AOS.init();
