$(function(){
    var mixer = mixitup('.portfolio__content');

        $('.slider-blog__inner').slick({
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="./images/arrPrev.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./images/arrNext.svg" alt=""></button>',
        });

});