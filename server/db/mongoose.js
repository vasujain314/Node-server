var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://vasujain314:<3vAGvcl4GP>devicesUXo69W@cluster0-nauop.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});




// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://vasujain314:3vAGvcl4GPdevicesUXo69W@cluster0-nauop.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



module.exports = {mongoose};