import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Like from '@/assets/like.svg?react';
import { Button } from '@/components/base/Button';
import { Flex } from '@/components/base/Flex';
import { Spacing } from '@/components/base/Spacing';
import { Tab } from '@/components/base/Tab';
import { Txt } from '@/components/base/Txt';
import { Header } from '@/components/common/Header';
import { DetailInfo } from '@/components/home/DetailInfo';
import { ImgCard } from '@/components/home/ImgCard';
import { bookData, type BookDetail } from '@/mock/bookData';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

function BookDetailPage() {
  const params = useParams();
  const bookDetailData: BookDetail | undefined = bookData.find((item) => item.id === params.id);

  const [clickedTabItem, setClickedTabItem] = useState<'detail' | 'review'>('detail');

  const handleLiked = () => {
    // api 연동
  };

  return (
    <>
      <Header isBack isCart />
      <ImgCard genre={bookDetailData?.genre || ''} title={bookDetailData?.title || ''} />
      <Spacing height="20px" />
      <Tab>
        <Tab.Item onClick={() => setClickedTabItem('detail')} active={clickedTabItem === 'detail'}>
          상세 정보
        </Tab.Item>
        <Tab.Item onClick={() => setClickedTabItem('review')} active={clickedTabItem === 'review'}>
          리뷰
        </Tab.Item>
      </Tab>
      <Spacing height="20px" />
      {clickedTabItem === 'detail' && (
        <DetailInfo
          genre={bookDetailData?.genre || ''}
          title={bookDetailData?.title || ''}
          price={bookDetailData?.price.toLocaleString() || ''}
          description={bookDetailData?.description || ''}
        />
      )}
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
            fill={bookDetailData?.liked ? `${paletteTheme.palette.gray300}` : 'transparent'}
            onClick={handleLiked}
          />
          <Txt typo="content_xxs">찜</Txt>
        </Flex>
        <Button theme="clear" color="orange" width="153px" height="48px">
          <Txt typo="title_ml">장바구니</Txt>
        </Button>
        <Button type="submit" theme="fill" color="orange" width="153px" height="48px">
          <Txt typo="title_ml">주문하기</Txt>
        </Button>
      </footer>
    </>
  );
}

export default BookDetailPage;
