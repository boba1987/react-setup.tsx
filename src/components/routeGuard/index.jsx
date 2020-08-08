import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from '../../constants/routes';
import { useAuth } from "../../context/authContext";

const RouteGuard = ({ render: renderChild, ...rest }) => {
	const { authTokens } = useAuth();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				authTokens ? (
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