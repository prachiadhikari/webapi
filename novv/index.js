

var express = require('express');
var bodyParser=require('body-parser'); 
var app = express();

var multer= require('multer');

var upload=multer({dest:'images/'})

var swaggerJSDoc= require('swagger-jsdoc');
var swaggerUI=require('swagger-ui-express');

var swaggerDefinition={
info:{
	title:'myApplication',
	description:'This is myapp documentation',
	version:'1.0.0'
},//option dine place
securityDefinitions:{
	bearerAuth:{
		type:'apiKey',
		name:'authorization',
		in:'header',
		scheme:'bearer'
	}
} ,        //for delete
host:'localhost:3000',
basePath:'/'
}

var swaggerOptions={
	swaggerDefinition,
apis:['./index.js']	
}
var swaggerSpecs=swaggerJSDoc(swaggerOptions);//definion is coverd through this

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpecs))
 

app.use(bodyParser.urlencoded({extended:true})) //for use in post it should be upper than this below line 


var userModel=require('./Model/UserModel.js');
var userController=require('./Controller/userController.js');
var authController=require('./Controller/AuthController.js');


//documentation through yamal format

/**
* @swagger
* /registration:
*  post:
*   tags:
*    - Users
*   description: Users registration testing
*   produces:
*    - application/json
*   consumes:
*    - application/x-www-form-urlencoded
*   parameters:
*    - name: username
*      in: formData
*      type: string
*      required: true
*      description: please provide unique username
*    - name: password
*      in: formData
*      type: string
*      required: true
*      description: please provide password
*    - name: address
*      in: formData
*      type: string
*      required: true
*      description: please provide address
*   responses:
*    201:
*     description: registered sucessfully
*    409:
*     description: user already exist
*    500:
*     description: internal server error
*/






app.post('/registration',userController.validator,userController.checkIfUserExits,userController.genHash,userController.actualregister)
/**
* @swagger
* /login:
*  post:
*   tags:
*    - Users
*   description: Users registration testing
*   produces:
*    - application/json
*   consumes:
*    - application/x-www-form-urlencoded
*   parameters:
*    - name: username
*      in: formData
*      type: string
*      required: true
*      description: please provide unique username
*    - name: password
*      in: formData
*      type: string
*      required: true
*      description: please provide password
*   responses:
*    201:
*     description: registered sucessfully
*    409:
*     description: user already exist
*    500:
*     description: internal server error
*/



app.post('/login',authController.validator,
	authController.passwordChecker,authController.jwtTokenGen)


/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags:
 *      - Users
 *     security:
 *      - bearerAuth: []
 *     description: Delete user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: could not delete
 */


app.delete('/user/:id',authController.verifyToken, userController.deleteUser)

app.put('/user/:id',authController.verifyToken,userController.editUser)

app.listen(3000);
module.exports= app
//bracket paxi . use hunxa



























/*.then(function(){})   ----using callback function
.catch(function(){})*/
  ///---database---


/*function cb(req,res)
{

}*/



/*app.get('/list',
function(req,res,next){
	console.log(req); 
	res.send('req received');
})

app.get('/hospitallist',
function(req,res,next){
	console.log(req.query); 
	res.send('req received');
})

*/






//app.get('/registration/')
	

	/*console.log('first middleware');  
	next();
},function(req,res,next){
	console.log('second middleware');

	res.status(200);
	res.set({
	'Content-Type':'application/json'
})
res.send('prachi');
}	
)

app.get('/registration',function(req,res)
{
console.log("jsdjka");
var x ={name:"softwarica"}
//res.json(x)
res.status(200);

res.set({
	'Content-Type':'application/json'
})
res.send('sharmila');
})
app.listen(3040);


*/