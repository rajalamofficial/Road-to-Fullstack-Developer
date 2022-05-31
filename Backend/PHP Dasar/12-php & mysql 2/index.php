<?php 

require 'functions.php';
$karyawan = query("SELECT * FROM karyawan");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            display: flex;
            width: 80px;
            margin: auto;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>No.</th>
            <th>Action</th>
            <th>Nama</th>
            <th>NIK</th>
            <th>Email</th>
            <th>Profile Picture</th>
        </tr>

        <?php foreach($karyawan as $eachKaryawan) : ?>
        <tr>
            <td>1.</td>
            <td><?= $eachKaryawan["nama"]; ?></td>
            <td>
                <a href="">Add</a> |
                <a href="">Delete</a>
            </td>
            <td><?= $eachKaryawan["nik"]; ?></td>
            <td><?= $eachKaryawan["email"]; ?></td>
            <td><img src="img/<?= $eachKaryawan["gambar"]; ?>" alt=""></td>
        </tr>
        <?php endforeach; ?>

    </table>
</body>
</html>