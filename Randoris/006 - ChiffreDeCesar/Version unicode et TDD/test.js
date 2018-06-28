var expect = require('chai').expect;
var caesar = require('./app.js');

describe('caesar()' , function(){
	it('should return a string' , function(){
		var str = typeof "test";
		var mystr = typeof caesar("test",5);
		expect(str).to.be.equal(mystr);
	});

	it('should return "NSTQQCP OP NPDLC" ' , function(){
		var str = "NSTQQCP OP NPDLC";
		var mystr = caesar("chiffre de cesar",11);
		expect(str).to.be.equal(mystr);
	});

	it('should return "EFGHIJKLMNOPQRSTUVWXYZABCD" ' , function(){
		var str = "EFGHIJKLMNOPQRSTUVWXYZABCD";
		var mystr = caesar("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4);
		expect(str).to.be.equal(mystr);
	});

	it('should return "Z" ' , function(){
		var str = "Z";
		var mystr = caesar("v",4);
		expect(str).to.be.equal(mystr);
	});

	it('should say "cypher between 1 and 25 only" ' , function(){
		var str = "cypher between 1 and 25 only";
		var mystr = caesar("test",-6);
		expect(str).to.be.equal(mystr);
	});
});