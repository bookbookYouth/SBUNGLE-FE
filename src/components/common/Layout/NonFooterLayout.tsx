import { Outlet } from 'react-router-dom';

export const NonFooterLayout = () => {
  return (
    <div style={{ width: '100%', padding: '0 20px' }}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
