<?php 

// koneksikan ke database
$db = mysqli_connect("localhost", "root", "", "pt. azura");

// mengambil data dari table karyawan
function query($query){
    global $db;
    $tableKaryawan = mysqli_query($db, $query);

    // simpan data ke dalam wadah array
    $dataKaryawan = [];

    while($karyawan = mysqli_fetch_assoc($tableKaryawan)) {
        $dataKaryawan[] = $karyawan;
    }
    return $dataKaryawan;
}

?>