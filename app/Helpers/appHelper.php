<?php

/**
 * menu_app_main
 */
 if(!function_exists('menu_app_main')) {
     function menu_app_main() {
         $menu_items = [
             'home' => [
                 'name' => 'home',
                 'display_name' => 'home',
                 'slug' => 'menuitem_home',
                 'site_url' => 'app/home',
                 'permissions' => [],
                 'submenu' => []
             ],
             'register' => [
                 'name' => 'register',
                 'display_name' => 'signup',
                 'slug' => 'menuitem_register',
                 'site_url' => 'register',
                 'permissions' => [],
                 'submenu' => []
             ],
             // 'users' => [
             //     'name' => 'users',
             //     'display_name' => 'users',
             //     'slug' => 'menuitem_users',
             //     'site_url' => 'admin/users',
             //     'icon' => 'user',
             //     'permissions' => [],
             //     'submenu' => [
             //         'users-all' => [
             //             'name' => 'users-all',
             //             'display_name' => 'all users',
             //             'slug' => 'menuitem_users-all',
             //             'site_url' => 'admin/users',
             //             'permissions' => []
             //         ]
             //     ]
             // ],
             // 'codes' => [
             //     'name' => 'codes',
             //     'display_name' => 'codes',
             //     'slug' => 'menuitem_codes',
             //     'site_url' => 'admin/codes',
             //     'icon' => 'code',
             //     'permissions' => [],
             //     'submenu' => [
             //         'codes-all' => [
             //             'name' => 'codes-all',
             //             'display_name' => 'all codes',
             //             'slug' => 'menuitem_codes-all',
             //             'site_url' => 'admin/codes',
             //             'permissions' => []
             //         ]
             //     ]
             // ]
         ];

         $menu = [];

         foreach($menu_items as $item) {
             // if(has_permissions($item['permissions'])) {
                 $menu[$item['name']] = $item;
             // }
         }

         return $menu;
     }
 }
