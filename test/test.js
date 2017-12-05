// const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest.agent('http://localhost:7777');

describe('Site functions without login', function () {
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
      .expect('Location', '/login')
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

  it('Tags page', function (done) {
    request
      .get('/tags')
      .expect(200)
      .end(done);
  });

  describe('Filter tags', function () {
    it('Licensed tag', function (done) {
      request
        .get('/tags/Licensed')
        .expect(200)
        .end(done);
    });

    it('Open late tag', function (done) {
      request
        .get('/tags/Open%20Late')
        .expect(200)
        .end(done);
    });

    it('Vegan tag', function (done) {
      request
        .get('/tags/Vegan')
        .expect(200)
        .end(done);
    });

    it('Family friendly tag', function (done) {
      request
        .get('/tags/Family%20Friendly')
        .expect(200)
        .end(done);
    });

    it('Wifi tag', function (done) {
      request
        .get('/tags/Wifi')
        .expect(200)
        .end(done);
    });
  });
});

describe('Site functions with login', function () {
  it('Register', function (done) {
    request
      .post('/register')
      .type('form')
      .send({
        name: 'Tom',
        email: 'tom@example.com',
        password: 'tom',
        'password-confirm': 'tom',
      })
      .expect(302)
      .expect('Location', '/')
      .end(done);
  });

  it('Get heart page', function (done) {
    request
      .get('/hearts')
      .expect(200)
      .end(done);
  });

  it('Get add page', function (done) {
    request
      .get('/add')
      .expect(200)
      .end(done);
  });

  it('Add store', function (done) {
    request
      .post('/add')
      .type('form')
      .send({
        name: 'Tom Coffee',
        description: 'A nice place to concentrate on work, or relax with a cup of coffee.',
        photo: '',
        location: {
          address: 'Tom Coffee, Trịnh Phong Đáng, Ho Chi Minh City, Ho Chi Minh, Vietnam',
          coordinates: [
            106.75498990000006,
            10.8666732,
          ],
        },
        tags: [
          'Wifi',
          'Family Friendly',
        ],
      })
      .expect(302)
      .expect('Location', '/store/tom-coffee')
      .end(done);
  });

  it('Logout', function (done) {
    request
      .get('/logout')
      .expect(302)
      .expect('Location', '/')
      .end(done);
  });

  it('Access created store', function (done) {
    request
      .get('/store/tom-coffee')
      .expect(200)
      .end(done);
  });

  it('Login', function (done) {
    request
      .post('/login')
      .type('form')
      .send({
        email: 'tom@example.com',
        password: 'tom',
      })
      .expect(302)
      .expect('Location', '/')
      .end(done);
  });

  it('Get account page', function (done) {
    request
      .get('/account')
      .expect(200)
      .end(done);
  });
});
