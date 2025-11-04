import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';
import { Grid } from '@/components/base/Grid';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { ROUTES } from '@/config/appConfig';
import { bookstoreData } from '@/mock/bookstoreData';

export const BookstoreList = () => {
  const navigate = useNavigate();

  const bookstoreListData = bookstoreData.filter((bookstore) => bookstore.liked);

  return (
    <Flex direction="column" style={{ padding: '0 20px' }}>
      <Spacing height="25px" />
      <Grid colGap="2px" rowGap="20px">
        {bookstoreListData.map((bookStore) => (
          <Grid.Col key={bookStore.id}>
            <Card
              like
              liked={bookStore.liked}
              top={<img src={bookStore.images?.[0]} alt={bookStore.name} style={{ objectFit: 'cover' }} />}
              bottom={
                <Flex direction="column">
                  <Txt typo="point_sm_bold">{bookStore.name}</Txt>
                  <Txt typo="content_sm" color="gray300">
                    {bookStore.address}
                  </Txt>
                </Flex>
              }
              onClick={() => navigate(ROUTES.bookstoreDetail.link(bookStore.id))}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};
