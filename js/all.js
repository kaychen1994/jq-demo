$(document).ready(function () {
    $('.dropdown').click(function (event) {

        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();

    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
        },


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });

    $('.start-up a').click(function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0    //0是位置
		}, 1000);           //1000秒數

	});

});
