import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';

import { useAppRoutes } from './routers/useAppRoutes';

export function App() {
  const element = useAppRoutes();

  return (
    <>
      <Header />
      {element}
      <Footer />
    </>
  );
}
