var gulp = require("gulp");
  
// 让gulp知道我想干啥 : 
// 1. 压缩;
// 2. 服务器开启转存;

// 获取 gulp 指令后面 输入的内容;
const arg = process.argv.splice(2);
if(arg[0] === "run"){
      // 执行服务器开启及转存相关的内容;
      var connect = require('gulp-connect');
      var sass = require('gulp-sass');
      sass.compiler = require('node-sass');
      var proxy = require("http-proxy-middleware");

      gulp.task("connect" , async ()=>{
            connect.server({
                  root : "./dist",
                  port : 8888,
                  // 开启自动刷新;
                  livereload : true,
                  middleware: function() {
                        return [
                              proxy("/pxx" ,{
                                    target : "https://apiv2.pinduoduo.com/api/gindex/subject/limited/goods/",
                                    changeOrigin : true,
                                    pathRewrite : {
                                         "/pxx" : ""
                                    }
                              })
                        ];
                  }
            });
      })    

      gulp.task("html" , async ()=>{
            // 把数据变成流;
            await gulp.src(["./src/html/*.html"])
            // 把*.html 转存到 dist 文件夹之下;
            .pipe(gulp.dest("./dist/html"))
            .pipe(connect.reload());
      })
      
      gulp.task("javascripts" , async ()=>{
            await gulp.src(["./src/js/**/*.js"])
                  .pipe(gulp.dest("./dist/js"))
                  .pipe(connect.reload())
      })

      gulp.task("scss" , async ()=>{
            await gulp.src(["./src/scss/*.scss"])
                  .pipe(sass().on('error', sass.logError))
                  .pipe(gulp.dest("./dist/css"))
                  .pipe(connect.reload())
      })

      gulp.task("watch" , async ()=>{
            gulp.watch( ["./src/html/*.html"], gulp.series(["html"]) )
            gulp.watch( ["./src/js/**/.*.js"] , gulp.series(["javascripts"]) )
            gulp.watch( ["./src/scss/*.scss"] , gulp.series(["scss"]) )
      })
      

      gulp.task("run" , gulp.parallel("javascripts","connect" , "watch"))
}

if(arg[0] === "build"){
      var babel = require('gulp-babel');
      var uglify = require('gulp-uglify');
      var sass = require('gulp-sass');
      sass.compiler = require('node-sass');
      
      gulp.task("html" , async ()=>{
            await gulp.src(["./src/html/*.html"])
            .pipe(gulp.dest("./dist/html"))
      })
      
      gulp.task("javascripts" , async ()=>{
            await gulp.src(["./src/js/**/*.js"])
            // 把javasciprt es6 的代码转换成es5;
                  .pipe(babel({
                        presets: ['@babel/env']
                  }))
                  .pipe(uglify())
                  .pipe(gulp.dest("./dist/js"))
      })

      gulp.task("scss" , async ()=>{
            await gulp.src(["./src/scss/*.scss"])
                  .pipe(sass().on('error', sass.logError))
                  .pipe(gulp.dest("dist/css"))
      })

      gulp.task("build" , gulp.series(["html","javascripts","scss"]))
}