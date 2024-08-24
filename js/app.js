let isMenuShow = false;

$("#mobile-menu-button").click(function () {
if (!isMenuShow) {
    $("#mobile-menu").slideDown();
    isMenuShow = true;
} else {
    $("#mobile-menu").slideUp();
    isMenuShow = false;
}
});

$(".mobile-menu a").click(function () {
$("#mobile-menu").slideUp();
isMenuShow = false;
});