import express = require('express');
import {Container} from 'typedi';
import AuthService from '../../../services/auth';

const login = async function (req, res) {
  const authService = Container.get(AuthService);
  const user = await authService.Login(req.body.email, req.body.password);
  // TODO add transform layer
  // TODO send back user and token
  res.send({user: user});
};

const register = async function (req, res) {
  const authService = Container.get(AuthService);
  const user = await authService.Register(req.body.email, req.body.password);
  // TODO add transform layer
  // TODO send back user and token
  res.send({user: user});
};

export function addRoutes(router: express.Router) {
  router.post('/login', login);
  router.post('/register', register);
}
