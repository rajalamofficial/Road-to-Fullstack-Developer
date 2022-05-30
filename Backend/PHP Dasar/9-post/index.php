<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    h1 {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        height: 200px;
        margin: 20px auto;
        padding: 10px;
        border: 2px solid black;
    }

    form > * {
        text-align: center;
        margin: 3px;
    }

    form button {
        width: 60px;
        margin: 5px auto;
    }
</style>
<body>
    <form action="post.php" method="post">
        <h2>Please input this field!</h2>
        <input type="text" name="nama" id="" placeholder="Your name?">
        <input type="submit" name="submit" value="submit">
    </form>
</body>
</html>