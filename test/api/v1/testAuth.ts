import {assert} from 'chai';
import request from 'supertest';
import {app} from '../../../src/server';
import {initializeForTesting} from '../../base';

describe('user auth e2e', () => {
  before(async () => {
    await initializeForTesting();
  });

  it('register', async () => {
    await request(app)
      .post('/api/v1/register')
      .send({
        email: 'newuser@munchin.com',
        password: 'password',
      })
      .expect(200);
  });

  it('login', async () => {
    await request(app)
      .post('/api/v1/login')
      .send({
        email: 'newuser@munchin.com',
        password: 'password',
      })
      .expect(200);
  });
});
