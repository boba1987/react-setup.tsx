import React, { Suspense, useState } from 'react';
import './App.scss';
import renderRoutes from '../routes';
import Navigation from '../components/navigation';
import {
	NavLink,
	Switch,
	useHistory,
	withRouter
} from "react-router-dom";
import { navigationLinks }  from '../routes/config';
import { AuthContext, Token, User, initialContext } from "../context/authContext";
import userConstant from '../constants/user';
import Button from '../components/button/button';
import routes from '../constants/routes';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { RouteConfig } from '../routes/config';

const App = () => {
	const accessToken = localStorage.getItem(userConstant.token);
	const accessTokenJson = accessToken ? JSON.parse(accessToken) : null;
	const user = localStorage.getItem(userConstant.user);
	const userJson = user ? JSON.parse(user) : null;
	const [authTokens, setAuthTokens] = useState<Token>(accessTokenJson);
	const [userDetails, setUserDetails] = useState<User>(userJson);
	let history = useHistory();

	const setTokens = (data: Token) => {	
		localStorage.setItem(userConstant.token, JSON.stringify(data));
		setAuthTokens(data);
	};

	const setUser = (data: User) => {	
		localStorage.setItem(userConstant.user, JSON.stringify(data));
		setUserDetails(data);
	};

	const logout = () => {
		if (initialContext?.clearUserDetails) {
			initialContext.clearUserDetails();
			setAuthTokens(null);
			setUserDetails(null);
		}

		history.push(routes.login);
	}

	return (
		<ErrorBoundary>
			<AuthContext.Provider value={{ 
				authTokens,
				userDetails,
				setAuthTokens: setTokens,
				setUserDetails: setUser
			}}>
				<div className="App" data-testid="App">
					<header>
						<Navigation navigationLinks={navigationLinks.filter((link: RouteConfig) => authTokens ? true : !link.isPrivate)} />
						{authTokens ? <Button onclick={logout}>Logout</Button> : <NavLink to={'/login'} exact={true}>Login</NavLink>}
					</header>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							{ renderRoutes }
						</Switch>
					</Suspense>
				</div>
			</AuthContext.Provider>
		</ErrorBoundary>
	)
}

export default withRouter(App);
