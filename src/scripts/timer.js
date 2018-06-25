export class TimerService {

    constructor(state, speed, cb) {
        this.count = 0;
        this.go = null;

        if (state) {
            this.start(speed, cb);
        } else {
            this.pause();
        }
    }

    start(speed, cb) {
        return this.go = setInterval(() => {
            this.count++;
            cb();
        }, speed);
    };

    pause() {
        return clearInterval(this.go);
    }

    set(count) {
        this.count = count;
    }

    currentCount() {
        return this.count;
    }

    init(state, speed, cb) {

        if (state) {
            this.start(speed, cb);
        } else {
            this.pause();
        }
    }

}
