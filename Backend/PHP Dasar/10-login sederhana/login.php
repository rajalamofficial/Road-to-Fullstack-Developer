<?php 

// cek apakah tombol submit sudah di click
if(isset($_POST["submit"])){
    // cek apakah username dan password benar
    if($_POST["username"] == "Azura" && $_POST["password"] == "123") {
        // jika username dan password benar maka redirect ke halaman admin
        header("Location: admin.php");
        exit;
    } else if($_POST["username"] == "" || $_POST["password"] == "") {
        // jika username dan password kosong
        $empty = true;
    } else {
        // jika username dan password salah tampilkan pesan kesalahan
        $wrong = true;
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #7C3E66;
        }

        .middle {
            width: 100%;
            height: 95vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
        }

        .container {
            box-sizing: border-box;
            padding: 20px;
            background-color: #F2EBE9;
            width: 400px;
            height: 450px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 0 3px 1px black;
        }

        form input {
            text-align: center;
            display: block;
            margin: auto;
            border-radius: 30px;
           
        }

        form input[type="text"], form input[type="password"] {
            width: 200px;
            padding: 10px;
            margin: 10px auto;
            background-color: transparent;
            border: none;
            outline: none;
            transition: .3s ease-out;
            border: 2px solid black;
        }

        form input[type="text"]:focus, form input[type="password"]:focus {
            width: 230px;
            border-color: #7C3E66;
        }

        form input[type="submit"] {
            width: 100px;
            padding: 10px;
        }

        form input[type="submit"]:hover {
            cursor: pointer;
            width: 100px;
            padding: 10px;
            background-color: #7C3E66;
            color: white;
        }

    </style>
</head>
<body>
    <div class="middle">
        <div class="container">
            <form action="" method="POST">
                <?php if(isset($wrong)) : ?>
                    <p style="color: red; font-style:italic;">Username / Password salah!</p>
                <?php endif; ?>
                <?php if(isset($empty)) : ?>
                    <p style="color: red; font-style:italic;">Mohon masukkan username & password!</p>
                <?php endif; ?>
                <h1>Login Form</h1>
                <input type="text" name="username" id="username" placeholder="username">
                <input type="password" name="password" id="password" placeholder="password">
                <input type="submit" value="login" name="submit">
            </form>
        </div>
    </div>
</body>
</html>