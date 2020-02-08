import React from 'react';
import { navigationLinks } from '../../routes/config';
import { NavLink } from 'react-router-dom';
import './navigation.module.scss';

function Navigation() {
	return (
		<div>
			<NavLink className="navigation-logo" to={"/"}>Logo</NavLink>

			<ul>
				{ navigationLinks.map(({label, to, exact}, index) =>
					<li key={index}>
						<NavLink to={to} exact={exact} activeClassName="selected">{label}</NavLink>
					</li>) }
			</ul>

		</div>
  	);
}

export default Navigation;
