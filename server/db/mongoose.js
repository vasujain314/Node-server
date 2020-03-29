// var mongoose=require('mongoose');

// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/Todoapp',{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vasujain314:Jainjain@3314@cluster0-nauop.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



module.exports = {MongoClient};