$(document).ready(function($) {
    $window = $(window);

    // Back2Init scroll listener
    var lastScroll = 100;
    $window.scroll(function() {
        if ($window.scrollTop() > lastScroll) {
            $('.navbar.fixed-top').addClass('navbar-hidden');
        } else {
            $('.navbar.fixed-top').removeClass('navbar-hidden');
        }
        lastScroll = $window.scrollTop();

        if ($window.scrollTop() > 100) {
            $('.back2init').addClass('visible');
            return;
        }
        $('.back2init').removeClass('visible');
        $('.navbar.fixed-top').removeClass('navbar-hidden');
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
