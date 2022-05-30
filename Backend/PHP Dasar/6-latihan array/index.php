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
        display: flex;
    }

    .container {
        margin: auto;
    }

    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: slateblue;
        color: white;
        float: left;
        margin: 8px;
        border-radius: 50%;
        transition: 1s, opacity .3s;
        position: relative;
    }

    .circle::after {
        content: '';        
        position: absolute;
        border-top: 12px solid transparent;
        border-right: 12px solid slateblue;
        border-bottom: 12px solid transparent;
        left: -10px;
    }

    .circle:hover {
        opacity: .8;
        transform: rotate(360deg);
    }

    .clear {
        content: "";
        clear: both;
        display: table;
    }

</style>

<body>
    <?php 
        $numbers = [["1", "2" ,"3"], ["4", "5", "6"], ["7", "8", "9"]];
    ?>

    <div class="container clear">
        <?php foreach($numbers as $number) : ?>
            <?php foreach($number as $n) : ?>
                <div class="circle"><?= $n ?></div>
            <?php endforeach;?>

            <div class="clear"></div>
        <?php endforeach;?>
    </div>
</body>
</html>