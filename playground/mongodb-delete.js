const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
const db = client.db('Todoapp');
//deletemany
// db.collection('Todos').deleteMany({text:'vasu'}).then((result)=>{

// 	console.log(result);
// });
//deleteone
// db.collection('Todos').deleteOne({text:'jain'}).then((result)=>{

// 	console.log(result);
// });


client.close();
});