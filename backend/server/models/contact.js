const mongoose = require("mongoose");

const contact = new mongoose.Schema({
    fullName:{
        type : String, 
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    },
    
});

module.exports = mongoose.model("contact",contact)