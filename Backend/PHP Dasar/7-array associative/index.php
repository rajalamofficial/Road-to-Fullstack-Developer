<?php 

$animeList = [
    [
        "anime" => "One Piece",
        "rating" => 9.0,
        "sinopsis" => 'Dengan kru bajak lautnya, yang dinamakan Bajak Laut Topi Jerami, Luffy menjelajahi Grand Line untuk mencari harta karun terbesar di dunia 
                       yang dikenal sebagai "One Piece" dalam rangka untuk menjadi Raja Bajak Laut yang berikutnya.',
        "gambar" => "one-piece.jpg"
    ],

    [
        "anime" => "Fairy Tail",
        "rating" => 8.5,
        "sinopsis" => 'Ceritanya mengisahkan tentang Natsu Dragneel, anggota dari guild penyihir populer bernama Fairy Tail, 
                       yang bertualang di Earth-land dalam tujuannya untuk mencari seekor naga bernama Igneel.',
        "gambar" => "fairy-tail.jpg"
    ],

    [
        "anime" => "Tensura",
        "rating" => 8.0,
        "sinopsis" => 'menceritakan Dunia Fantasi yang sangat Seru dan Menakjubkan. 
                       Satoru Mikami Hidup sebagai Karyawan Kantor dengan kehidupan yang biasa saja.',
        "gambar" => "tensura.jpg"
    ]
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

    ul {
        width: 320px;
        text-align: justify;
    }

    img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        box-shadow: 0 0 4px 1px black;
    }
</style>
<body>
    <h1>Anime List</h1>
    <?php foreach($animeList as $anime) : ?>
        <ul>
            <img src="img/<?= $anime["gambar"] ?>" alt="">
            <li>Anime: <?= $anime["anime"] ?></li>
            <li>Rating: <?= $anime["rating"] ?></li>
            <li>Sinopsis: <?= $anime["sinopsis"] ?></li>
        </ul>
    <?php endforeach; ?>
</body>
</html>