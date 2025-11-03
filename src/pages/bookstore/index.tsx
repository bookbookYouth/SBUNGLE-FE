import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';
import { Slider } from '@/components/base/Slider';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { BookstoreList } from '@/components/bookstore/BookstoreList';
import { BookstoreStory } from '@/components/bookstore/BookstoreStory';
import { Header } from '@/components/common/Header';
import { ROUTES } from '@/config/appConfig';
import { best5BookStoreData, subRecommendedBookStoreData, userRecommendedBookStoreData } from '@/mock/bookStoreData';
import { user } from '@/pages/home';

import { paletteTheme } from '@/styles/theme.css';

function BookstorePage() {
  const navigate = useNavigate();

  const subject = '추리소설';

  return (
    <>
      <Header title="독립서점" isCart />
      <Flex
        direction="column"
        style={{ borderBottom: `1px solid ${paletteTheme.palette.gray300}`, paddingBottom: '40px' }}
      >
        <Flex height="48px" alignItems="center" style={{ padding: '0 20px' }}>
          <Txt typo="subTitle_bold">인기 독립서점 best 5</Txt>
        </Flex>
        <Slider>
          {best5BookStoreData.map((item) => (
            <BookstoreStory
              key={item.name}
              name={item.name}
              src={item.images[0]}
              onClick={() => navigate(ROUTES.bookstoreDetail.link(item.name))}
            />
          ))}
        </Slider>
      </Flex>
      <Spacing height="40px" />
      <Flex direction="column" gap="40px" style={{ padding: '0 20px' }}>
        <BookstoreList
          title={
            <Txt typo="subTitle_regular">
              <Txt typo="subTitle_bold">{user}</Txt>님을 위한 독립서점
            </Txt>
          }
          bookStoreData={userRecommendedBookStoreData}
        />
        <BookstoreList
          title={
            <Txt typo="subTitle_bold">
              여름에 보기 좋은
              <Txt typo="subTitle_bold" color="primary">
                {` #${subject} `}
              </Txt>
              전문 서점
            </Txt>
          }
          bookStoreData={subRecommendedBookStoreData}
        />
      </Flex>
    </>
  );
}

export default BookstorePage;
