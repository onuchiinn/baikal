$(function () {

    "use strict";

    $('.title__box').click(function () {

        $(this).toggleClass('open');
        $(this).next('div.list__link').toggleClass('open');
    });

    $('.filter__slider-price').slider({
        max: 1000,
        min: 0,
        range: true,
        values: [190, 728],
        slide: function (event, ui) {
            $('input[name="minPrice"]').val( '$' + 
            ui.values[0]);
            $('input[name="maxPrice"]').val( '$' + 
            ui.values[1]);
        }
    });

    $('input[name="minPrice"]').val( '$' + 
        $('.filter__slider-price').slider('values', 0) );
    $('input[name="maxPrice"]').val(  '$' + 
        $('.filter__slider-price').slider('values', 1) );


});