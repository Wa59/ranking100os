<nav class="widget-open-talks widget" role="navigation" aria-labelledby="lbl-widget-open-talks">
    <div class="container">
        <div class="widget__head">
            <h2 class="widget__title" id="lbl-widget-open-talks">
                <span class="text">Open Talks</span>
            </h2>
        </div><!--/.widget__head -->
    </div><!--/.container -->

    <div class="widget__body">
        <ul class="widget__list list-0">
            <li class="box box-colored">
                <img class="bg" src="https://picsum.photos/seed/320/200/">
                <img class="logo" alt="" src="/assets/images/logo-placeholder.png"> 
                <h3>Natura Campus</h3>
                <p><strong>Rafael Campolina</strong><br>
                Coordenador de RH de inovação</p>
                <a href="#">
                    Assista o vídeo
                    <svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                </a>
            </li><!--/.box -->

            <li class="box box-main">
                <p>Conheça de perto os programas de inovação aberta das empresas que mais se relacionam com startups no Brasil e conecte-se!</p>
                <a href="#">Assista os vídeos 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                        </svg>
                    </a>
            </li><!--/.box -->

            <?php for($j=0;$j<8;$j++) { ?>
                <li class="box box-colored">
                    <img class="bg" src="https://picsum.photos/seed/320/200/">
                    <img class="logo" alt="" src="/assets/images/logo-placeholder.png"> 
                    <h3>Natura Campus</h3>
                    <p><strong>Rafael Campolina</strong><br>
                    Coordenador de RH de inovação</p>
                    <a href="#">
                        Assista o vídeo
                        <svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                    </a>
            </li><!--/.box -->
            <?php } ?>
        </ul><!--/.widget__list -->

        <?php for($i=1;$i<3;$i++) { ?>
            <ul class="widget__list list-<?php echo $i; ?>">
                <?php for($j=0;$j<10;$j++) { ?>
                    <li class="box box-colored">
                        <img class="bg" src="https://picsum.photos/seed/320/200/">
                        <img class="logo" alt="" src="/assets/images/logo-placeholder.png"> 
                        <h3>Natura Campus</h3>
                        <p><strong>Rafael Campolina</strong><br>
                        Coordenador de RH de inovação</p>
                        <a href="#">
                            Assista o vídeo
                            <svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                        </a>
                    </li><!--/.box -->
                <?php } ?>
            </ul><!--/.widget__list -->
        <?php } ?>
    </div><!--/.widget__body -->
</nav><!--/.widget-open-talks -->