
let gallery = document.querySelector('#carousel'); 
let imgs = gallery.querySelectorAll('img');
let index = 0;

setInterval(function(){
    let percentage = index * -100;
    gallery.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index >= imgs.length) {
        index = 0;
    }
}, 2000);


