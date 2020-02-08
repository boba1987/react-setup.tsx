import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from '../../constants/routes';
import localstore from '../../services/localstoreService';

const RouteGuard = ({ render: renderChild, ...rest }) => {
	const isAuthenticated = !!localstore.getItem('token');
    return (
		<Route
        	{...rest}
        	render={({ location }) =>
				isAuthenticated ? (
					renderChild()
				) : (
            	<Redirect
              		to={{
						pathname: routes.login,
						state: { from: location }
              		}}
            	/>
          	)}
      	/>
    );
};

export default RouteGuard;