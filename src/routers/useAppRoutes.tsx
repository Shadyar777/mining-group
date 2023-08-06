import { useRoutes } from 'react-router-dom';
import HomePage from '../modules/landingPage /home/view/HomePage';
import AboutPage from '../modules/landingPage /about/view/AboutPage.tsx';
import AssetsEnterprisePage from '../modules/landingPage /assetsEnterprise/view/AssetsEnterprisePage.tsx';
import VacanciesPage from '../modules/landingPage /vacancies/view/VacanciesPage.tsx';
import ContactsPage from '../modules/landingPage /contacts/view/ContactsPage.tsx';
import PressCenterPage from '../modules/landingPage /press-center/view/PressCenterPage.tsx';

export const appRoutes = {
  HOME: '/',
  ABOUT: '/about',
  CONTACTS: '/contacts',
  ASSETS_ENTERPRISE: '/assets-enterprise',
  PRESS_CENTER: '/press-center',
  VACANCIES: '/vacancies',
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
    element: <PressCenterPage />,
  },
  {
    name: 'Услуги',
    path: `${appRoutes.ABOUT}#services`,
    element: <PressCenterPage />,
  },
  {
    name: 'Активы предприятия',
    path: appRoutes.ASSETS_ENTERPRISE,
    element: <AssetsEnterprisePage />,
  },
  {
    name: 'Вакансии',
    path: appRoutes.VACANCIES,
    element: <VacanciesPage />,
  },
  {
    name: 'Контакты',
    path: '/contacts',
    element: <ContactsPage />,
  },
];

const getRouter = () => routers.map(({ path, element }) => ({ path, element }));
export const getLinks = () => routers.map(({ name, path }) => ({ name, path }));

export const useAppRoutes = () => {
  return useRoutes(getRouter());
};
