var express=require('express');
const path = require('path')
var bodyParser =require('body-parser');

var {mongoose}=require('./db/mongoose.js');

// var {Todo}=require('./models/todo');
var {Users}=require('./models/users');
 
var app=express();
const port=process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(express.static(path.join(__dirname,'/../public')));
// app.post('/submit',(req,res)=>{
// var todo= new Todo({
// 	text: req.body.text
// });
// todo.save().then((doc)=>{
// 	res.send(doc);
// },(e)=>{
// res.status(400).send(e);
// });
// });

app.post('/signup',(req,res)=>{
	Users.find({email : req.body.email}).exec().then(user=>{
		if(user.length >= 1)
		{
			
			return res.status(400).send("user already exists");
		}
	})
	.catch();
	
	const user= new Users({
		email: req.body.email,
		password: req.body.password
	});
	user.save().then((doc)=>{
		res.send("User signed up successfully");

	},(e)=>{
	res.status(400).send(e);
	});
	});

app.post('/login',(req,res)=>{
	Users.find({email : req.body.email,password:req.body.password}).then(()=>{
		res.send("User logged in successfully");
	})
	
})

app.listen(port,()=>{

	console.log('started at  port {port}');
});