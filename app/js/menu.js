'use strict';

function menu( menuWrap ) {
    if( !menuWrap ) return;

    const btn = menuWrap.getElementsByClassName('menu_btn')[0];
    const activeClass = 'act';

    if( !btn ) return;

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        menuWrap.classList.toggle( activeClass );
    })
}

export { menu };