<?php require ('./inc/header.php'); ?>

<div class="page page-minuto-ceo">
    <div class="page__head" style="">
        <div class="page__container container">
            <div class="row">
                <div class="col col-md-12 col-lg-2"></div>
                <div class="col col-md-12 col-lg-8">
                    <h1 class="page__title">Minuto CEO</h1>
                    <div class="page__descr">
                        <p>Empresas líderes, programas de Open Innovation efetivos e CEOs engajados no ecossistema de inovação.</p>

                        <p>Conheça um pouco do histórico e dos esforços de algumas das empresas Ranquadas.</p>
                    </div>
                </div><!--/.col -->
                <div class="col col-md-12 col-lg-2"></div>
            </div><!--/.row -->
        </div><!--/.container -->
    </div><!--/.page__head -->

    <div class="page__body">
    <div class="container">
        <?php for ($i=0;$i<5;$i++) { ?>
            <div class="row">
                <?php for ($j=0;$j<3;$j++) { ?>
                <div class="col col-md-12 col-lg-4">
                <div class="box">
                    <figure class="box-picture">
                        <img alt="" src="https://picsum.photos/id/<?php echo rand(1,80); ?>/200/300/">
                    </figure>
                    <div class="box-text">
                        <h3>Nome Sobrenome</h3>
                        <p>CEO</p>
                        <img class="logo" alt="" src="/assets/images/logo-placeholder.png"> 
                    </div><!--/.box-text -->
                </div><!--/.box -->
                </div><!--/.col -->
                <?php } ?>
            </div><!--/.row -->
        <?php } ?>
    </div><!--/.container -->
    </div><!--/.page__body -->
</div><!--/.page -->

<?php require ('./inc/footer.php'); ?>