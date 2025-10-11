import { Outlet } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';

import { paletteTheme } from '@/styles/theme.css';

export const Layout = () => {
  return (
    <Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
      <Flex
        width="402px"
        height="100%"
        direction="column"
        alignItems="stretch"
        style={{
          width: '402px',
          maxWidth: '402px',
          minHeight: '100vh',
          backgroundColor: paletteTheme.palette.background,
        }}
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
