var model = new Model();
var view = new View(model);
model.attach(view);
var interval = setInterval(() => {
    model.itsTime()
}, 1000);