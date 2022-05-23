// const should = require('should');
const request = require('supertest');
const app = require('../app');

decribe('GET /users', () => {
  it('should resturn 200 status code', (done) => {
    request(app)
      // post+send delete 다 가능
      .get('/users')
      .expect(200)
      .end((err) => {
        if (err) throw err;
        // it 함수의 종료를 알리는 done
        done();
      });
  });
});
