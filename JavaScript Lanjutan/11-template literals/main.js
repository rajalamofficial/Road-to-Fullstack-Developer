// HTML fragments
const mhs = {
    nama: "Azura",
    nim: "5592235",
    email: "rajalamofficial@gmail.com"
}

const el = `<div class="mahasiswa">
    <h2>${mhs.nama}</h2>
    <p>${mhs.nim}</p>
</div>`;

document.body.innerHTML = el;

// looping
const mhs2 = [
    {
        nama: "Azura",
        nim: "5592235"
    },
    {
        nama: "Alam",
        nim: "1935586"
    },
    {
        nama: "Marsha",
        nim: "24082004"
    }
]

const el2 = `<div class="mahasiswa">
    ${mhs2.map(obj => 
        `<ul>
            <li>${obj.nama}</li>
            <li>${obj.nim}</li>
        </ul>`).join('')
    }
</div>`;

document.body.innerHTML = el2;


// ternary
const lagu = {
    judul: "BBB",
    penyanyi: "Azura",
    feat: "Marsha"
}

const el3 = `<div class="lagu">
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.penyanyi} ${lagu.feat ? `(ft. ${lagu.feat})` : ''}</li>
    </ul>
</div>`

document.body.innerHTML = el3;

// nested function
const mahasiswa = {
    nama: "Azura",
    semester: 7,
    mataKuliah: [
        "Pemrograman Web",
        "Perancangan Sistem Berorientasi Objek",
        "Kalkulus",
        "Game Development",
        "Jaringan"
    ]
}

function cetakMataKuliah(mataKuliah) {
    return ` <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el4 = ` <div class="mahasiswa">
    <h1>${mahasiswa.nama}</h1>
    <p>Semester ${mahasiswa.semester}</p>
    <h2>Mata Kuliah:</h2>
    ${cetakMataKuliah(mahasiswa.mataKuliah)}
</div>`

document.body.innerHTML = el4;
