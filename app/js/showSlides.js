'use strict';

function showSlides( buttons, slides ) {
    if( !buttons || !slides ) return;

    const activeClass = 'act';

    for( let k = 0; k < buttons.length; k++ ) {
        buttons[k].addEventListener('click', function (e) {
            e.preventDefault();
            let slideID = 0;

            for( let j = 0; j < buttons.length; j++ ) {
                if( buttons[j] === this ) {
                    if( !buttons[j].classList.contains( activeClass ) ) {
                        buttons[j].classList.add( activeClass );
                        slideID = buttons[j].dataset.content;
                    }
                } else {
                    if( buttons[j].classList.contains( activeClass ) ) {
                        buttons[j].classList.remove( activeClass );
                    }
                }
            }

            for( let j = 0; j < slides.length; j++ ) {
                if( slides[j].id === slideID ) {
                    if( !slides[j].classList.contains( activeClass ) ) {
                        slides[j].classList.add( activeClass );
                    }
                } else {
                    if( slides[j].classList.contains( activeClass ) ) {
                        slides[j].classList.remove( activeClass );
                    }
                }
            }
        });
    }

}

export { showSlides };