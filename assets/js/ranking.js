$(document).ready(function($) {

    populateStartupsCarousel(topStartups2019, '#top10');

    /**
     * Populate Startups
     * 
     * @param {*} data 
     * @param {*} element 
     */
    function populateStartupsCarousel(data, element)
    {
        // Create the slick carousel
        var carousel = $(element + ' .s-slick-carousel').attr('id');
            carousel = $('#'+ carousel);
        // Initialize the slick carousel
        var carouselAttr = {
            arrows: true,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                { breakpoint:1469, settings: { slidesToShow: 4, slidesToScroll: 4 } },
                { breakpoint:1199, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 578, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]
        };
        carousel.slick(carouselAttr);

        data.some((item, index) => {
            console.log('item', item);
            console.log('index', index);

            var carouselCard = '';
            var carouselItemLogo = 'assets/img/bg.png';
            // if (element.indexOf('2019') !== -1) {
                carouselItemLogo = 'assets/img/ranking/logo-top10-' + item.rank + '.png';
            // }

            carouselCard+= '<div class="s-slick-carousel-item">';
            carouselCard+= '<div class="s-winner-card card" style="background-image: url('+ carouselItemLogo +')">';
            carouselCard+= '<div class="s-winner-card-body card-body">';
            
                carouselCard+= '<h3 class="card-title truncate">TOP '+ item.rank +' - '+ item.name +'</h3>';

                carouselCard+= '<dl class="card-lists mb-2">';
                
                    carouselCard+= '<dt>Descrição</dt>';
                    carouselCard+= '<dd>'+ item.description +'</dd>';
                    carouselCard+= '<dt>Categoria</dt>';
                    carouselCard+= '<dd>'+ item.category +'</dd>';
                    carouselCard+= '<dt>Localização</dt>';
                    carouselCard+= '<dd>'+ item.location +'</dd>';

                carouselCard+= '</dl>'; //.card-lists

                carouselCard+= '<a class="card-linkd d-block mt-auto" href="'+ item.shareLink +'">Conecte-se <span class="fas fa-link ml-1"></span></a>';

            carouselCard+= '</div>'; //.s-winner-card-body
            carouselCard+= '</div>'; //.s-winner-card 
            carouselCard+= '</div>'; //.s-slick-carousel-item

            carousel.slick('slickAdd', carouselCard);

            if (index == 9) return true;
        });

        carousel.on('setPosition', function(e, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        }).slick('setPosition');
    }

}); // document.ready