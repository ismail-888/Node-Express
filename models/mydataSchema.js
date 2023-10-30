const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const articleSchema = new Schema({
  userNameee: String
});




// Create a model based on that schema
// l Mydataa btsir Mydataas li hiye l model bl mongodb 
const Mydata = mongoose.model("Mydataa", articleSchema);




// export the model
module.exports = Mydata