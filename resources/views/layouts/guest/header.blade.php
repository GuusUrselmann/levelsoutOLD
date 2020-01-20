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
