import React from 'react';
import { RouteConfig } from '../../routes/config';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

interface NavigationLinks {
	navigationLinks: RouteConfig[]
}

const Navigation = (props: NavigationLinks) => <>
	<NavLink className="navigation-logo" to={"/"}>Logo</NavLink>

	<ul>
		{ props.navigationLinks.map(({label, to, exact}, index) =>
			<li key={index}>
				<NavLink to={to} exact={exact} activeClassName={styles.selected}>{label}</NavLink>
			</li>) }
	</ul>
</>

export default Navigation;