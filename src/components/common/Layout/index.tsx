import { Outlet } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';

export const Layout = () => {
  return (
    <Flex width="100%" height="100%" alignItems="center" justifyContent="center">
      <Flex direction="column" width="402px" height="100vh" alignItems="center" backgroundColor="background">
        <Outlet />
      </Flex>
    </Flex>
  );
};
