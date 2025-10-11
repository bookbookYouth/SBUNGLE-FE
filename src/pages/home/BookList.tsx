import { Flex } from '@/components/base/Flex';
import { Grid } from '@/components/base/Grid';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { Header } from '@/components/common/Header';
import { bookData } from '@/mock/bookData';
import { getGenreImg } from '@/utils/home/getGenreImg';

import { user } from '.';

function BookListPage() {
  return (
    <>
      <Header isLogo isRight />
      <Flex direction="column" style={{ padding: '0 20px' }}>
        <Flex height="40px" alignItems="center" justifyContent="center">
          <Txt typo="subTitle_regular">
            <Txt typo="subTitle_bold">{user}</Txt>님을 위한 도서
          </Txt>
        </Flex>
        <Spacing height="24px" />
        <Grid colGap="2px" rowGap="20px">
          {bookData.map((book) => (
            <Grid.Col key={book.id}>
              <Card
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
    </>
  );
}

export default BookListPage;
