function tarea(done) {
    console.log("Mi primer tarea");
    done();
}

exports.primerTarea = tarea;

const { src, dest, watch, parallel } = require("gulp");
//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
//Imagenes
const webp = require('gulp-webp');


//Compilar el sass a css
function css(done) {
    //    console.log("Compilando SASS...");
    //Identificar el archivo .scss a compilar
    src("src/scss/app.scss") //Aquí está el cambio que hice
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarlo

    done();
}

function versionWebp(done){
    
    const opciones = {
        quality:50
    };

    src('src/img/**/*.{png,jpg}')
    .pipe(  webp(opciones) )
    .pipe(dest("build/img"))

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp,dev);

