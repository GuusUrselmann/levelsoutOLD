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

Route::get('/', function () {
    return view('welcome');
});
Route::group(['prefix'=>'/app'], function () {
    Route::get('/home', 'App\AppHomeController@home');

});
Route::group(['prefix'=>'/api'], function () {
    Route::group(['prefix'=>'/users'], function() {
        Route::get('', 'Api\ApiUsersController@users');
        Route::get('/{id}', 'Api\ApiUsersController@user');
    });
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
