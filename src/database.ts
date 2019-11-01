const uri = "mongodb+srv://user123:anotherpassword@cluster0-jedvy.mongodb.net/pantry?retryWrites=true&w=majority";
const mongo = require('mongoose');

const client = mongo.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(error: any, response: any){
  if(error){
      console.log(error);
  }
  else{
      console.log("Connected!");
  }
});

module.exports = client;
