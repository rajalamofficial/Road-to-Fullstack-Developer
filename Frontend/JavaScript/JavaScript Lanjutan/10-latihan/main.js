function myPlaylist(playlist, totalVideo, videoDuration){

    // mengambil semua list video dan ubah list nya menjadi Array
    const videos = Array.from(document.querySelectorAll('[data-duration]'));

    // filter list video yang dikirimkan parameter playlist
    const playlistX = videos.filter(video => video.innerHTML.includes(playlist))

    // ambil durasi masing masing video
        .map(durations => durations.dataset.duration)

    // ubah menjadi float & ubah menjadi detik
        .map(times => {
            const time = times.split(':').map(num => parseFloat(num));
            if(time.length == 3) return time[0] * 3600 + time[1] * 60 + time[2];
            // else
            return time[0] * 60 + time[1];
        })

    // jumlahkan semua detik
        .reduce((acc, curValue) => acc + curValue);

    // ubah format detik menjadi JAM : MENIT : DETIK
    const hour = Math.floor(playlistX / 3600);
    const minute = Math.floor(playlistX % 3600 / 60);
    const second = playlistX % 60;

    // simpan ke dalam DOM
    const eachVideos = videos.filter(video => video.innerHTML.includes(playlist)).length;
    const jumlahVideoX = document.querySelector(totalVideo);
    jumlahVideoX.innerHTML = `${eachVideos} video.`;

    const durasiVideoX = document.querySelector(videoDuration);
    durasiVideoX.innerHTML = `${hour} jam, ${minute} menit, ${second} detik.`;

}

myPlaylist('JavaScript Lanjutan', '.jumlahVideoJs', '.durasiVideoJs');
myPlaylist('CSS 3', '.jumlahVideoCss', '.durasiVideoCss');
myPlaylist('SASS', '.jumlahVideoSass', '.durasiVideoSass');
myPlaylist('JavaScript Dasar', '.jumlahVideoJsDasar', '.durasiVideoJsDasar');
