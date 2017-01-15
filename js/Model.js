/**
 * Model - parent : Observable
 * @constructor
 */
function Model() {
    this.currentTime = '';
    this.hsl = '';
}

Model.prototype = new Observable();

/**
 * set the current time and the params that the view will show
 * on change, notify the Observable to update the view
 */
Model.prototype.itsTime = function () {
    let t = this.setCurrentTime();
    this.currentTime = "" + t.hour + ':' + t.minute + ':' + t.second;
    this.hsl = 'hsl(' + t.hour + ',' + t.minute + '%,' + t.second + '%)';
    this.notify();
};

/**
 * Get the current time, return it in the good format
 * @returns {{hour: (number|*), minute: *, second: *}|*|string}
 */
Model.prototype.setCurrentTime = function () {
    this.date = new Date();
    this.h = this.date.getHours();
    this.h = this.addZero(this.h);
    this.m = this.date.getMinutes();
    this.m = this.addZero(this.m);
    this.s = this.date.getSeconds();
    this.s = this.addZero(this.s);
    this.currentTime = {hour: this.h, minute: this.m, second: this.s};
    return this.currentTime;
};

/**
 * add zero if numbers are alone (e.g. : 22:1:5 => 22:01:05)
 * @param el
 * @returns {*}
 */
Model.prototype.addZero = function (el) {
    if(el < 10) el = '0' + el;
    return el;
};