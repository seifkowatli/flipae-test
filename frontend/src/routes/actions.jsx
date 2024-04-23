import React from 'react';

export const routesRenderer = (routes, RouteComponent) =>
  routes.map(route => React.cloneElement(RouteComponent, route));
