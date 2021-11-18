const {dest, src, watch} = require('gulp');
const sass = require('gulp-sass')

function css(){
  return src('src/**/*.scss')
    .pipe(sass({
      outputStyle:'expanded'
    }))
    .pipe(dest('./css'))
}

function watcharchivos(){
  watch('./src/app.scss',css);
}

exports.watcharchivos = watcharchivos;
exports.css = css;

