import { Request } from 'express';

export function getRoute(req: Request) {
  const route = req.route ? req.route.path : '';
  const baseUrl = req.baseUrl ? req.baseUrl : '';

  return route ? `${baseUrl === '/' ? '' : baseUrl}${route}` : 'unknown route';
}
