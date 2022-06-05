<?php 

// menghubungkan dengan database
$db = mysqli_connect("localhost", "root", "", "universitas azura");

function query($query){
    global $db;
    $tableMahasiswa = mysqli_query($db, $query);

    $arrayMahasiswa = [];

    while($dataMahasiswa = mysqli_fetch_assoc($tableMahasiswa)){
        $arrayMahasiswa[] = $dataMahasiswa;
    }

    return $arrayMahasiswa;

}

function add($method){
    global $db;

    // tombol button jika sudah ditekan
    if(isset($method["submit"])){
        $nama = $method["nama"];
        $nim = $method["nim"];
        $jurusan = $method["jurusan"];
        $email = $method["email"];
        $gambar = $method["gambar"];

        $query = "INSERT INTO mahasiswa VALUES(
            '', '$nama', '$nim', '$jurusan', '$email', '$gambar'
        )";
        mysqli_query($db, $query);

        // cek apakah data berhasil ditambahkan atau tidak
        if(mysqli_affected_rows($db) > 0){
            echo "<script>
                    alert('Data berhasil ditambahkan!');
                    window.location.href = 'index.php';
                  </script>";
        } else {
            echo "<script>
                    alert('Data gagal ditambahkan!');
                  </script>"; 
        }
    }
}

function detele($id){
    global $db;

    $data = mysqli_query($db, "DELETE FROM mahasiswa where id = $id");

    if($data == true){
        echo "<script>
                alert('Data berhasil dihapus!');
                window.location.href = 'index.php';
            </script>";
    } else {
        echo "<script>
                alert('Data gagal dihapus!');
                window.location.href = 'index.php';
            </script>";
    }
}

function edit($id){
    global $db;

    $method = $_POST;

    if(isset($method["submit"])){
        $nama = $method["nama"];
        $nim = $method["nim"];
        $jurusan = $method["jurusan"];
        $email = $method["email"];
        $gambar = $method["gambar"];

        $data = mysqli_query($db, "UPDATE mahasiswa SET
                            nama = '$nama',
                            nim = '$nim',
                            jurusan = '$jurusan', 
                            email = '$email', 
                            gambar = '$gambar' WHERE id = $id");

        if($data == true){
            echo "<script>
                    alert('Data berhasil diupdate!');
                    window.location.href = 'index.php';
                </script>";
        } else {
            echo "<script>
                    alert('Data gagal diupdate!');
                    window.location.href = 'index.php';
                </script>";
        }
    }
}

?>