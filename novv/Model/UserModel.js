var dbConfig =require('../Config/databaseConfig.js');
//for defining model

//console.log(dbConfig.sequelize);



 var user = dbConfig.sequelize.define('user',
 //table name
 {
 	//attributes

 	id:
 	{
 		type:dbConfig.Sequeslize.INTEGER ,
 		//datatype
 		primaryKey:true ,
 		autoIncrement:true,
 		allowNull:false
 	},

 	username:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	password:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	}
},	
 	
   {
   	paranoid:true,
 	freezeTableName:false,
 	tableName:'user_table' 
 	//table name change


    }) 

  user.sync({force:false})   //promise handeler so 
 .then(function(result)
 {
console.log(result);
console.log("success");
// res.staus(201);
// res.json({status:409,message:'user registered'});

 })
 .catch(function(err)
 {
 	console.log(err)
 })

/*
 var patients = dbConfig.sequelize.define('patients',
 //table name
 {
 	//attributes

 	id:
 	{
 		type:dbConfig.Sequeslize.INTEGER ,
 		//datatype
 		primaryKey:true ,
 		autoIncrement:true,
 		allowNull:false
 	},

 	username:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	address:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	}

 	
},
 	
   {
 	freezeTableName:true,
 	tableName:'patients_table'


    }) 
  patients.sync({force:true})   //promise handeler so 
 .then(function(result){
console.log(result)
 })
 .catch(function(err)
 {
 	console.log(err)
 })*/

module.exports=user;
