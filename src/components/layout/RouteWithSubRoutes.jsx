import React from 'react';
import { Route } from 'react-router-dom';

function RouteWithSubRoutes(route) {
  const path = { route };
  return (
    <Route
      path={path}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;
