<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .warna {
            background-color: grey;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding="20" cellspacing="0">
        <?php   
            // for($i = 1; $i <= 3; $i++){
            //     echo "<tr>";
            //         for($j = 1; $j <= 5; $j++){
            //             echo "<td>$i,$j</td>";
            //         }
            //     echo "</tr>";
            // }
        ?>

        <?php for($i = 1; $i <= 5; $i++) : ?>
            <?php if($i % 2 == 1) : ?>
            <tr class="warna">
            
            <?php else : ?>
            <tr>
            <?php endif; ?>
                <?php for($j = 1; $j <= 5; $j++) : ?>
                    <td><?= "$i, $j"?></td>
                <?php  endfor; ?>
                
            </tr>
        <?php  endfor; ?>
        
    </table>    
</body>
</html>