$(document).ready(function($) {

    var items = '';
    if (opentalk2020) {
        // Clear the HTML
        $('#s-talks-row').html('');

        opentalk2020.map(function(item, i){

            if ( item['Video'] != '') {  
                items+= '<div class="s-talks-col col-12 col-md-6 col-lg-4">';
                
                items+= '<a class="card-talk card" href="#card-talk-modal-'+ i +'" data-target="#card-talk-modal-'+ i +'" data-toggle="modal">';
                
                    items+= '<div class="c-v-image"';
                        items+= 'style="background-image: url(https://img.youtube.com/vi/'+ item['Video'] +'/hqdefault.jpg);"';
                    items+= '></div><!--/.c-v-image -->';
                    
                    items+= '<div class="c-v-holdr">';
                        items+= '<span class="tit">'+ item['Nome'] +'</span>';
                        items+= '<span class="com">'+ item['Empresa'] +'</span>';
                        items+= '<span class="pos">'+ item['TOP'] +'</span>';
                    items+= '</div><!--/.c-v-holdr -->';
                
                items+= '</a><!--/.card-talk -->';

                items+= '<div class="modal card-talk-modal fade" id="card-talk-modal-'+ i +'" tabindex="-1" role="dialog"';
                    items+= 'aria-labelledby="lbl-card-talk-modal-'+ i +'" aria-hidden="true">';
                items+= '<div class="modal-dialog modal-lg" role="document">';
                items+= '<div class="modal-content">';

                    items+= '<div class="modal-head modal-header text-center">';

                        items+= '<button class="close" data-dismiss="modal" aria-label="Fechar">';
                            items+= '<span class="icon fas fa-times mr-1" aria-hidden="true"></span>';
                            items+= '<span class="text">Fechar</span>';
                        items+= '</button>';

                        items+= '<h2 class="h3 mt-0 mb-2">'+ item['Nome'] +'</h2>';
                        items+= '<h3 class="h4 m-0 font-weight-normal">'+ item['Cargo'] +'</h3>';

                    items+= '</div><!--/.modal-head -->';

                    items+= '<div class="modal-body mt-3">';
                    items+= '<div class="modal-embed embed-responsive embed-responsive-16by9">';
                        items+= '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ item['Video'] +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                    items+= '</div><!--/.modal-embed -->';
                    items+= '</div><!--/.modal-body -->';

                items+= '</div><!--/.modal-content -->';
                items+= '</div><!--/.modal-dialog-->';
                items+= '</div><!--/.modal -->';

                items+= '</div><!--/.s-videos-col -->';
            }
        });
        $('#s-talks-row').append(items);
    }

}); // document.ready
