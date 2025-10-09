import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';

import { layoutStyle } from '@/styles/base/layout.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const Layout = () => {
  return (
    <Flex width="100%" height="100%" alignItems="center" justifyContent="center">
      <div
        className={clsx(
          layoutStyle,
          sprinkles({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background',
          }),
        )}
      >
        <Outlet />
      </div>
    </Flex>
  );
};
