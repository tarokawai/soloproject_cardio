const Cardio = require("../models/cardio.model.js"); 


//With this syntax, we are exporting an object that consists of key:value pairs
    //the values consist of the logic used to query the DB
module.exports = {
    getAllCardios: (req, res) => {
        Cardio.find({}) //remember, these methods (find, findOne, create, etc) are all specific mongoose methods you can see a complete list in their docs
            .then((allCardios) => res.json(allCardios))
            .catch((err) => console.log(err));
    },

    getOneCardio: (req, res) => {
        Cardio.findOne({ _id: req.params.id }) //We have to specify which field we want to search for our individual product (called a document in mongodb) by
            // _id is a field that is automatically added when we create a new document
            // We then say that the value will come from the request's parameters (params) and we name this parameter "id"
            // NOTE: We can call the parameter (id) whatever we want. However, it MUST match how we refer to it in our route.
            //Do not confuse the DB field of "_id" with the popular naming convention of "id"
            .then((oneCardio) => res.json(oneCardio))
            .catch((err) => console.log(err));
    },

    createCardio: (req, res) => {
        //We name the key and the value is going to be the function that queries DB.
        Cardio.create(req.body) //We use the Product model to create a new product document. We take in the body of the request sent from the client.
            .then((newCardio) => res.json(newCardio)) //That returns a promise whose resolution we handle with then,
            //and run .json() on our response so that we can read the JSON object returned from our promise.
            .catch((err) => console.log(err));
    },

    //The logic for updating requires both a parameter (params) and body from the request
        // We must first find the document before we can add in the new info.
    updateCardio: (req, res) => {
        Cardio.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, //By default, update fill not return a new document. This is necessary to ensure we respond with the newly updated document.
            runValidators: true, //This ensures validators work on a PUT request.
        })
            .then((updatedCardio) => res.json(updatedCardio))
            .catch((err) => console.log(err));
    },

    deleteCardio: (req, res) => {
        Cardio.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};
