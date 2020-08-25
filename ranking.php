<?php 
$csv = array_map('str_getcsv', file('top20-100.csv'));
array_walk($csv, function(&$a) use ($csv) {
  $a = array_combine($csv[0], $a);
});
array_shift($csv);
?>
<?php require ('./inc/header.php'); ?>

<div class="page page-ranking">
    <div class="page__head" style="">
        <div class="page__container container">
            <div class="row">
                <div class="col col-md-12 col-lg-6">
                    <h1 class="page__title">As <strong>TOP 100 OPEN CORPS</strong> <br> líderes em Open Innovation de 2020</h1>
                </div><!--/.col -->
                <div class="col col-md-12 col-lg-6 text-lg-right">
                    <img src="/assets/images/fundo-banner-100os.png" alt="Logo 100 Open Startups">
                </div><!--/.col -->
            </div><!--/.row -->
        </div><!--/.container -->
    </div><!--/.page__head -->

    <div class="page__body">
    <div class="container">

        <h2>TOP 20 OPEN CORPS</h2>
        <table>
            <thead>
                <tr>
                    <th width="01%"><span>Rank</span></th>
                    <th width="93%"><span>Empresa</span></th>
                    <th width="01%"><span>Pontos</span></th>
                    <th width="05%"></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($csv as $k => $value) { 
                    if ($value['Ranking'] != 'A-Z') {?>
                        <tr>
                            <td><span><?php echo $value['Ranking']; ?></span></td>
                            <td>
                                <img class="img-fluid" src="/assets/images/logos/<?php echo $value['Empresa']; ?>" alt="Logotipo <?php echo $value['Empresa']; ?>">
                                <?php echo $value['Empresa']; ?>
                            </td>
                            <td><span><?php echo $value['Pontos']; ?></span></td>
                            <td><span><a href="<?php echo $value['Link']; ?>" class="btn">Quero me conectar</a></span></td>
                        </tr>
                    <?php } ?>
                <?php } ?>
            </tbody>
        </table>

    </div><!--/.container -->
    </div><!--/.page__body -->
</div><!--/.page -->

<?php require ('./inc/footer.php'); ?>