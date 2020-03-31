var express=require('express');
const path = require('path')
var bodyParser =require('body-parser');
var {mongoose}=require('./db/mongoose.js');
var {Users}=require('./models/users');
 
var app=express();
const port=process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(express.static(path.join(__dirname,'/../public')));

app.post('/signup',(req,res)=>{
	
	Users.find({email : req.body.email}).exec().then(user=>{
		
		if(user.length >= 1 )
		{
		res.send("user already exists");
		return res.status(400);
	    }
		else{
			const user= new Users({
				email: req.body.email,
				password: req.body.password
			});
			user.save().then((doc)=>{
				res.send("User signed up successfully"); },(e)=>{
				res.status(400).send(e) });
		    }
	}).catch(err=>{
		alert(err);
	});
});
	
app.post('/login',(req,res)=>{
	Users.find({email : req.body.email,
		       password:req.body.password  }).then(user=>{
				   if(user.length >= 1)
				   {
		           res.send("User logged in successfully");
				   }
				   else{
					   res.send("invalid username or password");
				   }
	}).catch(err=>{
		alert(err);
	});
	
});

app.listen(port,()=>{
	console.log(`started at  port ${port}`);
});