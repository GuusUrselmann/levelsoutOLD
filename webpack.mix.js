const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.jsx', 'public/js')
    .react('resources/js/AppControl.jsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/layout_app.scss', 'public/css')
    .sass('resources/sass/blocks_app.scss', 'public/css');
