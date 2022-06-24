var number  = 0;
var caption = document.getElementById('caption');
var text    = ['Tsundere', 'Yandere', 'Dandere', 'Kuudere', 'Horny Ver >//<'];

function change(digit){
    change_image(digit);
}

function previous(){
    number--;
    if(number < 0) number = 4;
    change_image(number);
}

function next(){
    number++;
    if(number > 4) number = 0;
    change_image(number);
}

function change_image(digit) {
    number = digit;
    var location = 'gallery/' + digit + '.jpg';
    document.getElementById('image').src = location;
    caption.innerHTML = text[digit];
    return false;
}