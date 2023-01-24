// webpack.mix.js

let mix = require('laravel-mix');
require('laravel-mix-compress');

mix
   .js('assets/scripts/main.js', 'dist/scripts/main.js')

   .sass('assets/styles/main.scss', 'dist/styles/main.css')
   .sass('assets/styles/admin.scss', 'dist/styles/admin.css')
   .sass('assets/styles/magnific-popup.scss', 'dist/styles/magnific-popup.css')
   //.compress();


   //Block style
//    .sass('blocks/section-headline/section-headline.scss', 'blocks/section-headline/section-headline.css')
//    .sass('blocks/section-text/section-text.scss', 'blocks/section-text/section-text.css')
//    .sass('blocks/section-company/section-company.scss', 'blocks/section-company/section-company.css')
//    .sass('blocks/section-hedlinesub/section-hedlinesub.scss', 'blocks/section-hedlinesub/section-hedlinesub.css')

mix.options({processCssUrls: false});

// mix.compress({
//     productionOnly: false,
//     minRatio: 1
// });

// Sourcemaps
if (!mix.inProduction()) {
    mix.sourceMaps()
      .webpackConfig({
      devtool: 'inline-source-map'
    });
  }

mix.webpackConfig({
   stats: {
         children: true,
   },
}); 