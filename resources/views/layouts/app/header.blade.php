<div class="header-bar" >
    <div class="header-nav">
        <div class="header-menu">
            <i class="fas fa-bars" id="menu-icon"></i>
            <div class="menu header" id="sidebar">
                <ul class="menu menu-vertical menu-sidebar">
                @foreach($menu as $item)
                    <li class="menu-item {{ $item['site_url'] == Request::path() ? 'active' : '' }}">
                        <a href="{{url($item['site_url'])}}">
                            <div class="item-title">
                                <span style="display: block; float: left;">{{$item['display_name']}}</span>
                            </div>
                        </a>
                    @if(!empty($item['submenu']))
                        <ul class="submenu">
                        @foreach($item['submenu'] as $subitem)
                            <li class="menu-item">
                                <a href="{{url($subitem['site_url'])}}">
                                    <div class="item-title">
                                        {{$subitem['display_name']}}
                                    </div>
                                </a>
                            </li>
                        @endforeach
                        </ul>
                    @endif
                    </li>
                @endforeach
                    <li class="menu-item">
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                             <div class="item-title">
                                 <span style="display: block; float: left;">logout</span>
                             </div>
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </li>
                </ul>

            </div>
        </div>
        <div class="header-logo">
            <a href="{{url('home')}}">
                LEVELS OUT
            </a>
        </div>
        <div class="header-options">
            {!!load_icon('cog')!!}
        </div>
    </div>
</div>
