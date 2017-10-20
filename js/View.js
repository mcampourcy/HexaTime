/**
 * View class
 * @extends Observer
 */
class View extends Observer{

    /**
     * View constructor
     * @param model
     */
    constructor(model) {
        super();
        this.model = model;
        this.title = document.getElementById('title');
    }

    /**
     * Update on changes - Set the body background color
     */
    update(){
        document.body.style.backgroundColor = "hsl(" + this.model.hsl + ")";
        this.title.textContent = this.model.currentTime;
    }
}