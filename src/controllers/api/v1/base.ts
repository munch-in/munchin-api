import express = require('express');

interface RouterClass {
  addRoutes(router: express.Router): void;
}

export function createRouter(mountPath: string, routerClass: RouterClass, preRouteMiddleware = []) {
  const router = express.Router();
  routerClass.addRoutes(router);
  return [mountPath, ...preRouteMiddleware, router];
}
