import { useState } from 'react';

import { Flex } from '@/components/base/Flex';
import { If } from '@/components/base/If';
import { Tab } from '@/components/base/Tab';
import { Header } from '@/components/common/Header';
import { BookList } from '@/components/wish/BookList';
import { BookstoreList } from '@/components/wish/BookstoreList';

import { paletteTheme } from '@/styles/theme.css';

function WishPage() {
  const [clickedTabItem, setClickedTabItem] = useState<'bookList' | 'bookstoreList'>('bookList');

  const tabList = [
    { label: '도서', value: 'bookList' as const },
    { label: '독립서점', value: 'bookstoreList' as const },
  ];

  return (
    <>
      <Header title="찜" isCart />
      <Flex style={{ position: 'sticky', top: 52, zIndex: 20, backgroundColor: paletteTheme.palette.background }}>
        <Tab>
          {tabList.map((item) => (
            <Tab.Item
              key={item.value}
              onClick={() => setClickedTabItem(item.value)}
              active={clickedTabItem === item.value}
            >
              {item.label}
            </Tab.Item>
          ))}
        </Tab>
      </Flex>
      <If condition={clickedTabItem === 'bookList'}>
        <BookList />
      </If>
      <If condition={clickedTabItem === 'bookstoreList'}>
        <BookstoreList />
      </If>
    </>
  );
}

export default WishPage;
