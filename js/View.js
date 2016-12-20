/**
 * View - parent : Observer
 * contains the model
 * @param model
 * @constructor
 */
function View(model) {
    this.model = model;
    this.title = document.getElementById('title');
}

View.prototype = new Observer();

/**
 * update on changes
 * each seconds, change the color
 */
View.prototype.update = function () {
    document.body.style.backgroundColor = this.model.hsl;
    this.title.textContent = this.model.currentTime;
};