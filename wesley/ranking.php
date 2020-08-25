<?php 
$top20_100 = array_map('str_getcsv', file('top20-100.csv'));
$top_categoria = array_map('str_getcsv', file('top-categoria.csv'));

array_walk($top20_100, function(&$a) use ($top20_100) {
  $a = array_combine($top20_100[0], $a);
});
array_shift($top20_100);

array_walk($top_categoria, function(&$a) use ($top_categoria) {
  $a = array_combine($top_categoria[0], $a);
});
array_shift($top_categoria);
?>

<script>
function buildList() {
    
}

function execFilter() {
    $('#top-20-list').hide();
    $('#top-categorias-list').hide();
    $('#top-100-list').hide();
    $('tr').show();
    $('.box').show();

    if ($('#tipo-ranking').val() != '') {
        $('#'+$('#tipo-ranking').val()+'-list').show();
    }

    if ($('#empresa').val().length > 2) {
        var searchTerm = $('#empresa').val();
        $('tbody tr').hide();
        $('.box').hide();
        $('.empresa').each(function(){
            if ($(this).html().toLowerCase().indexOf(searchTerm) >= 0) {
                $(this).parent().show();
                $(this).parent().parent().show();
            }
        });
    }
}

$(document).ready(function(){
    $('.display-msg').click(function(e){
        e.preventDefault();
        $('.cat-msg').addClass('active');
    });

    $('#tipo-ranking').on('change', function() { execFilter(); });
    $('#ranking').on('change', function() { execFilter(); });
    $('#categoria').on('change', function() { execFilter(); });
    $('#empresa').on('keyup', function() { execFilter(); });
    execFilter();
});
</script>

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

        <div class="box-years">
            <ul class="year-list">
                <li><span>Veja todos os Rankings publicados</span></li>
                <li><a class="selected" href=""><span>2020</span></a></li>
                <li><a href="https://www.openstartups.net/site/ranking-list.html?tab=top-2019"><span>2019</span></a></li>
                <li><a href="https://www.openstartups.net/site/ranking-list.html?tab=top-2018"><span>2018</span></a></li>
                <li><a href="https://www.openstartups.net/site/ranking-list.html?tab=top-2017"><span>2017</span></a></li>
                <li><a href="https://www.openstartups.net/site/ranking-list.html?tab=top-2016"><span>2016</span></a></li>
            </ul>
            <ul class="category-list">
                <li><a class="selected" href=""><span>Top corps</span></a></li>
                <li><a class="display-msg" href="#"><span>Top investidor</span></a></li>
                <li><a class="display-msg" href="#"><span>Top ecossistema</span></a></li>
                <li><a class="display-msg" href="#"><span>Top startups</span></a></li>
            </ul>
        </div><!--/.box-years -->

        <p class="cat-msg">Os Rankings TOP Startups e TOP Categorias serão divulgados durante o <br> Whow! Festival de Inovação, em Novembro de 2020. <a href="#">Quer saber mais?</a></p>

        <form action="" class="box-filters">
            <h2>Filtrar por</h2>
            <div class="row">
                <div class="form-group col-3">
                    <label for="tipo-ranking">Tipo do ranking</label>
                    <select class="form-control" id="tipo-ranking">
                        <option value=""></option>
                        <option value="top-20">TOP 20 OPEN CORPS</option>
                        <option value="top-100">TOP 100 OPEN CORPS</option>
                        <option value="top-categorias">TOP 100 OPEN CORPS</option>
                    </select>
                </div>
                <div class="form-group col-3">
                    <label for="ranking">Ranking</label>
                    <select class="form-control" id="ranking">
                        <option value=""></option>
                        <option value="corps">Corps</option>
                        <option value="investidor">Investidor</option>
                        <option value="ecossistema">Ecossistema</option>
                        <option value="startups">Startups</option>
                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="empresa">Empresa</label>
                    <input class="form-control" id="empresa" type="text" placeholder="">
                </div>
                <!-- div class="form-group col-3">
                    <label for="categoria">Categoria</label>
                    <select class="form-control" id="categoria">
                        <option value=""></option>
                    </select>
                </div-->
            </div>
        </form><!--/.box-filters -->

        <div id="top-20-list">
            <h2>TOP 20 OPEN CORPS</h2>
            <table>
                <thead>
                    <tr>
                        <th width="10%"><span>Rank</span></th>
                        <th width="20%"><span>Empresa</span></th>
                        <th width="40%"></th>
                        <th width="10%"><span>Pontos</span></th>
                        <th width="20%"></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($top20_100 as $k => $value) { 
                        if ($value['Ranking'] != 'A-Z') { ?>
                            <tr>
                                <td class="number"><span><?php echo $value['Ranking']; ?></span></td>
                                <td>
                                    <img class="img-fluid" src="/assets/images/logos/<?php echo $value['Empresa']; ?>.png" alt="Logotipo <?php echo $value['Empresa']; ?>">
                                    <h3 class="sr-only empresa"><?php echo $value['Empresa']; ?></h3>
                                </td>
                                <td></td>
                                <td class="points"><span><?php echo $value['Pontos']; ?></span></td>
                                <td><span><a href="<?php echo $value['Link']; ?>" class="btn">Quero me conectar</a></span></td>
                            </tr>
                        <?php } ?>
                    <?php } ?>
                </tbody>
            </table>
        </div><!--/#top-20-list -->

        <div id="top-categorias-list">
            <h2>TOP 1 CATEGORIAS OPEN CORPS</h2>
            <table>
                <thead>
                    <tr>
                        <th width="10%"><span>Categoria</span></th>
                        <th width="20%"><span>Empresa</span></th>
                        <th width="50%"></th>
                        <th width="20%"></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($top_categoria as $k => $value) { ?>
                            <tr>
                                <td class="selo">
                                    <img class="selo" src="/assets/images/icons/<?php echo $value['Premio']; ?>.png" alt="<?php echo $value['Premio']; ?>">
                                </td>
                                <td>
                                    <img class="img-fluid" src="/assets/images/logos/<?php echo $value['Empresa']; ?>.png" alt="Logotipo <?php echo $value['Empresa']; ?>">
                                    <h3 class="sr-only empresa"><?php echo $value['Empresa']; ?></h3>
                                </td>
                                <td></td>
                                <td><span><a href="<?php echo $value['Link']; ?>" class="btn">Quero me conectar</a></span></td>
                            </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div><!--/#top-categorias-list -->

        <div id="top-100-list">
            <h2>TOP 100 OPEN CORPS</h2>
            <div class="grid-container">
                <?php foreach ($top20_100 as $k => $value) { ?>
                    <div class="box">
                        <figure>
                            <img class="img-fluid" src="/assets/images/logos/<?php echo $value['Empresa']; ?>.png" alt="Logotipo <?php echo $value['Empresa']; ?>">
                        </figure>
                        <h3 class="sr-only empresa"><?php echo $value['Empresa']; ?></h3>
                        <a href="<?php echo $value['Link']; ?>" class="btn">Quero me conectar</a>
                    </div>
                <?php } ?>
            </div>
        </div><!--/#top-100-list -->


    </div><!--/.container -->
    </div><!--/.page__body -->
</div><!--/.page -->

