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
const cache = require('gulp-cache')
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');


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

function imagenes(done){

    const opciones = {
        optimizationLevel:3
    }

    src('src/img/**/*.{png,jpg}')
    .pipe( cache( imagemin(opciones)))
    .pipe( dest( 'build/img') )

    done();
}

function versionAvif(done){
    
    const opciones = {
        quality:50
    };

    src('src/img/**/*.{png,jpg}')
    .pipe(  avif(opciones) )
    .pipe(dest("build/img"))

    done();
}

//convertir imagenes en webp
function versionWebp(done){
    
    const opciones = {
        quality:50
    };

    src('src/img/**/*.{png,jpg}')
    .pipe(  webp(opciones) )
    .pipe(dest("build/img"))

    done();
}

function javascript( done ){
    src ('src/js/**/*.js')
    .pipe( dest('build/js'));

    done()
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch('src/js/**/*.js',javascript)
    done();
}




exports.css = css;
exports.imagenes=imagenes;
exports.versionAvif=versionAvif
exports.versionWebp = versionWebp;
exports.dev = parallel( versionAvif,imagenes,versionWebp,javascript,dev);

