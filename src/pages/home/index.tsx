import { Carousel } from '@/components/base/Carousel';
import { Flex } from '@/components/base/Flex';
import { Grid } from '@/components/base/Grid';
import { Slider } from '@/components/base/Slider';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { Header } from '@/components/common/Header';
import { bookForTodayData, bookForUserData } from '@/mock/bookData';
import { getGenreImg } from '@/utils/home/getGenreImg';

import arrowIcon from '@/assets/arrow.svg';
import bannerImg1 from '@/assets/banner.svg';

function HomePage() {
  const imgArray = [bannerImg1, bannerImg1, bannerImg1, bannerImg1, bannerImg1];
  const user = '지효';

  return (
    <>
      <Header isLogo isRight />
      <Flex direction="column">
        <Carousel imgArray={imgArray} />
        <Spacing height="19px" />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="48px"
          width="100%"
          style={{ padding: '0 20px' }}
        >
          <Txt typo="subTitle_regular">
            <Txt typo="subTitle_bold">{user}</Txt>님을 위한 오늘의 추천 도서
          </Txt>
          <Flex alignItems="center" gap="4px" style={{ cursor: 'pointer' }}>
            <Txt typo="content_sm" color="gray300">
              모든 책 보기
            </Txt>
            <img src={arrowIcon} alt="arrow" />
          </Flex>
        </Flex>
        <Slider>
          {bookForUserData.map((book) => (
            <Card
              key={book.id}
              theme="small"
              like
              liked={book.liked}
              genre={book.genre}
              top={<img src={getGenreImg(book.genre)} alt={book.title} style={{ objectFit: 'cover' }} />}
              bottom={
                <Flex direction="column">
                  <Txt typo="point_sm">{book.title}</Txt>
                  <Txt typo="content_sm" color="gray300">
                    {book.price.toLocaleString()}
                  </Txt>
                </Flex>
              }
            />
          ))}
        </Slider>
        <Spacing height="40px" />
        <Flex direction="column" style={{ padding: '0 20px' }}>
          <Flex alignItems="center" height="48px">
            <Txt typo="subTitle_bold">Blur 독자들의 랭킹</Txt>
          </Flex>
          <Grid colGap="2px" rowGap="20px">
            {bookForTodayData.map((book, rank) => (
              <Grid.Col key={book.id}>
                <Card
                  rank={rank + 1}
                  like
                  liked={book.liked}
                  genre={book.genre}
                  top={<img src={getGenreImg(book.genre)} alt={book.title} style={{ objectFit: 'cover' }} />}
                  bottom={
                    <Flex direction="column">
                      <Txt typo="point_sm">{book.title}</Txt>
                      <Txt typo="content_sm" color="gray300">
                        {book.price.toLocaleString()}
                      </Txt>
                    </Flex>
                  }
                />
              </Grid.Col>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;
