/**
 * Call the model
 * @type {Model}
 **/
var model = new Model();
/**
 * Inject the model data in the view
 * @type {View}
 **/
var view = new View(model);

/**
 * Add an observer (the view) on an observable element (the model)
 * When the model notify that it changes, the view is update
 */
model.attach(view);

/**
 * Launch the method to check the time every 1000 milliseconds
 * @type {number}
 * */
var interval = setInterval( () => {
    model.itsTime()
}, 1000);