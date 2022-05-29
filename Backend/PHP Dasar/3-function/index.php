<?php 

// built-in function
date_default_timezone_set("Asia/Jakarta");
$now = date("l d F Y h:i:s a");

$nextWeek = date("l d F Y", time() + (60 * 60 * 24 * 7));

// mktime
// jam, menit, detik, bulan, tanggal, tahun
$myBirthday = date("l d F Y", mktime(0,0,0, 8 , 24, 2004));

// strtotime
$myBirthday2 = date("l d F Y", strtotime("24 august 2004"));


// user defined function

function sayHello($nama = "tuan", $waktu = "datang"){
    return "Selamat $waktu, $nama";
}
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
    <h1><?= $now ?></h1>
    <p>Next Week: <?= $nextWeek?></p>
    <p>My birthday: <?= $myBirthday?></p>
    <p>My birthday2: <?= $myBirthday2?></p>
    <h2><?= sayHello("Azura", "Siang");?></h2>
</body>
</html>