import { useRoutes } from 'react-router-dom';
import HomePage from './modules/landingPage /home';
import AboutPage from './modules/landingPage /about';

const routers = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
];

export function App() {
  const element = useRoutes(routers);

  return element;
}
