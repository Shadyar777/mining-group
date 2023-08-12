import HomePage from '../home/view/HomePage.tsx';
import AboutPage from '../about/view/AboutPage.tsx';
import AssetsEnterprisePage from '../assetsEnterprise/view/AssetsEnterprisePage.tsx';

export const adminRoutes = {
  HOME: '/admin/home',
  ABOUT: '/admin/about',
  ASSETS_ENTERPRISE: '/admin/assets-enterprise',
  // PRESS_CENTER: '/admin/press-center',
  VACANCIES: '/admin/vacancies',
  CONTACTS: '/admin/contacts',
} as const;

export const routersAdmin = [
  {
    name: 'Главная',
    // index: true,
    path: adminRoutes.HOME,
    element: <HomePage />,
  },
  {
    name: 'О компании',
    path: adminRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    name: 'Активы предприятия',
    path: adminRoutes.ASSETS_ENTERPRISE,
    element: <AssetsEnterprisePage />,
  },
  // {
  //   name: 'Для инвесторов',
  //   path: '/press-center',
  //   element: <PressCenterPage />,
  // },
  // {
  //   name: 'Услуги',
  //   path: `${adminRoutes.ABOUT}#services`,
  //   element: <PressCenterPage />,
  // },
  // {
  //   name: 'Вакансии',
  //   path: adminRoutes.VACANCIES,
  //   element: <VacanciesPage />,
  // },
  // {
  //   name: 'Контакты',
  //   path: adminRoutes.CONTACTS,
  //   element: <ContactsPage />,
  // },
];
