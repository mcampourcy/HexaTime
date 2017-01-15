/**
 * Model - parent : Observable
 */
class Model extends Observable{
    constructor(){
        super();
        this.currentTime = '';
        this.hsl = '';
    }
    /**
     * set the current time and the params that the view will show
     * on change, notify the Observable to update the view
     */
    itsTime(){
        let t = this.setCurrentTime();
        this.currentTime = '' + t.hour + ':' + t.minute + ':' + t.second;
        this.hsl = 'hsl(' + t.hour + ',' + t.minute + '%,' + t.second + '%)';
        super.notify();
    }
    /**
     * Get the current time, return it in the good format
     * @returns {{hour: (number|*), minute: *, second: *}|*|string}
     */
    setCurrentTime(){
        this.date = new Date();
        this.currentTime = {
            hour: this.addZero(this.date.getHours()),
            minute: this.addZero(this.date.getMinutes()),
            second: this.addZero(this.date.getSeconds())
        };
        return this.currentTime;
    }
    /**
     * add zero if numbers are alone (e.g. : 22:1:5 => 22:01:05)
     * @param el
     * @returns {*}
     */
    addZero(el){
        if(el < 10) el = '0' + el;
        return el;
    }
}