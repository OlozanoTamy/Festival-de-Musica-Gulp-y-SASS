function tarea(done){
    console.log('Mi primer tarea');
    done();
}

exports.primerTarea = tarea;


const { watch } = require("fs");   //Llama las apis de estas dependencias
const { src , dest } = require("gulp");
const sass = require("gulp-sass") (require("sass")); //Comunica sass con gulp npm i -d gulp-sass

function css( done ){
    src("src/scss/app.scss") //Identificar el archivo de SASS
        .pipe(sass()) //Compilarlo
        .pipe(dest("build/css"))
        
    done();
}



function dev( cv ){
    watch("src/scss/app.scss", css);
    cv();
}
exports.css = css;
exports.dev = dev;