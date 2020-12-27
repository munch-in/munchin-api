import * as express from "express";

const register = async function(req, res) {
  res.send('registering!');
};

export function addRoutes(router: express.Router) {
  router.get('/register', register);
}
