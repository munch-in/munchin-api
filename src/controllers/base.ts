import express = require('express');

interface RouterClass {
  addRoutes(router: express.Router): void;
}

export function createRouter(mountPath: String, routerClass: RouterClass, preRouteMiddleware = []) {
  let router = express.Router();
  routerClass.addRoutes(router);
  return [mountPath, ...preRouteMiddleware, router];
}
