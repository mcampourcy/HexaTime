function Model() {
    this.hexa = '';
}

Model.prototype = new Observable();

Model.prototype.itsTime = function () {
    var currentTime = this.setCurrentTime();
    this.hexa = '#' + currentTime;
    this.notify();
};

Model.prototype.setCurrentTime = function () {
    this.date = new Date();
    this.h = this.date.getHours();
    this.h = this.convertHex(this.h);
    this.m = this.date.getMinutes();
    this.m = this.convertHex(this.m);
    this.s = this.date.getSeconds();
    this.s = this.convertHex(this.s);
    this.currentTime = "" + this.h + this.m + this.s;
    return this.currentTime;
};

Model.prototype.convertHex = function(el){
    el = el.toString(16);
    if(el.length < 2){
        el = "" + el + el;
    }
    return el;
};