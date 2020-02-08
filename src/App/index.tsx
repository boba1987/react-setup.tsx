import React from 'react';
import './App.scss';
import renderRoutes from '../routes';
import Navigation from '../components/navigation';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";


function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<Navigation />
				</header>
				<Switch>
					{ renderRoutes }
				</Switch>
			</Router>
		</div>
	);
}

export default App;
