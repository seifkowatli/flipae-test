import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { NotFound } from '~/components';
import { Home } from '../pages';



//users import
const AddUser = lazy(() => import('../pages/users/profiles/crud/add'))
const EditUser = lazy(() => import('../pages/users/profiles/crud/edit'))
const BrowseUsers = lazy(() => import('../pages/users/profiles/crud/browse'))
const ViewUser = lazy(() => import('../pages/users/profiles/crud/view'))
const UsersHierarchy = lazy(() => import('../pages/users/hierarchy'))



const NavigateTo = path => () => <Navigate to={path} />;

export const publicRoutes = [
  { path: '/', RouteComponent: NavigateTo('/dashboard'), permission: null },
  { path: '/dashboard', RouteComponent: Home, permission: null},

  // Users Profiles
  { path: '/users', RouteComponent: BrowseUsers , permission: null },
  { path: '/users/:id', RouteComponent: ViewUser, permission: null },
  { path: '/users/add', RouteComponent: AddUser, permission: null },
  { path: '/users/hierarchy', RouteComponent: UsersHierarchy, permission: null },
  { path: '/users/edit/:id', RouteComponent: EditUser, permission: null },
  { path: '/*', RouteComponent: NotFound, permission: null },
  ]

export const privateRoutes = [
  { path: '/*', RouteComponent: NotFound, permission: null },
];

export const authRoutes = [
  { path: '/*', RouteComponent: NotFound, permission: null },
];


