import React from 'react';
import { Route } from "react-router-dom";
import routesConfig from './config';

export default routesConfig.map((route, index) => {
    const Tag = route.tag || Route;
    return (<Tag 
        key={index}
        path={route.path}
        exact={route.exact}
        render={(props?: any) => (
            <route.component {...props} routes={route.routes} />
        )}
    />)
});
