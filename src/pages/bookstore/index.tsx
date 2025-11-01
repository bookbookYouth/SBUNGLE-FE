import { Flex } from '@/components/base/Flex';
import { Slider } from '@/components/base/Slider';
import { Txt } from '@/components/base/Txt';
import BookStory from '@/components/bookstore/BookStory';
import { Header } from '@/components/common/Header';
import { bookstoreData } from '@/mock/bookStoreData';

import { paletteTheme } from '@/styles/theme.css';

function BookstorePage() {
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
          {bookstoreData.best5.map((item) => (
            <BookStory key={item.name} name={item.name} src={item.imageUrl} />
          ))}
        </Slider>
      </Flex>
    </>
  );
}

export default BookstorePage;
