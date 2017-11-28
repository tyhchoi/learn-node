const expect = require('chai').expect;
const request = require('supertest')('http://localhost:7777');

describe('GET requests', function () {
	it('Home page', function (done) {
		request
			.get('/')
			.expect(200)
			.end(done);
	});

	it('Stores page', function (done) {
		request
			.get('/stores')
			.expect(200)
			.end(done);
	});

	it('Tags page', function (done) {
		request
			.get('/tags')
			.expect(200)
			.end(done);
	});

	it('Top page', function (done) {
		request
			.get('/top')
			.expect(200)
			.end(done);
	});

	it('Add page (Redirect to login)', function (done) {
		request
			.get('/add')
			.expect(302)
			.expect(/Found. Redirecting to \/login/)
			.end(done);
	});

	it('Map page', function (done) {
		request
			.get('/map')
			.expect(200)
			.end(done);
	});

	it('Register page', function (done) {
		request
			.get('/register')
			.expect(200)
			.end(done);
	});

	it('Login page', function (done) {
		request
			.get('/login')
			.expect(200)
			.end(done);
	});
});

describe('POST requests', function () {
	it('Register new account', function (done) {
		request
			.post('/register')
			.send({ 
				name: 'Tom',
				email: 'Tom@example.com',
				password: 'Tom',
				'password-confirm': 'Tom'
			})
			.expect(302)
			.expect(/Found. Redirecting to \//)
			.end(done);
	});
});
