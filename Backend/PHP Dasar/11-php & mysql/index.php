<?php 

// koneksi ke database
$db = mysqli_connect("localhost", "root", "", "pt. azura");

// ambil data dari table karyawan / query karyawan
$tableKaryawan = mysqli_query($db, "SELECT * FROM karyawan");

// ambil data (fetch) karyawan dari object result

// mysqli_fetch_row()        mengembalikan nilai array numeric
// mysqli_fetch_assoc()      mengembalikan nilai array associative
// mysqli_fetch_array()      mengembalikan nilai array numeric & associative
// mysqli_fetch_object()     mengembalikan object

// while ($karyawan = mysqli_fetch_assoc($tableKaryawan)){
//     var_dump($karyawan);
// };

$i = 1;

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

        <?php while($karyawan = mysqli_fetch_assoc($tableKaryawan)) : ?>
        <tr>
            <td><?= $i ?></td>
            <td>
                <a href="">Add</a> |
                <a href="">Delete</a>
            </td>
            <td><?= $karyawan["nama"]; ?></td>
            <td><?= $karyawan["nik"]; ?></td>
            <td><?= $karyawan["email"]; ?></td>
            <td><img src="img/<?= $karyawan["gambar"]; ?>" alt="" srcset=""></td>
        </tr>
        <?php $i++; ?>
        <?php endwhile; ?>

    </table>
</body>
</html>