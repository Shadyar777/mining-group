import { createBrowserRouter } from 'react-router-dom';
import Layout from '../modules/common/layout';
import { routersLanding } from '../modules/landingPage /routers';
import SignIn from '../modules/admin/signIn/SignIn.tsx';

export const appRoutes = {
  HOME: '/',
  ABOUT: 'about',
  CONTACTS: 'contacts',
  ASSETS_ENTERPRISE: 'assets-enterprise',
  PRESS_CENTER: 'press-center',
  VACANCIES: 'vacancies',
} as const;

const landingMap = routersLanding.map(({ path, element, index }) => ({
  path,
  element,
  index: index ? index : false,
}));
export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: landingMap,
  },
  {
    path: '/auth',
    element: <SignIn />,
  },
]);

export const getLinks = () =>
  routersLanding.map(({ name, path }) => ({ name, path }));
