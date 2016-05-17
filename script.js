$(document).ready(function() {
    $('.hamburger').click(function(){
		$(this).toggleClass('open');
        if($('.logo').css('opacity') != 0.1)
        {
            $('.logo').css('opacity', 0.1);
            $('.banner').css('opacity', 0.1);
            $('.iPhone5-header-image').css('opacity', 0.1);
            $('.page-header').css('background-color', '#e57f85');
            $('.navigation-menu').css('display', 'block');
            $('.banner-text').css('padding-top', 0);
        }
        else
        {
            $('.logo').css('opacity', 1);
            $('.banner').css('opacity', 1);
            $('.iPhone5-header-image').css('opacity', 1);
            $('.page-header').css('background-color', '#61c0e7');
            $('.navigation-menu').css('display', 'none');
            $('.banner-text').css('padding-top', 213);

        }
	});
})