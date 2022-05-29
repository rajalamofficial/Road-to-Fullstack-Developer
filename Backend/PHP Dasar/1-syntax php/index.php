<?php 
// standar output
// echo, print
// print_r
// var_dump

// variable
$nama = "Raj";
$nama .= " "; 
$nama .= "Alam";

// Aritmatika
$a = 10;
$b = 14;
echo $a + $b;

// perbandingan
$x = 10;
$y = 20;

var_dump($x < $y && $x == $y);
var_dump(20 < 10 || 24 == "24")

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
    <h1><?php echo "Halo nama saya $nama"; ?>
    </h1>
</body>
</html>