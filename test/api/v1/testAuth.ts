import {assert} from 'chai';
import request from 'supertest';
import {Container} from 'typedi';
import {app} from '../../../src/server';
import AuthService from '../../../src/services/auth';

describe('auth routes', () => {
  before(() => {
    const authService = {
      async Register() {
        console.log('que?');
        return;
      },
    };
    Container.set(AuthService, authService);
  });

  it('test inject', async () => {
    const res = await request(app).get('/api/v1/register').expect(200);
    assert.equal(res.body.email, 'test');
  });
});
