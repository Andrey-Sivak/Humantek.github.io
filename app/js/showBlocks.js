'use strict';

function showBlocks( wrap ) {
    if( !wrap ) return;

    const activeClass = 'act';
    const btn = wrap.getElementsByClassName('show-hide')[0];

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        wrap.classList.toggle( activeClass );
    })
}

export { showBlocks };