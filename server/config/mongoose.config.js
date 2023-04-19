const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cardio3", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database Cardio3"))
.catch(err => console.log("Something went wrong when connecting to the database", err));

