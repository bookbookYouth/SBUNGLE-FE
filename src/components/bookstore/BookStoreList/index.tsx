import type React from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';
import { Grid } from '@/components/base/Grid';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { ROUTES } from '@/config/appConfig';
import type { BookStore } from '@/mock/bookStoreData';

interface BookstoreListProps {
  title: React.ReactNode;
  bookStoreData: BookStore[];
}

export const BookstoreList = ({ title, bookStoreData }: BookstoreListProps) => {
  const navigate = useNavigate();

  return (
    <Flex direction="column">
      <Flex height="48px" alignItems="center">
        {title}
      </Flex>
      <Grid colGap="2px" rowGap="20px">
        {bookStoreData.map((bookStore) => (
          <Grid.Col key={bookStore.name}>
            <Card
              like
              liked={bookStore.liked}
              top={<img src={bookStore.images[0]} alt={bookStore.name} style={{ objectFit: 'cover' }} />}
              bottom={
                <Flex direction="column">
                  <Txt typo="point_sm_bold">{bookStore.name}</Txt>
                  <Txt typo="content_sm" color="gray300">
                    {bookStore.address}
                  </Txt>
                </Flex>
              }
              onClick={() => navigate(ROUTES.bookstoreDetail.link(bookStore.name))}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};
