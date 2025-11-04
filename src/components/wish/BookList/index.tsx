import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';
import { Grid } from '@/components/base/Grid';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { ROUTES } from '@/config/appConfig';
import { bookData } from '@/mock/bookData';
import { getGenreImg } from '@/utils/home/getGenreImg';

export const BookList = () => {
  const navigate = useNavigate();

  const bookListData = bookData.filter((book) => book.liked);

  return (
    <Flex direction="column" style={{ padding: '0 20px' }}>
      <Spacing height="25px" />
      <Grid colGap="2px" rowGap="20px">
        {bookListData.map((book) => (
          <Grid.Col key={book.id}>
            <Card
              like
              liked={book.liked}
              genre={book.genre}
              top={<img src={getGenreImg(book.genre)} alt={book.title} style={{ objectFit: 'cover' }} />}
              bottom={
                <Flex direction="column">
                  <Txt typo="point_sm_bold">{book.title}</Txt>
                  <Txt typo="content_sm" color="gray300">
                    {book.price.toLocaleString()}
                  </Txt>
                </Flex>
              }
              onClick={() => navigate(ROUTES.bookDetail.link(book.id, 'buy' as const))}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};
