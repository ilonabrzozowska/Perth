$(document).ready(function() {
    $('.hamburger').click(function(){
		$(this).toggleClass('open');
        if($(this).hasClass('open'))
        {
            $('.navigation-menu').css('display', 'block');
            $('.page-header, .logo, .banner, .iPhone5-header-image').addClass('opac');
        }
        else
        {
            $('.navigation-menu').css('display', 'none');
            $('.page-header, .logo, .banner, .iPhone5-header-image').removeClass('opac');
        }
	});
})