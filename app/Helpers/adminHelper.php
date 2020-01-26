<?php

/**
 * menu_admin_sidebar
 */

if(!function_exists('menu_admin_sidebar')) {
    function menu_admin_sidebar() {
        $menu_items = [
            'dashboard' => [
                'name' => 'dashboard',
                'display_name' => 'dashboard',
                'slug' => 'menuitem_dashboard',
                'site_url' => 'admin/dashboard',
                'icon' => 'home',
                'permissions' => [],
                'submenu' => []
            ],
            'users' => [
                'name' => 'users',
                'display_name' => 'users',
                'slug' => 'menuitem_users',
                'site_url' => 'admin/users',
                'icon' => 'user',
                'permissions' => [],
                'submenu' => [
                    'users-all' => [
                        'name' => 'users-all',
                        'display_name' => 'all users',
                        'slug' => 'menuitem_users-all',
                        'site_url' => 'admin/users',
                        'permissions' => []
                    ]
                ]
            ]
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
