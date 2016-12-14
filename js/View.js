function View(model) {
    this.model = model;
    this.title = document.getElementById('title');
}

View.prototype = new Observer();

View.prototype.update = function () {
    document.body.style.backgroundColor = this.model.hexa;
    this.title.textContent = this.model.hexa;
};