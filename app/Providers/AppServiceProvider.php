<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        include(app_path().'/Helpers/themeHelper.php');
        include(app_path().'/Helpers/guestHelper.php');
        include(app_path().'/Helpers/appHelper.php');

        view()->composer('layouts.guest.header', function ($view) {
            $menu = menu_guest_main();
            $view->with('menu', $menu);
        });
        view()->composer('layouts.app.header', function ($view) {
            $menu = menu_app_main();
            $view->with('menu', $menu);
        });
    }
}
