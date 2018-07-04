const expect = require('chai').expect;
const caesar = require('./app.js');

describe('caesar()' ,() => {
	it('should return a string' ,() => {
		let str = typeof "test";
		let mystr = typeof caesar("test",5);
		expect(str).to.be.equal(mystr);
	});

	it('should return "NSTQQCP OP NPDLC" ' ,()=>{
		let str = "NSTQQCP OP NPDLC";
		let mystr = caesar("chiffre de cesar",11);
		expect(str).to.be.equal(mystr);
	});

	it('should return "EFGHIJKLMNOPQRSTUVWXYZABCD" ' , ()=>{
		let str = "EFGHIJKLMNOPQRSTUVWXYZABCD";
		let mystr = caesar("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4);
		expect(str).to.be.equal(mystr);
	});

	it('should return "Z" ' ,()=>{
		let str = "Z";
		let mystr = caesar("v",4);
		expect(str).to.be.equal(mystr);
	});

	it('should say "cypher between 1 and 25 only" ' ,()=>{
		let str = "cypher between 1 and 25 only";
		let mystr = caesar("test",-6);
		expect(str).to.be.equal(mystr);
	});
});