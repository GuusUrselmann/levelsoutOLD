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
    .react('resources/js/AppHomeControl.jsx', 'public/js')
    .react('resources/js/GuestHomeControl.jsx', 'public/js')
    .react('resources/js/AdminDashboardControl.jsx', 'public/js')
    .js('resources/js/AppBehaviour.js', 'public/js')
    .js('resources/js/GuestBehaviour.js', 'public/js')
    .js('resources/js/AdminBehaviour.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/layout_app.scss', 'public/css')
    .sass('resources/sass/layout_guest.scss', 'public/css')
    .sass('resources/sass/layout_admin.scss', 'public/css')
    .sass('resources/sass/responsive_guest.scss', 'public/css')
    .sass('resources/sass/blocks_app.scss', 'public/css')
    .sass('resources/sass/blocks_guest.scss', 'public/css')
    .sass('resources/sass/blocks_admin.scss', 'public/css')
    .sass('resources/sass/grid_admin.scss', 'public/css');
