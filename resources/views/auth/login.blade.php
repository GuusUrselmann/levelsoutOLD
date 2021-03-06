@extends('layouts.guest.layout')

@section('content')
<div class="page-container login background-cover" style="background-image: url({{asset('/images/backgroundLogin.jpg')}});">
    <div class="container-inner">
        <div class="app-logo-full">
            <div class="logo-title">
                LEVELS OUT
            </div>
            <div class="logo-description">
                Lorem ipsum dolor sit amet, tempor aliquam at mauris placerat libero, justo penatibus eu lorem.
            </div>
        </div>
        <div class="login-container">
            <div class="app-logo">
                <div class="logo-inner">
                    levels<br/>out
                </div>
            </div>
            <div class="login-title">
                Login
            </div>
            <div class="app-login">
                <div class="login-inner">
                    <form method="POST" action="" class="form login">
                    @csrf
                        @if ($errors->has('email') || $errors->has('password'))
                            <div class="form-error">
                                <div class="invalid-feedback">
                                    Incorrect email or password, please try again.
                                </div>
                            </div>
                        @endif
                        <div class="form-row">
                            <div class="form-input login-email">
                                <input id="email" type="email" placeholder="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                            </div>
                        </div>
                        <div class="form-row lessspace">
                            <div class="form-input login-password">
                                <input id="password" type="password" placeholder="password"  class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                            </div>
                        </div>
                        <div class="form-row lessspace">
                            <div class="form-input login-remember">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <span>remember me</span>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-input login-submit">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="login-alt">
                        <div class="alt-buttons">
                            <a class="forgot-forgot-button" href="{{url('password/reset')}}">forgot password?</a>
                            <a class="forgot-create-button" href="{{url('/register')}}">create an account</a>
                        </div>
                        <span>- or -</span>
                    </div>
                    <div class="login-social">
                        <div class="social-message">
                            login via Twitter
                        </div>
                        <div class="social-icons">
                            {{-- <div class="social-button twitter">
                                <a href="{{url('/auth/twitter')}}">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                            <br><br><br> --}}
                            {{-- <div class="social-button facebook">
                                <a href="{{url('/auth/facebook')}}">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
