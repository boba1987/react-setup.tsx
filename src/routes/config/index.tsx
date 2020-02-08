import routes from '../../constants/routes';
import RouteGuard from '../../components/routeGuard';
import UserProfile from '../UserProfile';
import NotFound from '../NotFound';
import Login from '../Login';
import Home from '../Home';
import About from '../About';

interface RouteConfig {
    path: string,
    component: any,
    label?: string,
    to?: string,
    exact?: boolean,
    tag?: any,
    routes?: any
}

export const navigationLinks = [
    {
        label: 'home',
        to: routes.home,
        exact: true,
        path: routes.home,
        component: Home
    },
    {
        label: 'about',
        to: routes.about,
        exact: true,
        path: routes.about,
        component: About
    }
]

const config:RouteConfig[] = [
    ...navigationLinks,
    {
        path: routes.profile,
        tag: RouteGuard,
        component: UserProfile
    },
    {
        path: routes.login,
        component: Login
    },
    {
        path: "*",
        component: NotFound
    }
];

export default config;
