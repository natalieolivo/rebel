import { TimerService } from './timer.js';

let clock;

function callback() {
    console.log('hello', clock.count);
}

document.addEventListener('DOMContentLoaded', e => {
    const s_start = document.querySelector('.start');
    const s_pause = document.querySelector('.pause');
    const s_reset = document.querySelector('.reset');

    let tempCount;

    s_start.addEventListener('click', e => {
        e.preventDefault();
        if (tempCount > 0) {
            clock.start(1000, callback);
            console.log(`restarted at ${tempCount}`);
            return;
        }
        clock = new TimerService(true, 1000, callback);
        console.warn('Clicked start button');
    })

    s_pause.addEventListener('click', e => {
        e.preventDefault();
        clock.pause();
        tempCount = clock.currentCount();
        console.log(`stopped at ${tempCount}`);
    })


    s_reset.addEventListener('click', e => {
        e.preventDefault();
        tempCount = 0;
        clock.set(0);
        console.log('reset to 0')
    })
    console.info(e.type);
})
