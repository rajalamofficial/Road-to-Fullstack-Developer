<?php 

$hari = ["senin", "selasa", "rabu", "kamis"];
print_r($hari);

echo "<br>";

$hari[] = ["jum'at", "sabtu"];
print_r($hari);

echo "<br><br>";

$bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus"];

// for loop array
for($i = 0; $i < count($bulan); $i++){
    echo $bulan[$i];
}

echo "<br>";

// latihan
$angka = [4, 2, 7, 1, 3, 10, 8, 24];


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

    body {
        width: 100%;
        height: 100vh;
    }

    .container {
        border: 1px solid black;
        margin: auto;
        overflow: auto;
    }

    .box {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: violet;
        margin: 3px;
    }

    .clear {
        content: "";
        clear: both;
        display: table;
    }

</style>
<body>
    <div class="container clear">
        <!-- for loop -->
        <?php for($i = 0; $i < count($angka); $i++) : ?>
            <div class="box"><?= $angka[$i]?></div>
        <?php endfor;?>

        <div class="clear"></div>
        
        <!-- foreach -->
        <?php foreach($angka as $a) : ?>
            <div class="box"><?= $a?></div>
        <?php endforeach;?>
    </div>
</body>
</html>