const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
const db = client.db('Todoapp');
 
 db.collection.findOneAndUpdate({
 	_id:new ObjectID('5db185466a930c1240bcf9ba')
 },
{
	$set:{
		completed:true
	},
	{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});
client.close();
});