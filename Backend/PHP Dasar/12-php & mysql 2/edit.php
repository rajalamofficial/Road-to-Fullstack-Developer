<?php 

require "functions.php";

$id = $_GET["id"];

$data = query("SELECT * FROM mahasiswa WHERE id = $id")[0];

edit($id);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        .colon{
            padding-left: 23px;
        }

        .colon.one {
            padding-left: 16px;
        }

        .colon.three {
            padding-left: 6px;
        }

        .colon.four {
            padding-left: 16px;
        }

        .colon.five {
            padding-left: 3px;
        }

        label {
            display: inline-block;
            padding: 5px;
        }

        input {
            display: inline-block;
            padding: 3px;
        }

    </style>
</head>
<body>
    <a href="index.php">kembali</a>
    <form action="" method="post">
        <ul>
            <li>
                <label for="nama">Nama<span class="colon one">:</span></label>
                <input type="text" name="nama" id="nama" required value="<?= $data["nama"]; ?>">
            </li>
            <li>
                <label for="nim">NIM<span class="colon two">:</span></label>
                <input type="number" name="nim" id="nim" required value="<?= $data["nim"]; ?>">
            </li>
            <li>
                <label for="jurusan">Jurusan<span class="colon three">:</span></label>
                <input type="text" name="jurusan" id="jurusan" required value="<?= $data["jurusan"]; ?>">
            </li>
            <li>
                <label for="email">Email<span class="colon four">:</span></label>
                <input type="email" name="email" id="email" required value="<?= $data["email"]; ?>">
            </li>
            <li>
                <label for="gambar">Gambar<span class="colon five">:</span></label>
                <input type="text" name="gambar" id="gambar" required value="<?= $data["gambar"]; ?>">
            </li>
            <li>
            <button type="submit" name="submit">Update data!</button>
            </li>
        </ul>
    </form>
</body>
</html>
