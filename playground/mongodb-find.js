const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
const db = client.db('Todoapp');
db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
	// console.log('Todos');
	console.log(JSON.stringify(docs,undefined,2));
})
client.close();
});