import $ from 'jquery';

$("#menu-icon").on("click", function() {
    sidebarToggle();
});


function sidebarToggle() {
    var sb = $("#sidebar");
    if(!sb.hasClass("toggled")) {
        sb.addClass("toggled");
    }
    else {
        sb.removeClass("toggled");
    }
}
