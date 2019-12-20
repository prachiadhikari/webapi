/*var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});*/
var chai = require('chai')
var chaiHttp=require('chai-http')
var should=chai.should()
var server = require('../index.js')

chai.use(chaiHttp);


describe('user', function(){
	describe('POST user registration',function(){
		//it
		it('should register a user, provided unique username',function(done){   //test case
			chai.request(server)  //hit api  //middle ware

			.post('/registration')
			//kasto data should be in header so,set le header set garxa
			.set('content-type','application/x-www-form-urlencoded')
			  //send garne data
			.send({                            
				username:"hhgsh",
				password:"hghhj"
			}) 
//for response  call back use chai kun bela sakkinxa tesma use hunxa
			.end(function(err,res){
				//res.expect.staus(200)
				res.should.have.status(200);
				done();


			})                      
		})
	})
})