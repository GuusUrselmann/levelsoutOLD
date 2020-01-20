<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', 'Guest\GuestHomeController@home');
Route::get('/home', 'Guest\GuestHomeController@home');
Route::get('/about', 'Guest\GuestHomeController@about');
Route::get('/termsofservice', 'Guest\GuestHomeController@termsofservice');
Route::get('/privacypolicy', 'Guest\GuestHomeController@privacypolicy');

Route::group(['prefix'=>'/app'], function () {
    Route::get('/home', 'App\AppHomeController@home');

});
Route::group(['prefix'=>'/api'], function () {
    Route::post('/homeprofile', 'APIController@homeProfile');
});
