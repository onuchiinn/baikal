$(function(){

    "use strict";
    
    $('.title__box').click(function(){

        $(this).toggleClass('open');
        $(this).next('div.list__link').toggleClass('open');
    });

});