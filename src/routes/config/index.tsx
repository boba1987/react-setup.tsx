import { lazy } from 'react';
import routes from '../../constants/routes';
const Home = lazy(() => import('../Home'));
const RouteGuard = lazy(() => import('../../components/routeGuard'));
const UserProfile = lazy(() => import('../UserProfile'));
const NotFound = lazy(() => import('../NotFound'));
const Login = lazy(() => import('../Login'));
const About = lazy(() => import('../About'));
const ToDo = lazy(()=> import('../ToDo'));

export interface RouteConfig {
    path: string,
    component: any,
    label?: string,
    to: string,
    exact?: boolean,
    tag?: any,
    routes?: any,
    private?: boolean
}

export const navigationLinks:RouteConfig[] = [
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
    },
    {
        label: 'todos',
        to: routes.todos,
        exact: true,
        path: routes.todos,
        component: ToDo,
        private: true
    }
]

const config:RouteConfig[]  = [
    ...navigationLinks,
    {
        path: routes.profile,
        tag: RouteGuard,
        component: UserProfile,
        to: routes.profile
    },
    {
        path: routes.login,
        component: Login,
        to: routes.profile
    },
    {
        path: "*",
        component: NotFound,
        to: '/404'
    }
];

export default config;
