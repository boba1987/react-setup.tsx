import React from 'react';
import './App.scss';
import renderRoutes from '../routes';
import Navigation from '../components/navigation';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import { navigationLinks }  from '../routes/config';

export default () => <>
	<div className="App">
		<Router>
			<header>
				<Navigation navigationLinks={navigationLinks} />
			</header>
			<Switch>
				{ renderRoutes }
			</Switch>
		</Router>
	</div>
</>;
