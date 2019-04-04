//  套件定義
//  在 package.json 內引用的套件

const gulp = require('gulp');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

// 定義路徑

const paths = {
  imagemin: {
    src: 'src/*.jpg',
    dest: 'build/'
  },
};

// 建構工作

const mozjpeg = async () => {
  await imagemin([paths.imagemin.src], paths.imagemin.dest, {
    use: [
      imageminMozjpeg({
        quality: 85
      })
    ]
  });

  console.log('Images optimized');
};

// 監看工作

const watchfiles = async function () {
  gulp.watch(paths.imagemin.src, mozjpeg);
}

// 輸出工作

exports.default = gulp.series(mozjpeg, watchfiles);