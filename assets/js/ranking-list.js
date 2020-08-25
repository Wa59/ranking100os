$(document).ready(function($) {

    populateCategories(topCategories2018[0].children, '#top-2018-gc');
    populateCategories(topCategories2018[1].children, '#top-2018-se');
    populateCategories(topCategories2018[2].children, '#top-2018-it');
    populateCategories(topCategories2018[3].children, '#top-2018-ea');

    populateCategoriesTab(topCategories2019[1].children, '.top-year-2019-content');
    populateCategoriesTab(topCategories2019[2].children, '.top-year-2019-content');
    populateCategoriesTab(topCategories2019[3].children, '.top-year-2019-content');
    populateCategoriesTab(topCategories2019[4].children, '.top-year-2019-content');

    populateCorps(topCorps2018, '#top-2018-oc');
    populateCorps(topCorps2019, '#top-2019-oc');
    populateCorps(topEcosystem2019, '#top-2019-ec');

    populateEvaluators(topEvaluators2018, '#top-2018-ev');
    populateEvaluators(topEvaluators2019, '#top-2019-ev');

    populateStartups(topStartups2016, '#top-2016-os');
    populateStartups(topStartups2017, '#top-2017-os');
    populateStartups(topStartups2018, '#top-2018-os');
    populateStartups(topStartups2019, '#top-2019-os');

    // Find the button that handles the tab
    var tab = getParameterByName("tab");
    var tabLink = $('[href="#'+tab+'"]');
    if (tabLink.length
        && $('#'+ tab).length 
        && $('#'+ tab).parent().length
    ) {
        tabLink.click();
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#'+ tab).parent().offset().top
        }, 300);
    } else {
        // $('[href="#top-2019-os"]').click();
    }

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $(e.target.hash).find('.s-slick-carousel').slick('setPosition');
    });

    $('.test a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        console.log('target', e.target.hash);
        $([document.documentElement, document.body]).animate({
            scrollTop: $(e.target.hash).offset().top
        }, 300);
    });

    /**
     * Populate Startups
     * 
     * @param {*} data 
     * @param {*} parent 
     */
    var populateCategoriesTabCounter = 0;
    function populateCategoriesTab(data, parent)
    {
        console.log(data);

        // Loop trough the data array
        data.forEach(category => {

            // Create the content variable
            var html = '';
            
            // Create the HTML element for insertion
            html+= '<section class="top-ct section py-5 tab-pane fade show" id="top-2019-c'+category._id+'" ';
            html+= '' + 'aria-labelledby="lbl-top-2019-c'+category._id+'">';

                html+= '<div class="s-hold">';
                html+= '<div class="s-hold-container container">';

                html+= '<h3 class="s-title mb-5">';
                html+= '' + '<span class="text">'+ category.name +'</span>';
                html+= '</h3>'; //.s-title

                html+= '<div class="table-responsive">';
                html+= '<table class="table table-hover">';
                html+= '<thead>';
                html+= '<tr>';
                    html+= '<th width="1%"><span>Rank</span></th>';
                    html+= '<th width="10%"><span>Startup</span></th>';
                    html+= '<th width="65%"><span>Descrição</span></th>';
                    html+= '<th width="1%"><span>Localização</span></th>';
                    html+= '<th width="1%"><span>Share</span></th>';
                html+= '</tr>';
                html+= '</thead>';
                html+= '<tbody>';

                // Loop trough the data array
                category.children.forEach(item => {
                    // Handle the location
                    if (item.location) {
                        item.location = item.location.replace(' - ', '<br>');
                    }
                    // Build the HTML variable
                    html+= '<tr>';
                        html+= '<td><span>'+ item.rank +'</span></td>';
                        html+= '<td><img class="img-fluid" src="'+ item.logoUrl +'" alt="Logotipo '+ item.name +'" /></td>';
                        html+= '<td><div class="text-left">';
                            html+= '<span><strong>'+ item.name +'</strong><br>'+ item.description +'</span>';
                        html+= '</div></td>';
                        html+= '<td><div class="text-left">';
                            html+= '<span>'+ item.location +'</span>';
                        html+= '</div></td>';
                        html+= '<td><span><a href="'+ item.shareLink +'">';
                            html+= '<span class="icon fas fa-2x fa-link"></span>';
                        html+= '</a></span></td>';
                    html+= '</tr>';
                });

                html+= '</tbody>';
                html+= '</table>'; //.table
                html+= '</div>'; //.table-responsive

                html+= '<ul class="s-lists fa-ul small mt-4 ml-0">';
                    html+= '<li class="s-lists-item"><span class="fa-li fas fa-check"></span> Startups com pontuação para ranking 100 Open Startups, sendo destaque dentro de cada categoria;</li>';
                    html+= '<li class="s-lists-item"><span class="fa-li fas fa-check"></span> Pontuação e desempate conforme score do ranking principal;</li>';
                    html+= '<li class="s-lists-item"><span class="fa-li fas fa-check"></span> Categorias Grandes Desafios: Top Education, Top Energy, Top Environment, Top Healthcare, Top Industry, Top Transport &amp; Logistics;</li>';
                    html+= '<li class="s-lists-item"><span class="fa-li fas fa-check"></span> Categorias Setores: Top Retail, Top Agriculture, Top Construction, Top Financial Services;</li>';
                    html+= '<li class="s-lists-item"><span class="fa-li fas fa-check"></span> Categorias Tendências de Inovação: Top Marketplace, Top Big Data, Top Biotech, Top Computer Vision, Top IoT, Top 5 VR/AR;</li>';
                    html+= '<li class="s-lists-item"><span class="fa-li fas fa-check"></span> Categorias Aplicações Empresariais: Top Productivity, Top Customer Service, Top Human Resources, Top Legal, Top Marketing.</li>';
                html+= '</ul>';

                html+= '</div>'; //.s-hold-container
                html+= '</div>'; //.s-hold

            html+= '</section>'; //.top-ct

            // Add data to the table
            $(parent).append(html);

        }); // data.each
    }

    /**
     * Populate Categories
     * 
     * @param {*} data 
     * @param {*} element 
     */
    function populateCategories(data, element)
    {
        populateCategoriesAccordion(data, element);
        populateCategoriesCarousel(data, element);
    }

    /**
     * Populate Categories Carousel
     * 
     * @param {*} data 
     * @param {*} element 
     */
    function populateCategoriesAccordion(data, element)
    {
        var accordion = $(element + ' .s-accordion');

        // Loop trough the subcategories
        data.forEach(category => {

            var categoryId = element.replace('#','') + '-' + category._id;

            // Loop trough the items
            var accordionHTML = '';
            category.children.forEach(item => {

                // Create the table row
                // Handle the location
                if (item.location) {
                    item.location = item.location.replace(' - ', '<br>');
                }
                // Build the HTML variable
                accordionHTML+= '<tr>';
                    accordionHTML+= '<td><span>'+ item.rank +'</span></td>';
                    accordionHTML+= '<td><img class="img-fluid" src="'+ item.logoUrl +'" alt="Logotipo '+ item.name +'" /></td>';
                    accordionHTML+= '<td><div class="text-left">';
                        accordionHTML+= '<span><strong>'+ item.name +'</strong><br>'+ item.description +'</span>';
                    accordionHTML+= '</div></td>';
                    accordionHTML+= '<td><div class="text-left">';
                        accordionHTML+= '<span>'+ item.location +'</span>';
                    accordionHTML+= '</div></td>';
                    accordionHTML+= '<td><span><a href="'+ item.shareLink +'">';
                        accordionHTML+= '<span class="icon fas fa-2x fa-link"></span>';
                    accordionHTML+= '</a></span></td>';
                accordionHTML+= '</tr>';

            }); // item

            // Build the accordion-card
            var accordionCard = '<div class="accordion-card">';
                    
                accordionCard+= '<a class="accordion-card-link" href="#'+ categoryId +'" role="button"';
                accordionCard+= 'data-toggle="collapse" data-target="#'+ categoryId +'" aria-expanded="false" aria-controls="'+ categoryId +'">';
                    accordionCard+= '<h3 class="accordion-card-title" id="lbl-'+ categoryId +'">'+ category.name +'</h3>';
                    accordionCard+= '<img class="accordion-card-image img-fluid" src="'+ category.logoUrl +'" alt="">';
                accordionCard+= '</a>'; // accordion-card-link

                accordionCard+= '<div class="accordion-card-body collapse" id="'+ categoryId +'"';
                accordionCard+= 'data-parent="#'+ accordion.attr('id') +'" aria-labelledby="lbl-'+ categoryId +'">';
                accordionCard+= '<div class="accordion-card-body-inside">';

                    accordionCard+= '<div class="table-responsive">';
                    accordionCard+= '<table class="table table-hover" id="top-gd-table-transport">';
                    accordionCard+= '<thead>';
                    accordionCard+= '<tr>';
                        accordionCard+= '<th width="1%"><span>Rank</span></th>';
                        accordionCard+= '<th width="10%"><span>Startup</span></th>';
                        accordionCard+= '<th width="65%"><span>Descrição</span></th>';
                        accordionCard+= '<th width="1%"><span>Localização</span></th>';
                        accordionCard+= '<th width="1%"><span>Share</span></th>';
                    accordionCard+= '</tr>';
                    accordionCard+= '</thead>';
                    accordionCard+= '<tbody>';

                        // Add the Table HTML generated previously
                        accordionCard+= accordionHTML;
                
                    accordionCard+= '</tbody>';
                    accordionCard+= '</table>'; // table
                    accordionCard+= '</div>'; // table-responsive

                accordionCard+= '</div>'; // accordion-card-body-inside
                accordionCard+= '</div>'; // accordion-card-body
            
            accordionCard+= '</div>'; // accordion-card

            // Add accordionCard to the HTML element
            accordion.append( accordionCard );

        }); // category
    }

    /**
     * Populate Categories Carousel
     * 
     * @param {*} data 
     * @param {*} element 
     */
    function populateCategoriesCarousel(data, element)
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
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                { breakpoint:1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 578, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]
        };
        carousel.slick(carouselAttr);

        // Loop trough the subcategories
        data.forEach(category => {

            var carouselHTML = '';
            // Loop trough the items
            category.children.forEach(item => {
                carouselHTML+= '<li class="truncate"><span>#'+ item.rank +'</span> - ';
                carouselHTML+= '<strong>'+ item.name +'</strong></li>';
            }); // item

            var carouselItemBg = 'assets/img/bg.png';
            var carouselItemLogo = category.logoUrl;
            if (element.indexOf('2019') !== -1) {
                carouselItemBg = 'assets/img/ranking/top-bg-' + category._id  + '.png'; 
                carouselItemLogo = 'assets/img/ranking/top-logo-' + category._id + '.png';
            }

            var carouselCard = '<div class="s-slick-carousel-item">';
                carouselCard+= '<div class="s-t10-card card" style="background-image: url('+ carouselItemBg +')">';

                carouselCard+= '<div class="s-t10-card-head card-head">';
                    carouselCard+= '<img class="s-t10-card-image img-fluid" src="'+carouselItemLogo +'" alt="" width="100">';
                carouselCard+= '</div>'; //.s-t10-card-head

                carouselCard+= '<div class="s-t10-card-body card-body">';
                carouselCard+= '<h4 class="card-title sr-only">'+ category.name +'</h4>';
                carouselCard+= '<ul class="s-lists list-unstyled p-0 m-0">';
                    
                    // Add the Table HTML generated previously
                    carouselCard+= carouselHTML;

                carouselCard+= '</ul>';
                carouselCard+= '</div>'; //.s-t10-card-body

            carouselCard+= '</div>'; //.s-t10-card 
            carouselCard+= '</div>'; //.s-slick-carousel-item

            carousel.slick('slickAdd', carouselCard);

        }); // category

        carousel.slick('setPosition');
    }
    
    /**
     * Populate Corps
     * 
     * @param {*} data 
     * @param {*} table 
     */
    function populateCorps(data, table)
    {
        // Create the content variable
        var html = '';
        var body = $(table + ' tbody');
        // Loop trough the data array
        data.forEach(item => {
            html+= '<tr>';
                html+= '<td><span>'+ item.rank +'</span></td>';
                html+= '<td><div class="text-left"><span>'+ item.name +'</span></div></td>';
                html+= '<td><span>'+ item.points +'</span></td>';
            html+= '</tr>';
        });
        // Add data to the table
        body.html(html);
    }

    /**
     * Populate Evaluators
     * 
     * @param {*} data 
     * @param {*} table 
     */
    function populateEvaluators(data, table)
    {
        // Create the content variable
        var html = '';
        var body = $(table + ' tbody');
        // Loop trough the data array
        data.forEach(item => {
            // Check for the location
            if (!item.location) {
                item.location = '-';
            }
            // Build the HTML variable
            html+= '<tr>';
                html+= '<td><span>'+ item.rank +'</span></td>';
                html+= '<td><div class="text-left"><span>'+ item.name +'</span></div></td>';
                html+= '<td><div class="text-left"><span>'+ item.location +'</span></div></td>';
                html+= '<td><span>'+ item.points +'</span></td>';
            html+= '</tr>';
        });
        // Add data to the table
        body.html(html);
    }

    /**
     * Populate Startups
     * 
     * @param {*} data 
     * @param {*} table 
     */
    function populateStartups(data, table)
    {
        // Create the content variable
        var html = '';
        var body = $(table + ' tbody');
        // Loop trough the data array
        data.forEach(item => {
            // Handle the location
            if (item.location) {
                item.location = item.location.replace(' - ', '<br>');
            }
            // Build the HTML variable
            html+= '<tr>';
                html+= '<td><span>'+ item.rank +'</span></td>';
                html+= '<td><img class="img-fluid" src="'+ item.logoUrl +'" alt="Logotipo '+ item.name +'" /></td>';
                html+= '<td><div class="text-left">';
                    html+= '<span><strong>'+ item.name +'</strong><br>'+ item.description +'</span>';
                html+= '</div></td>';
                html+= '<td><span>'+ item.category +'</span></td>';
                html+= '<td><div class="text-left">';
                    html+= '<span>'+ item.location +'</span>';
                html+= '</div></td>';
                html+= '<td><span>'+ item.points +'</span></td>';
                html+= '<td><span><a href="'+ item.shareLink +'">';
                    html+= '<span class="icon fas fa-2x fa-link"></span>';
                html+= '</a></span></td>';
            html+= '</tr>';
        });
        // Add data to the table
        body.html(html);
    }

}); // document.ready

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2]);  
}