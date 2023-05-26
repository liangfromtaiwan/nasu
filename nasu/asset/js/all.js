$(document).ready(function () {
    $('.l-header__hamburger').click(function (e) { 
        e.preventDefault();
        $('.l-header__hamburger').toggleClass('active');
        $('.l-header__inner').toggleClass('active');
    });
});