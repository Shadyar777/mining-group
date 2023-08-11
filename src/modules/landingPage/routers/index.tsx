import HomePage from '../home/view/HomePage.tsx';
import AboutPage from '../about/view/AboutPage.tsx';
import PressCenterPage from '../press-center/view/PressCenterPage.tsx';
import AssetsEnterprisePage from '../assetsEnterprise/view/AssetsEnterprisePage.tsx';
import VacanciesPage from '../vacancies/view/VacanciesPage.tsx';
import ContactsPage from '../contacts/view/ContactsPage.tsx';

export const lendingRoutes = {
  HOME: '/',
  ABOUT: 'about',
  PRESS_CENTER: 'press-center',
  ASSETS_ENTERPRISE: 'assets-enterprise',
  VACANCIES: 'vacancies',
  CONTACTS: 'contacts',
} as const;

export const routersLanding = [
  {
    name: 'Главная',
    index: true,
    path: lendingRoutes.HOME,
    element: <HomePage />,
  },
  {
    name: 'О компании',
    path: lendingRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    name: 'Для инвесторов',
    path: '/press-center',
    element: <PressCenterPage />,
  },
  {
    name: 'Услуги',
    path: `${lendingRoutes.ABOUT}#services`,
    element: <PressCenterPage />,
  },
  {
    name: 'Активы предприятия',
    path: lendingRoutes.ASSETS_ENTERPRISE,
    element: <AssetsEnterprisePage />,
  },
  {
    name: 'Вакансии',
    path: lendingRoutes.VACANCIES,
    element: <VacanciesPage />,
  },
  {
    name: 'Контакты',
    path: lendingRoutes.CONTACTS,
    element: <ContactsPage />,
  },
];
