<?php 

$mahasiswa = [["Azura", "0325896", "Informatika", "azura@gmail.com"],
            ["Raj", "03258342", "Sistem Informasi", "raj@gmail.com"],
            ["Alam", "0325234", "Sastra Inggris", "alam@gmail.com"],
            ["Marsha", "032235", "DKV", "marsha@gmail.com"],
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
<body>
    <h1>Data Mahasiswa</h1>
    <?php foreach($mahasiswa as $m) : ?>
        <ul>
            <li>Nama: <?= $m[0]?></li>        
            <li>NRP: <?= $m[1]?></li>        
            <li>Jurusan: <?= $m[2]?></li>        
            <li>Email: <?= $m[3]?></li>        
        </ul>    
    <?php endforeach;?>

</body>
</html>