<?php 

// cek apakah tidak ada data di dalam $_GET
if( !isset($_GET["anime"]) || 
    !isset($_GET["rating"]) ||
    !isset($_GET["sinopsis"]) ||
    !isset($_GET["gambar"])
    ){
    // redirect
    header("Location: index.php");
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET</title>
    <style>
        img {
            width: 320px;
            height: 200px;
            box-shadow: 0 0 3px 1px black;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <ul>
        <img src="img/<?= $_GET["gambar"]; ?>" alt="">
        <li>Anime: <?= $_GET["anime"]; ?></li>
        <li>Rating: <?= $_GET["rating"]; ?></li>
        <li>Sinopsis: <?= $_GET["sinopsis"]; ?></li>
    </ul>

    <a href="index.php">Back</a>
</body>
</html>