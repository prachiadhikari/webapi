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
	}npm 
	else
	{
		//error
		err=new Error ('value is not number')
	}

	cb(err,result)
}