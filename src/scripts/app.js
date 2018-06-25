import { TimerService } from './timer.js';

const clock = new TimerService(true, 1000, callback);

function callback() {
    console.log('hello', clock.count);
}
