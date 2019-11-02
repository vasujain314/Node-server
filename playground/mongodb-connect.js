const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
const db = client.db('Todoapp');
// db.collection('Todos').insertOne({
// 	text:'jain',
// 	completed:false,
// 	value:4,
// 	hhere:"daa"
// },(err,result)=>{

// 	console.log(JSON.stringify(result.ops,undefined,2));
// })

db.collection('Todos2').insertOne({
	text:'jain',
	completed:false,
	value:4,
	hhere:"daa"
},(err,result)=>{

	console.log(JSON.stringify(result.ops,undefined,2));
})
client.close();
});