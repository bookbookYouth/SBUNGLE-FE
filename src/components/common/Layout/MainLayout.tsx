import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';

export const MainLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
