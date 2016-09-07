/*jslint browser: true*/
/*global  $*/
$(document).ready(function () {
    'use strict';
    $('.hamburger').click(function () {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $('.navigation-menu').addClass('nav-open');
            $('.page-header, .logo, .banner, .iPhone5-header-image').addClass('opac');
        } else {
            $('.navigation-menu').removeClass('nav-open');
            $('.page-header, .logo, .banner, .iPhone5-header-image').removeClass('opac');
        }
    });
});