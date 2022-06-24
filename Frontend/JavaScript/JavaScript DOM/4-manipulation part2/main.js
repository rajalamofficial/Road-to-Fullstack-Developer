/*  document.createELement()
    document.createTextNode()
    node.appendChild()
    node.insertBefore()
    parentNode.removeChild()
    parentNode.replaceChild()
*/ 

// buat element baru
const pBaru = document.createElement('p');

// buat teks
const textP = document.createTextNode('Hewwo World');

// simpan text ke dalam element <p>
pBaru.appendChild(textP);

// simpan ke dalam section a 
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// --------------------------------------------------------

// buat element baru
const imgBaru = document.createElement('img');

// buat attribute baru
const srcAttribute = imgBaru.setAttribute('src', 'dc.png');
const widthAttribute = imgBaru.setAttribute('width', '80px');
const classBaru = imgBaru.classList.add('center');

// simpan ke dalam section b sebelum li 3
const ul = document.querySelector('section#b ul');
const li3 = ul.querySelector('li:nth-child(3)');

ul.insertBefore(imgBaru, li3);

// --------------------------------------------------------

// remove
const a = sectionA.getElementsByTagName('a')[0];
 sectionA.removeChild(a);

// --------------------------------------------------------

// buat element dan teks
const h2 = document.createElement('h2');
const h2P = document.createTextNode('Judul Baru');
h2.appendChild(h2P);

// ambil section b dan element p
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// replace element
sectionB.replaceChild(h2, p4);