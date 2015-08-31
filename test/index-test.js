var expect = require('expect.js');
var ShortTermMemory = require('../');

var myStore;
describe('test basic functionality', function () {
	it('create store', function () {
		myStore = new ShortTermMemory({
			duration: 60000
		});
		expect(myStore).to.be.an('object');
		expect(myStore.get).to.be.an('function');
		expect(myStore.add).to.be.an('function');
	});
	it('save token', function (done) {
		myStore.add('unique key', {
			example: 'data'
		});
		done();
	});
	it('get token', function () {
		var token = myStore.get('unique key');
		expect(token).to.eql({
			example: 'data'
		});
	});
	it('don\'t get token a second time', function () {
		var token = myStore.get('unique key');
		expect(token).to.be(false);
	});
});
