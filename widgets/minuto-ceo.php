<nav class="widget-minuto-ceo widget" role="navigation" aria-labelledby="lbl-widget-minuto-ceo">
    <div class="container">
        <div class="widget__body row">
            <div class="col-md-12 col-lg-6">
            	<h2 class="widget__title" id="lbl-widget-minuto-ceo">
	                <span class="text">Minuto CEO</span>
	            </h2>
	            <p>Empresas líderes, programas de Open Innovation efetivos e CEOs engajados no ecossistema de inovação.</p>
	            <p>Conheça um pouco do histórico e dos esforços de algumas das empresas Ranquadas.</p>
	            <p>
	            	<a href="#">Assista os vídeos 
		            	<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
							<path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
						</svg>
					</a>
				</p>
            </div><!--/.col -->

            <div class="col-md-12 col-lg-6">
            	<?php for ($i=0;$i<3;$i++) { ?>
            	<div class="box">
            		<figure class="box-picture">
            			<img alt="" src="https://picsum.photos/id/<?php echo $i; ?>/200/300/">
            		</figure>
            		<div class="box-text">
	            		<h3>Nome Sobrenome</h3>
	            		<p>CEO</p>
	            		<img class="logo" alt="" src="/assets/images/logo-placeholder.png"> 
	            	</div><!--/.box-text -->
            	</div><!--/.box -->
            	<?php } ?>
            </div><!--/.col -->
        </div><!--/.widget__body -->
    </div><!--/.container -->
</nav><!--/.widget-minuto-ceo -->