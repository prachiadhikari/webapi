
var user=require('../Model/UserModel.js');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');


function validator(req,res,next)
{
 if (req.body.username===''){
 	res.json({status:200,message:'usename required'})
 }
 else
 {

user.findOne({
		where:{
			username:req.body.username
		}
	})
.then(function(result){

if(result === null){
	status:404;


}
else{

	req.xyz = result.dataValues.password;
	next();
}


})
.catch()
 	// next();
 }
}

//token - jwt bearer Oauth

function passwordChecker(req, res, next)
{
	console.log(req.body.password)
	console.log(req.body.username)


	
		bcrypt.compare(req.body.password,req.xyz)
		.then(function(result){
			if (result === true){
				next();
			}
			else{
				res.status(500)
				res.json({status:500,message:'password not match'});
				next();
			}
		})
}



function jwtTokenGen(req, res, next )
{
	console.log("here");
	var myPayload={
		username:req.body.username
		//userLevel:'superadmin'
	}

	//jwt.sign(myPayload,'secretOrPrivateKey',[option,callback])
	jwt.sign(myPayload,'secretOrPrivateKey',{expiresIn:"10h"},function (err, resultToken)
	{
	console.log(err);
		console.log(resultToken);
		res.json({"userToken":resultToken})	
	}

		

		)}

	function verifyToken(req,res,next)
	{
		//header ma authorization key hunxa so token is sent on the header
		/*Bearer (token)*/

		console.log(req.headers.authorization)
		var token = req.headers.authorization.slice(7,req.headers.authorization.length)
		jwt.verify(token,'secretOrPrivateKey',function(err,result)
		{
			console.log(err,result)
			if(result)
			{
				// console.log(result)
			// res.json({status:200,message:'userdeleted'})
			next();
			}
			else
			{
				res.status(500)
				res.json({status:500,message:'cannot delete'});
			}
		})
	}






module.exports={passwordChecker,validator, jwtTokenGen,verifyToken}