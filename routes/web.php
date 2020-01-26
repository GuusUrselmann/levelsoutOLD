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
Route::get('/home', 'App\AppHomeController@home');
Route::get('/about', 'Guest\GuestHomeController@about');
Route::get('/termsofservice', 'Guest\GuestHomeController@termsofservice');
Route::get('/privacypolicy', 'Guest\GuestHomeController@privacypolicy');
Route::get('/byron', 'Guest\GuestHomeController@byron');

Route::group(['prefix'=>'/app'], function () {
    Route::get('/', 'App\AppHomeController@home');
    Route::get('/home', 'App\AppHomeController@home');
    Route::post('/tasksubmit', 'App\AppHomeController@taskSubmit');

});
Route::group(['prefix'=>'/admin'], function() {
    Route::get('/', 'Admin\AdminDashboardController@dashboard');
    Route::get('/home', 'Admin\AdminDashboardController@dashboard');
    Route::get('/dashboard', 'Admin\AdminDashboardController@dashboard');
    Route::group(['prefix'=>'/users'], function() {
        Route::get('/', 'Admin\AdminUsersController@users');
        Route::get('/{id}', 'Admin\AdminUsersController@user');
        Route::get('/{id}/edit', 'Admin\AdminUsersController@userEdit');
        Route::post('/{id}/edit', 'Admin\AdminUsersController@userEditSave');
        Route::post('/{id}/delete', 'Admin\AdminUsersController@userDelete');
    });
});
Route::group(['prefix'=>'/api'], function () {
    Route::post('/homeprofile', 'APIController@homeProfile');
    Route::post('/hometasks', 'APIController@homeTasks');
    Route::post('/admindashboardsubmissions', 'APIController@adminDashboardSubmissions');
});
