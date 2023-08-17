<?php
include_once("inc/header.php");
$getLivre = $_GET['selection'];
include("livres/$getLivre.php");
include_once("inc/footer.php");
?>