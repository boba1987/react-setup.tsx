import React, { Suspense, useState } from 'react';
import './App.scss';
import renderRoutes from '../routes';
import Navigation from '../components/navigation';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import { navigationLinks }  from '../routes/config';
import { AuthContext, Token } from "../context/authContext";
import user from '../constants/user';

const App = () => {
	const token = localStorage.getItem(user.token);
	const tokenJson = token ? JSON.parse(token) : null;
	const [authTokens, setAuthTokens] = useState<Token>(tokenJson);

	const setTokens = (data: any) => {	
		localStorage.setItem(user.token, JSON.stringify(data));
		setAuthTokens(data);
	};

	return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<div className="App">
				<Router>
					<header>
						<Navigation navigationLinks={navigationLinks} />
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
