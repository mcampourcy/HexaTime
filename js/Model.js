/**
 * Model class, get and set the data
 * @extends Observable
 * @author  mcampourcy - december 2016
 */
class Model extends Observable {

    /**
     * Model constructor
     */
    constructor() {
        super();
        this.currentTime = '';
        this.hsl = '';
    }

    /**
     * Set the current time and the HSL value
     * On change, notify the observer to update the view
     */
    itsTime() {

        // Get the current time
        let t = this.setCurrentTime();

        // Change hue based on minutes passed
        let totalMinutes = (parseInt(t.hour) * 60) + parseInt(t.minute) ;
        let hue = totalMinutes * 0.25;

        // Keep saturation in the mid ranges
        let sat = parseInt(t.minute) + 10;

        // Keep lightness in the mid ranges
        let light = parseInt(t.second) + 15;

        // Set the data for the view
        this.currentTime = `${t.hour}:${t.minute}:${t.second}`;
        this.hsl = `${hue}, ${sat}%, ${light}%`;

        // Notify the observer
        super.notify();
    }

    /**
     * Get the current time, return it as an object
     * @returns {{hour: (number|*), minute: *, second: *}|*|string}
     */
    setCurrentTime() {

        // Get current dateTime
        this.date = new Date();

        // Set up the current time based on current dateTime
        this.currentTime = {
            hour: this.constructor.addZero(this.date.getHours()),
            minute: this.constructor.addZero(this.date.getMinutes()),
            second: this.constructor.addZero(this.date.getSeconds())
        };

        return this.currentTime;
    }
    /**
     * Add zero if numbers are < 10 (i.e. : 22:1:5 => 22:01:05)
     * @param   el  int  Current hour, minutes or seconds
     * @returns {*}
     */
    static addZero(el) {
        if(el < 10) el = '0' + el;
        return el;
    }
}