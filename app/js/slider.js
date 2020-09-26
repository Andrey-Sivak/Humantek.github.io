'use strict';

function Slider(wrap) {
    if(!wrap ) {
        return;
    }


    wrap.addEventListener('wheel', function(event) {
        let wDelta = event.wheelDelta < 0 ? 'down' : 'up';

        let modifier = 0;
        const wrapWidth = wrap.clientWidth + 100;

        if (event.deltaMode === event.DOM_DELTA_PIXEL) {
            modifier = 1;
        } else if (event.deltaMode === event.DOM_DELTA_LINE) {
            modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
            modifier = this.clientHeight;
        }

        if (event.deltaY !== 0) {
            if( this.scrollLeft <= wrapWidth ) {
                if( wDelta === 'down' ) {
                    this.scrollLeft += modifier * event.deltaY;
                    event.preventDefault();
                }
            }

            if( this.scrollLeft >= 1 ) {
                if( wDelta === 'up' ) {
                    this.scrollLeft += modifier * event.deltaY;
                    event.preventDefault();
                }
            }
        }
    });

}

export { Slider };