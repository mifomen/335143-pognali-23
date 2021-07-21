let gulp = require('gulp');
let bs = require('browser-sync').create();
let plumber = require('gulp-plumber');
let less = require('gulp-less');
let autoprefixer = require('gulp-autoprefixer')
let postcss= require( 'gulp-postcss' )
let mqpacker= require( 'css-mqpacker' )
let rename = require('gulp-rename');
let csso = require('gulp-csso');
let rm = require( 'gulp-rm' )
// let sourcemaps = require('gulp-sourcemaps');

gulp.task('less',function () {
    return gulp.src('source/**/*.less')
    // .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(less()).on('error', less.logError)
    // .pipe(sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
    // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
    .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
    // .pipe(uncss({
    //   html: ['./build/index.html']
    // }))
    // .pipe(autoprefixer({
    //   browsers: ['last 10 versions', "IE 11", "IE 10"],
    //   cascade: true
    // }))
    // .on("error", notify.onError({
    //   title: "Error in scss"
    // }))
    // .pipe(stripCssComments())
    // .pipe(csso())
    .pipe(rename('style.min.css'))
    // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
    .pipe(gulp.dest('build/css'))
    .pipe(bs.reload({
      stream: true
    }))
  })

 gulp.task('less-final',function () {
    return gulp.src('source/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
    // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
    .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
    // .pipe(uncss({
    //   html: ['./build/index.html']
    // }))
    .pipe(autoprefixer({
      cascade: true
    }))
    // .on("error", notify.onError({
    //   title: "Error in scss"
    // }))
    // .pipe(stripCssComments())
    .pipe(csso())
    .pipe(rename('style.min.css'))
    // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
    .pipe(gulp.dest('build/css'))
    .pipe(bs.reload({
      stream: true
    }))
  })



gulp.task('script', function() {
    return gulp.src('source/**/app.js')
    .pipe(plumber())
    // .pipe(uglify())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(bs.reload({
      stream: true
    }))
  })

gulp.task('html', function (){
  return gulp.src(['source/**/*.html'])
  .pipe(gulp.dest('build/'))
      .pipe(bs.reload({
      stream: true
    }))
 })

gulp.task('copy-img', function (){
  return gulp.src(['source/img/**/*.*'])
  .pipe(gulp.dest('build/img'))
  .pipe(bs.reload({
    stream: true
  }))
})


gulp.task('copy-favicon', function (){
  return gulp.src(['source/favicon.png'])
  .pipe(gulp.dest('./build'))
  .pipe(bs.reload({
    stream: true
  }))
})

// manifest.webmanifest
gulp.task('copy-webmanifest', function (){
  return gulp.src(['source/manifest.webmanifest'])
  .pipe(gulp.dest('./build'))
  .pipe(bs.reload({
    stream: true
  }))
})



gulp.task('clear', function() {
  return gulp.src( 'build/**/*', { read: false })
  .pipe(rm({
   async: true
  }) )
 })

gulp.task('build',
  gulp.series(
      'clear',
      // 'copy-fonts',
      // 'copy-css',
      // 'copy-css-54',
      // 'html2pug',
      // 'pug',
      // 'html',
      // 'img',
      // 'svg',
      'copy-favicon',
      'copy-webmanifest',
      'copy-img',
      'html',
      'less',
      'script',
      // 'scripts:lib',
      // 'script'
      // $.gulp.parallel('html','img', 'scss'),
      // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
    ));



  gulp.task('serve', function (){
    bs.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),
    gulp.watch('source/css/less/**/*.less',  gulp.parallel('less'));
    gulp.watch('source/**/*.html',  gulp.parallel('html'));
    gulp.watch('source/**/*.js',  gulp.parallel('script'));
    gulp.watch('source/**/*.{png,jpg,jpeg,svg}',  gulp.parallel('copy-img'));
    gulp.watch('source/manifest.webmanifest',  gulp.parallel('copy-webmanifest'));



  })
