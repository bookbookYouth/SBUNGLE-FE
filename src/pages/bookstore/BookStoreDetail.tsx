import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Like from '@/assets/like.svg?react';
import { Button } from '@/components/base/Button';
import { Carousel } from '@/components/base/Carousel';
import { Flex } from '@/components/base/Flex';
import { If } from '@/components/base/If';
import { Spacing } from '@/components/base/Spacing';
import { Tab } from '@/components/base/Tab';
import { Txt } from '@/components/base/Txt';
import { Header } from '@/components/common/Header';
import { type Bookstore, bookstoreData } from '@/mock/bookstoreData';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

function BookstoreDetailPage() {
  const { id } = useParams();
  const bookstoreDetailData: Bookstore | undefined = bookstoreData.find((item) => item.id === id);

  const [clickedTabItem, setClickedTabItem] = useState<'bookList' | 'detail'>('bookList');

  const handleLiked = () => {
    // api 연동
  };

  const tabList = [
    { label: '판매 도서', value: 'bookList' as const },
    { label: '상세 정보', value: 'detail' as const },
  ];

  return (
    <>
      <Header
        isBack
        isCart
        color="white"
        title="상세 페이지"
        backgroundColor="transparent"
        iconColor="white"
        style={{ position: 'fixed' }}
      />
      <Flex width="402px" height="480px">
        <Carousel imgArray={bookstoreDetailData?.images || []} />
      </Flex>
      <Flex
        direction="column"
        height="154px"
        alignItems="flex-start"
        justifyContent="center"
        gap="4px"
        style={{ padding: '0 20px' }}
      >
        <Txt typo="point_lg">{bookstoreDetailData?.name}</Txt>
        <Txt typo="point_sm">{bookstoreDetailData?.description}</Txt>
      </Flex>
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
      <Spacing height="20px" />
      <If condition={clickedTabItem === 'bookList'}>
        <></>
      </If>
      <If condition={clickedTabItem === 'detail'}>
        <></>
      </If>
      <Spacing height="108px" />
      <footer
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'background',
        })}
        style={{
          position: 'fixed',
          bottom: 0,
          zIndex: 20,
          width: '100%',
          maxWidth: '402px',
          height: '80px',
          padding: '0 16px',
          borderTop: `1px solid ${paletteTheme.palette.gray100}`,
        }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Like
            className={sprinkles({ cursor: 'pointer' })}
            height="32px"
            width="32px"
            color={paletteTheme.palette.gray300}
            fill={bookstoreDetailData?.liked ? `${paletteTheme.palette.gray300}` : 'transparent'}
            onClick={handleLiked}
          />
          <Txt typo="content_xxs">찜</Txt>
        </Flex>
        <Button theme="clear" color="orange" width="153px" height="48px">
          <Txt typo="title_ml">공유하기</Txt>
        </Button>
        <Button type="submit" theme="fill" color="orange" width="153px" height="48px">
          <Txt typo="title_ml">길찾기</Txt>
        </Button>
      </footer>
    </>
  );
}

export default BookstoreDetailPage;
