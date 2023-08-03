import { useRoutes } from 'react-router-dom';
import HomePage from '../modules/landingPage /home/view/HomePage';
import AboutPage from '../modules/landingPage /about/view/AboutPage.tsx';
import AssetsEnterprisePage from '../modules/landingPage /assetsEnterprise/view/AssetsEnterprisePage.tsx';

export const appRoutes = {
  HOME: '/',
  ABOUT: '/about',
  CONTACTS: '/contacts',
  ASSETS_ENTERPRISE: '/assets-enterprise',
  PRESS_CENTER: '/press-center',
  VARCANCIES: '/vacancies',
} as const;

export const routers = [
  {
    name: 'Главная',
    path: appRoutes.HOME,
    element: <HomePage />,
  },
  {
    name: 'О компании',
    path: appRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    name: 'Для инвесторов',
    path: '/press-center',
    element: <div>Для инвесторов!</div>,
  },
  {
    name: 'Активы предприятия',
    path: appRoutes.ASSETS_ENTERPRISE,
    element: <AssetsEnterprisePage />,
  },
  {
    name: 'Контакты',
    path: '/contacts',
    element: <div>Контакты!</div>,
  },
  {
    name: 'Вакансии',
    path: '/vacancies',
    element: <div>Вакансии!</div>,
  },
];

const getRouter = () => routers.map(({ path, element }) => ({ path, element }));
export const getLinks = () => routers.map(({ name, path }) => ({ name, path }));

export const useAppRoutes = () => {
  return useRoutes(getRouter());
};
