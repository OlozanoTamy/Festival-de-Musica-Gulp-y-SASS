function tarea(done) {
    console.log("Mi primer tarea");
    done();
}

exports.primerTarea = tarea;

const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
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

function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.dev = dev;

