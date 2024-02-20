document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
};

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(i = 0 ; i <= 12 ;i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = 
        '<source srcset="build/img/thumb/${i}.avif" type="image/avif"><source srcset="../build/img/thumb/${i}.webp" type="image/webp"><img loading="lazy" width="200" height="300" src="build/img/thumb/${1}.jpg" alt="imagen_galeria">' 
        galeria.appendChild(imagen);
    }
}