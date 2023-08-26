import { createBrowserRouter } from 'react-router-dom';
import { LayoutLanding } from '../modules/common/layout';
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

const admin = [
  {
    path: '/auth',
    element: <SignIn />,
  },
  {
    path: '/admin',
    children: adminMap,
  },
];

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLanding />,
    children: [...landingMap, ...admin],
  },
]);
export const getLinksLanding = () =>
  routersLanding
    .filter((item) => !item.skip)
    .map(({ name, path }) => ({ name, path }));
export const getLinksAdmin = () =>
  routersAdmin.map(({ name, path }) => ({ name, path }));
