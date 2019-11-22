

/*var public=10;

function testq(b,a)
{
"use strict"
}
testq(1,2);*/


/*var express = require('express');

var app = express()
function cb(req,res)
{

}
app.get('/test',

	function(req,res,next){
	console.log('first middleware');  
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

function cbFunctionWhenValueisReturned(err,result)

{
	//actual work after value is obtained
	if (err==null)
	{

	}
	else
	{

	}
}

unknownTimeBigFunctionSq(10,cbFunctionWhenValueisReturned)

function unknownTimeBigFunctionSq(val,cb)
{
	var result=null;
	var err=null;
	if(typeof val==="number")
	{
		result= val*val
	}
	else
	{
		//error
		err=new Error ('value is not number')
	}

	cb(err,result)
}