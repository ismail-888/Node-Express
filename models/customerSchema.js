const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  age: Number,
  country: String,
  gender: String,

  
},{timestamps:true});




// Create a model based on that schema
// l Mydataa btsir Mydataas li hiye l model bl mongodb 
const User = mongoose.model("customer", userSchema);




// export the model
module.exports = User