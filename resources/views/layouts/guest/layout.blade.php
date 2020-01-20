<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <script type="text/javascript">
            function url() {
                return '<?= url('') ?>';
            }
        </script>
        <script type="text/javascript" src="{{ asset('js/GuestBehaviour.js') }}" defer="defer"></script>

        <link href="https://fonts.googleapis.com/css?family=Assistant&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap" rel="stylesheet">
        <link href="{{ asset('fonts/fontawesome-free-5.3.1-web/css/all.min.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/layout_guest.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/blocks_guest.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/responsive_guest.css') }}" rel="stylesheet" type="text/css" >
    </head>
    <body>
        <div class="page-wrapper">
            <header>
                @include('layouts.guest.header')
            </header>
            <main>
                <div class="page-content" id="pageContent">
                    <div class="page-sections" id="root">
                        @yield('content')
                    </div>
                    <footer>
                        @include('layouts.guest.footer')
                    </footer>
                </div>
            </main>
        </div>
    </body>
</html>
