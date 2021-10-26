import { lazy } from 'react';
import React from 'react';
import { Route } from "react-router-dom";
import routesConfig from './config';
const RouteGuard = lazy(() => import('../components/routeGuard'));

export default routesConfig.map((route, index) => {
    const component = <Route 
        key={index}
        path={route.path}
        exact={route.exact}
        render={(props?: any) => (
            <route.component {...props} routes={route.routes} />
        )}
    />;

    return route.isPrivate ? 
        <RouteGuard key={index}
            path={route.path}
            exact={route.exact} render={(props?: any) => (
            <route.component {...props} routes={route.routes} />
        )} /> : 
        component;
});
