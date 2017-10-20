/**
 * Observable class - contains an array with all the observers
 */
class Observable {

    /**
     * Observable constructor
     */
    constructor() {
        this.observers = [];
    }

    /**
     * Add an observer to the array
     * @param observer
     */
    attach(observer) {
        this.observers.push(observer);
    }

    /**
     * Remove an observer of the array
     * @param observer
     */
    detach(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    /**
     * On change, update the observers
     */
    notify() {
        for(let observer of this.observers){
            observer.update();
        }
    }
}