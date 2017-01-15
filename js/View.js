/**
 * View - parent : Observer
 * contains the model
 */
class View extends Observer{
    /**
     * constructor
     * @param model
     */
    constructor(model){
        super();
        this.model = model;
        this.title = document.getElementById('title');
    }
    /**
     * update on changes
     * each seconds, change the color
     */
    update(){
        document.body.style.backgroundColor = this.model.hsl;
        this.title.textContent = this.model.currentTime;
    }
}