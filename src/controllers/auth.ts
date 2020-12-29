import express = require('express');
import {Container} from 'typedi';
import AuthService from '../services/auth';

const login = async function(req, res) {
  res.send('logging in.');
};

const register = async function(req, res) {
  let authService = Container.get(AuthService);
  let user = await authService.Register('test');
  res.send('registered email: ' + user.email);
};

export function addRoutes(router: express.Router) {
  router.post('/login', login);
  router.get('/register', register);
}
