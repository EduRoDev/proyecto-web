
let gallery = document.querySelector('#carousel');
let imgs = gallery.querySelectorAll('img');
let index = 0;
let forward = true;

setInterval(function () {
    const percentage = index * -100;
    gallery.style.transform = "translateX(" + percentage + "%)";
    if (!forward) {
        index--;
        if (index < 0) {
            forward = true; 
            index = 0;
        }
    } else {
        index++;
        if (index >= imgs.length) {
            forward = false; 
            index = imgs.length - 1; 
        }
    }
}, 2000);


