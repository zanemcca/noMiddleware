/*jshint expr: true*/
var app = require('../server/server');
var api = require('supertest')(app);
var expect = require('chai').expect;

describe('error returned', function() {
	it('should not include stack trace', function(done) {
	  api.get('/a/nonexistent/endpoint')
	  .expect(404)
	  .end( function(err, res) {
		 expect(res).to.exist;
		 expect(res.body).to.exist;
		 expect(res.body.error).to.exist;
		 expect(res.body.error).to.equal('404: This is not the page you are looking for ...');
		 expect(res.body.error.stack).to.not.exist;

		 done();
	  });
	});

	it('should also not include stack trace', function(done) {
	  api.get('/api/nonexistent/endpoint')
	  .expect(404)
	  .end( function(err, res) {
		 expect(res).to.exist;
		 expect(res.body).to.exist;
		 expect(res.body.error).to.exist;
		 expect(res.body.error.stack).to.not.exist;
		 expect(res.body.error).to.equal('404: This is not the page you are looking for ...');

		 done();
	  });
	});
});
