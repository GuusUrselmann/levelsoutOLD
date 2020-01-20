@extends('layouts.guest.layout')

@section('content')
<div class="page-container register background-cover" style="background-image: url({{asset('/images/backgroundLogin.jpg')}});">
    <div class="container-inner">
        <div class="app-logo-full">
            <div class="logo-title">
                LEVELS OUT
            </div>
            <div class="logo-description">
                Lorem ipsum dolor sit amet, tempor aliquam at mauris placerat libero, justo penatibus eu lorem.
            </div>
        </div>
        <div class="signup-container">
            <div class="app-logo">
                <div class="logo-inner">
                    levels<br/>out
                </div>
            </div>
            <div class="signup-title">
                Sign up
            </div>
            <div class="signup-description">
                It would only take a few steps
            </div>
            <div class="app-signup">
                <div class="signup-inner">
                    <form method="POST" action="" class="form signup">
                    @csrf
                        <div class="form-row">
                            <div class="form-input signup-name">
                                <input id="name" type="text" placeholder="name" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>
                            </div>
                        </div>
                        @if ($errors->has('email') || $errors->has('password'))
                            <div class="form-error">
                                <div class="invalid-feedback">
                                    Incorrect email or password, please try again.
                                </div>
                            </div>
                        @endif
                        <div class="form-row">
                            <div class="form-input signup-email">
                                <input id="email" type="email" placeholder="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-input signup-password">
                                <input id="password" type="password" placeholder="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                            </div>
                        </div>
                        <div class="form-row lessspace">
                            <div class="form-input signup-password-confirm">
                                <input id="password-confirm" type="password" placeholder="confirm password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password_confirmation" required>
                            </div>
                        </div>
                        <div class="form-row lessspace">
                            <div class="form-input signup-remember">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <span>remember me</span>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-input signup-submit">
                                <button type="submit" class="btn btn-primary">
                                    Create my account
                                </button>
                            </div>
                        </div>
                        <div class="alt-buttons">
                            Already have an account?
                            <a class="login-button" href="{{url('/login')}}">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
