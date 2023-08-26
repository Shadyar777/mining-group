import HomePage from '../home/view/HomePage.tsx';
import AboutPage from '../about/view/AboutPage.tsx';
import AssetsEnterprisePage from '../assetsEnterprise/view/AssetsEnterprisePage.tsx';
import VacanciesPage from '../vacancies/view/VacanciesPage.tsx';
import ContactsPage from '../contacts/view/ContactsPage.tsx';

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
    name: 'main',
    // index: true,
    path: adminRoutes.HOME,
    element: <HomePage />,
  },
  {
    name: 'aboutCompany',
    path: adminRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    name: 'assetsOfEnterprise',
    path: adminRoutes.ASSETS_ENTERPRISE,
    element: <AssetsEnterprisePage />,
  },
  {
    name: 'vacancies',
    path: adminRoutes.VACANCIES,
    element: <VacanciesPage />,
  },
  {
    name: 'services',
    path: `${adminRoutes.ABOUT}#services`,
    // element: <PressCenterPage />,
  },
  {
    name: 'contacts',
    path: adminRoutes.CONTACTS,
    element: <ContactsPage />,
  },
  // {
  //   name: 'Для инвесторов',
  //   path: '/press-center',
  //   element: <PressCenterPage />,
  // },
];
