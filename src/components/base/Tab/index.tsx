import clsx from 'clsx';

import { Flex } from '../Flex';

import { tabStyle } from '@/styles/common/tab.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { typo } from '@/styles/typo.css';

interface TabProps {
  children: React.ReactElement<typeof TabItem> | React.ReactElement<typeof TabItem>[];
}

interface TabItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const TabItem = ({ children, onClick }: TabItemProps) => {
  return (
    <button
      className={clsx(typo['subTitle_regular'], tabStyle, sprinkles({ color: 'gray200', cursor: 'pointer' }))}
      onClick={onClick}
      style={{
        flex: 1,
        height: '48px',
        backgroundColor: 'transparent',
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
    <div style={{ width: '100%' }}>
      <Flex>{children}</Flex>
    </div>
  );
};

Tab.Item = TabItem;
