<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <script>
            function url() {
                return '<?= url('') ?>';
            }
        </script>
        <script type="text/javascript" src="{{ asset('js/AdminBehaviour.js') }}" defer="defer"></script>

        <link href="https://fonts.googleapis.com/css?family=Assistant&display=swap" rel="stylesheet">
        <link href="{{ asset('fonts/fontawesome-free-5.3.1-web/css/all.min.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/layout_admin.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/blocks_admin.css') }}" rel="stylesheet" type="text/css" >
    </head>
    <body>
        <div class="page-wrapper">
            <header>
                @include('layouts.admin.header')
            </header>
            <main>
                @include('layouts.admin.sidebar')
                <div class="page-content" id="pageContent">
                    <div class="page-sections">
                        @yield('content')
                    </div>
                    <footer>
                        <div class="footer-content">
                        </div>
                        <div class="footer-copyright">
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    </body>
</html>
