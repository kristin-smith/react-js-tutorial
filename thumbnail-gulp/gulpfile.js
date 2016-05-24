var gulp = require('gulp');
var gutil = require('gulp-util');  //useful for console logging and debugging
var source = require('vinyl-source-stream');  //handles text files during build
var browserify = require('browserify');  // manages dependencies between files during loading
var watchify = require('watchify'); //automatically reruns the gulp file whenever components change!
var reactify = require('reactify'); //converts JSX into Javascript

gulp.task('default', function(){
    var bundler = watchify(browserify({   // creating a bundler that runs the whole code base
        entries:['./src/app.jsx'], //files that will be loaded, starting at the most parent component and working down 
        transform:[reactify], //this will change based on your framework
        extension: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    })); // close the bundler with a semicolon
    
    function build(file){
        if(file) gutil.log('recompiling' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    };
    build()
    bundler.on('update', build)
});
