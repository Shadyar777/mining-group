import { createBrowserRouter } from 'react-router-dom';
import { LayoutAdmin, LayoutLanding } from '../modules/common/layout';
import { routersLanding } from '../modules/landingPage/routers';
import SignIn from '../modules/admin/signIn/SignIn.tsx';
import { routersAdmin } from '../modules/admin/routers';

const landingMap = routersLanding
  .filter((router) => router.element)
  .map(({ path, element, index }) => ({
    path,
    element,
    index: index ? index : false,
  }));
const adminMap = routersAdmin
  .filter((router) => router.element)
  .map(({ path, element }) => ({
    path,
    element,
  }));

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLanding />,
    children: landingMap,
  },
  {
    path: '/auth',
    element: <SignIn />,
  },
  {
    path: '/admin',
    element: <LayoutAdmin />,
    children: adminMap,
  },
]);
export const getLinksLanding = () =>
  routersLanding.map(({ name, path }) => ({ name, path }));
export const getLinksAdmin = () =>
  routersAdmin.map(({ name, path }) => ({ name, path }));
