import HomePage from '../home/view/HomePage.tsx';
import AboutPage from '../about/view/AboutPage.tsx';
import PressCenterPage from '../press-center/view/PressCenterPage.tsx';
import AssetsEnterprisePage from '../assetsEnterprise/view/AssetsEnterprisePage.tsx';
import VacanciesPage from '../vacancies/view/VacanciesPage.tsx';
import ContactsPage from '../contacts/view/ContactsPage.tsx';

export const appRoutes = {
  HOME: '/',
  ABOUT: '/about',
  CONTACTS: '/contacts',
  ASSETS_ENTERPRISE: '/assets-enterprise',
  PRESS_CENTER: '/press-center',
  VACANCIES: '/vacancies',
} as const;

export const routersLanding = [
  {
    name: 'Главная',
    index: true,
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
    path: appRoutes.CONTACTS,
    element: <ContactsPage />,
  },
];
