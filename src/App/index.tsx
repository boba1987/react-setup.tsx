import React, { Suspense, useState } from 'react';
import './App.scss';
import renderRoutes from '../routes';
import Navigation from '../components/navigation';
import {
	BrowserRouter as Router,
	NavLink,
	Switch
} from "react-router-dom";
import { navigationLinks }  from '../routes/config';
import { AuthContext, Token, User } from "../context/authContext";
import userConstant from '../constants/user';

const App = () => {
	const accessToken = localStorage.getItem(userConstant.token);
	const accessTokenJson = accessToken ? JSON.parse(accessToken) : null;
	const user = localStorage.getItem(userConstant.user);
	const userJson = user ? JSON.parse(user) : null;
	const [authTokens, setAuthTokens] = useState<Token>(accessTokenJson);
	const [userDetails, setUserDetails] = useState<User>(userJson);

	const setTokens = (data: Token) => {	
		localStorage.setItem(userConstant.token, JSON.stringify(data));
		setAuthTokens(data);
	};

	const setUser = (data: User) => {	
		localStorage.setItem(userConstant.user, JSON.stringify(data));
		setUserDetails(data);
	};

	return (
		<AuthContext.Provider value={{ 
				authTokens,
				userDetails,
				setAuthTokens: setTokens,
				setUserDetails: setUser
			}}>
			<div className="App">
				<Router>
					<header>
						<Navigation navigationLinks={navigationLinks} />
						{!authTokens && <NavLink to={'/login'} exact={true}>Login</NavLink>}
					</header>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							{ renderRoutes }
						</Switch>
					</Suspense>
				</Router>
			</div>
		</AuthContext.Provider>
	)
}

export default App;
