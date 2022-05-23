const mhs = {
    nama: "Azura",
    umur: 18,
    email: "rajalamofficial@gmail.com"
}

function cetakString(strings, ...args) {
    // let results = '';
    // strings.forEach((element, i) => {
    //     results += `${element} ${args[i] || ''}`
    // });

    // return results;

    return strings.reduce((results, element, i) => {
        return `${results}${element}<span class="bg-color">${args[i] || ''}</span>`
    }, '')
}

const str = cetakString`Halo nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun.`;
document.body.innerHTML = str;

