<?php 

require "functions.php";
$mahasiswa = query("SELECT * FROM mahasiswa");

$no = 1;

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
    img {
        display: flex;
        margin: auto;
        width: 100px;
    }

    .add {
        display: block;
        margin: 20px;
    }

</style>

<body>
    <a href="add.php" class="add">Tambahkan Data</a>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>No.</th>
            <th>Aksi</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jurusan</th>
            <th>Email</th>
            <th>Profile Picture</th>
        </tr>

        <?php foreach($mahasiswa as $mhs) : ?>
        <tr>
            <td><?= $no . "."?></td>
            <td>
                <a href="edit.php?id=<?= $mhs["id"]; ?>">Edit</a> |
                <a href="delete.php?id=<?= $mhs["id"]; ?>" onclick=" return confirm('Aapakah anda yakin ingin menghapus data ini?')">Delete</a> 
            </td>
            <td><?= $mhs["nama"]; ?></td>
            <td><?= $mhs["nim"]; ?></td>
            <td><?= $mhs["jurusan"] ?></td>
            <td><?= $mhs["email"]; ?></td>
            <td><img src="img/<?= $mhs["gambar"]; ?>" alt="" srcset=""></td>
        </tr>
        <?php $no++ ?>
        <?php endforeach; ?>


       
    </table>
</body>
</html>