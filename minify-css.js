const minify = require('@node-minify/core');
const cssnano = require('@node-minify/cssnano');

minify({
  compressor: cssnano,
  type: 'css',
  input: [
    './public/static/css/aos.min.css',
    './public/static/css/bootstrap.min.css',
    './public/static/css/css.css',
    './public/static/css/css1.css',
    './public/static/css/css2.css',
    './public/static/css/fancybox.min.css',
    './public/static/css/font-awesome.min.css',
    '.public/static/css/pe-icon-7-stroke.css',
    './public/static/css/style.css',
    './public/static/css/swiper.min.css'
  ],
  output: './public/static/css/global.min.css',
  callback: function (err, min) { }
});
