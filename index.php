<?php
include_once("inc/header.php");
?>
    <!-- Mettre le contenu à afficher dans cette div -->
    <h2> Ma liste de livres </h2>
    <?php
        include("inc/books.php");
    ?>

    <div id="vue_image">
        <?php
            foreach ($books as $key => $book) {
                echo "<a href='livre.php?selection=$key'> <img src='images/$key.jpg'/> </a>";
            }
        ?>
    </div>

    <div id="vue_liste">
        <?php
            foreach ($books as $key => $book) {
                echo "<a href='livre.php?selection=$key'> <h3>". $book['titre'] . "</h3> </a> - <p id='auteur'> " . $book['auteur'] . "</p> <p id='annee'> " . $book['annee'] . " </p> <br> ";
            }
        ?>
    </div>

    <a href=""> <h4 id="changeVue"> Changer de vue </h4> </a>
    <script src="script.js"></script>
<?php
include_once("inc/footer.php");
?>