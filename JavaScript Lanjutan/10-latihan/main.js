// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JavaScript Lanjutan'
const jsLanjut = videos.filter(video => video.textContent.includes('JavaScript Lanjutan'))

// ambil durasi masing masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menjadi detik
    .map(waktu => {
        // [23:13] => [23, 13]
        const parts = waktu.split(':').map(part => parseFloat(part))
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan detik
    .reduce((total, detik) => {
        return total + detik;
    })

// ubah menjadi jam, menit, detik
    const jam = Math.floor(jsLanjut / 3600);
    const menit = Math.floor(jsLanjut % 3600 / 60);
    const detik = jsLanjut % 60;

// simpan ke DOM
    const jumlahVideo = videos.filter(video => video.textContent.includes('JavaScript Lanjutan')).length;
    const pJumlahVideo = document.querySelector('.jumlahVideo')
    pJumlahVideo.textContent = `${jumlahVideo} video.`;

    const pDurasiVideo = document.querySelector('.durasiVideo');
    pDurasiVideo.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`

console.log(detik);