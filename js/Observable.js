/**
 * Observable - contains an array with all the observers
 * @constructor
 */
function Observable() {
    this.observers = [];
}

/**
 * add an observer to the array
 * @param observer
 */
Observable.prototype.attach = function (observer) {
    this.observers.push(observer);
};

/**
 * remove an observer of the array
 * @param observer
 */
Observable.prototype.detach = function (observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
};

/**
 * on change, update the observers
 */
Observable.prototype.notify = function () {
    for(let observer of this.observers){
        observer.update();
    }
};