const CardioController = require('../controllers/cardio.controller');  

//We are exporting a function that takes in a parameter of app (will get its value/argument passed, "express()", in server.js)
module.exports = (app) => {

    app.get("/api/cardios", CardioController.getAllCardios);
    //We use the express method to make a post request to "/api/products" route, which will run the function found at ProductController.createProduct
    app.post("/api/cardios", CardioController.createCardio);
    //This paramater (params) from the request will be written in from the route
    //NOTE: this param written here must match EXACTLY with what you named it in your controller (here, we used id).
    //This value will be passed in from the client.
    app.get("/api/cardios/:id", CardioController.getOneCardio);
    //We can use the same param name for each route. It's a different route due to differing HTTP verbs.
    app.put("/api/cardios/:id", CardioController.updateCardio);
    app.delete("/api/cardios/:id", CardioController.deleteCardio);
};



// module.exports = (app) => {
//     app.get('/', CardioController.index);
//     app.post('/cardios', CardioController.createCardio)
//     app.get('/cardios', CardioController.getAllCardios); 
//     app.get('/cardios/:id', CardioController.getCardio);
//     app.put('/cardios/:id', CardioController.updateCardio);
//     app.delete('/cardios/:id', CardioController.deleteCardio); 

// }

