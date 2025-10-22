import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/common/Footer';

export const MainLayout = () => {
  return (
    <>
      <main style={{ paddingBottom: '88px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
