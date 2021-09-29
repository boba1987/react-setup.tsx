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
import user from '../constants/user';

const App = () => {
	const token = localStorage.getItem(user.token);
	const tokenJson = token ? JSON.parse(token) : null;
	const [authTokens, setAuthTokens] = useState<Token>(tokenJson);
	const [userDetails, setUserDetails] = useState<User>(tokenJson);

	const setTokens = (data: Token) => {	
		localStorage.setItem(user.token, JSON.stringify(data));
		setAuthTokens(data);
	};

	const setUser = (data: User) => {	
		localStorage.setItem(user.user, JSON.stringify(data));
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
