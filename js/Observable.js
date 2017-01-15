/**
 * Observable - contains an array with all the observers
 */
class Observable{
    constructor(){
        this.observers = []
    }
    /**
     * add an observer to the array
     * @param observer
     */
    attach(observer){
        this.observers.push(observer);
    }
    /**
     * remove an observer of the array
     * @param observer
     */
    detach(observer){
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    /**
     * on change, update the observers
     */
    notify(){
        for(let observer of this.observers){
            observer.update();
        }
    }
}