import express = require('express');
import {Container} from 'typedi';
import AuthService from '../../../services/auth';

const login = async function (req, res) {
  res.send('logging in.');
};

const register = async function (req, res) {
  const authService = Container.get(AuthService);
  const user = await authService.Register('test');
  res.status(200).json({email: 'test'});
};

export function addRoutes(router: express.Router) {
  router.post('/login', login);
  router.get('/register', register);
}
