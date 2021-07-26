<<<<<<< HEAD
let gulp = require("gulp");
let bs = require("browser-sync").create();
let plumber = require("gulp-plumber");
let less = require("gulp-less");
let autoprefixer = require("gulp-autoprefixer")
let postcss= require( "gulp-postcss" )
let mqpacker= require( "css-mqpacker" )
let rename = require("gulp-rename");
let csso = require("gulp-csso");
let rm = require( "gulp-rm" )
// let stylelint   = require("stylelint");
// let sourcemaps = require("gulp-sourcemaps");


// gulp.task("css-lint", function() {

//   // Stylelint config rules
//   let stylelintConfig = {
//     "rules": {

//       "rule-empty-line-before": true,
//       "block-no-empty": true,
//       "color-no-invalid-hex": true,
//       "declaration-colon-space-after": "always",
//       "declaration-colon-space-before": "never",
//       "function-comma-space-after": "always",
//       "function-url-quotes": "double",
//       "media-feature-colon-space-after": "always",
//       "media-feature-colon-space-before": "never",
//       "media-feature-name-no-vendor-prefix": true,
//       "max-empty-lines": 5,
//       "number-leading-zero": "never",
//       "number-no-trailing-zeros": true,
//       "property-no-vendor-prefix": true,
//       "rule-no-duplicate-properties": true,
//       "declaration-block-no-single-line": true,
//       "rule-trailing-semicolon": "always",
//       "selector-list-comma-space-before": "never",
//       "selector-list-comma-newline-after": "always",
//       "selector-no-id": true,
//       "string-quotes": "double",
//       "value-no-vendor-prefix": true
//     }
//   }
//  var processors = [
//     stylelint(stylelintConfig),
//     // Pretty reporting config
//     // reporter({
//     //   clearMessages: true,
//     //   throwError: true
//     // })
//   ];
//     return gulp.src(
//       // Stylesheet source:
//       ['./build/css/style.min.css',
//       // Ignore linting vendor assets:
//       // (Useful if you have bower components)
//       '!app/assets/css/vendor/**/*.css']
//     )
//     .pipe(postcss(processors));
// });


gulp.task("less",function () {
    return gulp.src("source/**/style.less")
    // .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(less()).on("error", less.logError)
    // .pipe(sourcemaps.write({includeContente: false, sourceRoot: "."}))// delete ?
    // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
    .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
    // .pipe(uncss({
    //   html: ["./build/index.html"]
    // }))
    // .pipe(autoprefixer({
    //   browsers: ["last 10 versions", "IE 11", "IE 10"],
    //   cascade: true
    // }))
    // .on("error", notify.onError({
    //   title: "Error in scss"
    // }))
    // .pipe(stripCssComments())
    // .pipe(csso())
    .pipe(rename("style.min.css"))
    // .pipe(sourcemaps.write(".")) // delete "," ? ok ?
    .pipe(gulp.dest("build/css"))
    .pipe(bs.reload({
      stream: true
    }))
  })

 gulp.task("less-final",function () {
    return gulp.src("source/**/*.scss")
    // .pipe(sourcemaps.init())
=======
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
>>>>>>> c680fdc1359e6194d5cd4a74d5570d7a2887864e
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
<<<<<<< HEAD
    // .pipe(sourcemaps.write({includeContente: false, sourceRoot: "."}))// delete ?
    // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
    .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
    // .pipe(uncss({
    //   html: ["./build/index.html"]
    // }))
    .pipe(autoprefixer({
      cascade: true
    }))
    // .on("error", notify.onError({
    //   title: "Error in scss"
    // }))
    // .pipe(stripCssComments())
    .pipe(csso())
    .pipe(rename("style.min.css"))
    // .pipe(sourcemaps.write(".")) // delete "," ? ok ?
    .pipe(gulp.dest("build/css"))
    .pipe(bs.reload({
      stream: true
    }))
  })



gulp.task("script", function() {
    return gulp.src("source/**/app.js")
    .pipe(plumber())
    // .pipe(uglify())
    .pipe(rename("app.js"))
    .pipe(gulp.dest("build/js/"))
    .pipe(bs.reload({
      stream: true
    }))
  })

gulp.task("html", function (){
  return gulp.src(["source/**/*.html"])
  .pipe(gulp.dest("build/"))
      .pipe(bs.reload({
      stream: true
    }))
 })

gulp.task("copy-img", function (){
  return gulp.src(["source/img/**/*.*"])
  .pipe(gulp.dest("build/img"))
  .pipe(bs.reload({
    stream: true
  }))
})

gulp.task("copy-fonts", function (){
  return gulp.src(["source/fonts/**/*.{woff,woff2}"])
  .pipe(gulp.dest("./build/fonts"))
  .pipe(bs.reload({
    stream: true
  }))
})

gulp.task("copy-favicon", function (){
  return gulp.src(["source/favicon.png"])
  .pipe(gulp.dest("./build"))
  .pipe(bs.reload({
    stream: true
  }))
})

// manifest.webmanifest
gulp.task("copy-webmanifest", function (){
  return gulp.src(["source/manifest.webmanifest"])
  .pipe(gulp.dest("./build"))
  .pipe(bs.reload({
    stream: true
  }))
})



gulp.task("clear", function() {
  return gulp.src( "build/**/*", { read: false })
  .pipe(rm({
   async: true
  }) )
 })

gulp.task("build",
  gulp.series(
      "clear",
      "copy-fonts",
      // "copy-css",
      // "copy-css-54",
      // "html2pug",
      // "pug",
      // "html",
      // "img",
      // "svg",
      "copy-favicon",
      "copy-webmanifest",
      "copy-img",
      "html",
      "less",
      "script",
      // "scripts:lib",
      // "script"
      // $.gulp.parallel("html","img", "scss"),
      // $.gulp.parallel("scripts:lib","script")
    // "serve",
    // "watch"
    ));



  gulp.task("serve", function (){
    bs.init({
      server: {
        baseDir: "build"
      },
      notify: false,
      open: true,
      ui: false
    }),
    gulp.watch("source/css/less/**/*.less",  gulp.parallel("less"));
    gulp.watch("source/**/*.html",  gulp.parallel("html"));
    gulp.watch("source/**/*.js",  gulp.parallel("script"));
    gulp.watch("source/**/*.{png,jpg,jpeg,svg}",  gulp.parallel("copy-img"));
    gulp.watch("source/manifest.webmanifest",  gulp.parallel("copy-webmanifest"));



  })
=======
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);
>>>>>>> c680fdc1359e6194d5cd4a74d5570d7a2887864e
