function Observable() {
    this.observers = [];
}

Observable.prototype.attach = function (observer) {
    this.observers.push(observer);
};

Observable.prototype.detach = function (observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
};

Observable.prototype.notify = function () {
    for(var ii = 0; ii < this.observers.length; ii++){
        this.observers[ii].update();
    }
};