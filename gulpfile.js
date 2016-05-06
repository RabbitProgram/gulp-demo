/**
 * Created by admin on 2016/4/28.
 */
var gulp=require('gulp');//基础库
var uglify = require('gulp-uglify'); //文件压缩
var concat = require('gulp-concat'); //文件合并
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var useref = require('gulp-useref');
var minifyCss = require('gulp-minify-css');
gulp.task('default',['usemin']);



gulp.task('usemin',function(){
    gulp.src('src/index.html')
        .pipe(usemin({
            css:[minifyCss()],
            js:[uglify(),rev()]
        }))
        .pipe(gulp.dest('dist/')); //压缩后的路径
});

//gulp.task('uglify',function(){
//   console.log('我是uglify任务');
//    gulp.src('src/js/*.js') //要压缩的文件
//        .pipe(uglify())  //执行压缩
//        .pipe(gulp.dest('dist/')); //压缩后的路径
//});
gulp.task('concat',function(){
    console.log('我是concat任务');
    gulp.src('src/js/*.js')  //要合并的文件
        .pipe(concat('all.js')) // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('dist/'))
});