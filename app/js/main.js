'use strict';
import { showBlocks } from "./showBlocks";
import { showSlides } from "./showSlides";
import { menu } from "./menu";

window.addEventListener('load', function () {

    (function () {
        const switchedBlocks = document.getElementsByClassName('group-list_content__block');

        for( let i = 0; i < switchedBlocks.length; i++ ) {
            showBlocks( switchedBlocks[i] );
        }
    })();

    (function () {
        const slidesBtns = document.getElementsByClassName('group-list_list__item');
        const slides = document.getElementsByClassName('group-list_content');

        showSlides( slidesBtns, slides);
    })();

    (function () {
        const menuWrap = document.getElementsByClassName('menu')[0];

        menu( menuWrap );

        $('#to-ecosystem').click( function () {
            $('html, body').animate({
                scrollTop: $('#ecosystem').offset().top
            }, 1000);
            $('.menu').removeClass('act');
        });

        $('#to-group-list').click( function () {
            $('html, body').animate({
                scrollTop: $('#group-list').offset().top
            }, 1000);
            $('.menu').removeClass('act');
        });

        $('#to-team').click( function () {
            $('html, body').animate({
                scrollTop: $('#team').offset().top
            }, 1000);
            $('.menu').removeClass('act');
        });

        $('#to-contacts').click( function () {
            $('html, body').animate({
                scrollTop: $('#contacts').offset().top
            }, 1000);
            $('.menu').removeClass('act');
        });
    })();

});