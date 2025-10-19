import clsx from 'clsx';

import { Flex } from '../Flex';

import { tabItemStyle, tabStyle } from '@/styles/base/tab.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { typo } from '@/styles/typo.css';

interface TabProps {
  children: React.ReactElement<typeof TabItem> | React.ReactElement<typeof TabItem>[];
}

interface TabItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const TabItem = ({ children, onClick, active = false }: TabItemProps) => {
  return (
    <button
      className={clsx(
        typo['subTitle_regular'],
        tabItemStyle,
        sprinkles({ color: 'gray200', cursor: 'pointer', backgroundColor: 'transparent' }),
      )}
      onClick={onClick}
      data-active={active}
      style={{
        flex: 1,
        height: '48px',
      }}
    >
      <Flex alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </button>
  );
};

export const Tab = ({ children }: TabProps) => {
  return (
    <div className={tabStyle}>
      <div style={{ width: 'calc(100% - 40px)' }}>
        <Flex>{children}</Flex>
      </div>
    </div>
  );
};

Tab.Item = TabItem;
