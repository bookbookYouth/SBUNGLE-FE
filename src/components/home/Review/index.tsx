import { useState } from 'react';

import { Chip } from '@/components/base/Chip';
import { Flex } from '@/components/base/Flex';
import { Spacing } from '@/components/base/Spacing';
import { Table } from '@/components/base/Table';
import { Txt } from '@/components/base/Txt';
import { ReviewCard } from '@/components/home/Review/ReviewCard';
import { ReviewRegisterCard } from '@/components/home/Review/ReviewRegisterCard';
import { StarDisplay } from '@/components/home/Review/StarDisplay';
import { reviewList } from '@/mock/bookData';

import { paletteTheme } from '@/styles/theme.css';

interface ReviewProps {
  bookId: string;
}

export const Review = ({ bookId }: ReviewProps) => {
  const [alignReviewList, setAlignReviewList] = useState<'liked' | 'latest'>('liked');

  const reviewData = reviewList.find((review) => review.bookId === bookId);

  const chipList = [
    { label: '공감순', value: 'liked' },
    { label: '최신순', value: 'latest' },
  ];

  return (
    <>
      <ReviewRegisterCard />
      <Spacing height="20px" />
      <Table
        head={
          <Table.HCell theme="solid" style={{ paddingLeft: '20px' }}>
            <Txt typo="subTitle_bold">독자 리뷰</Txt>
          </Table.HCell>
        }
        scrollableBody={true}
        body={
          <>
            <Table.Row>
              <Table.Cell
                theme="solid"
                style={{
                  position: 'sticky',
                  top: 0,
                  backgroundColor: paletteTheme.palette.background,
                  borderBottom: `1px solid ${paletteTheme.palette.black}`,
                  zIndex: 10,
                }}
              >
                <Flex
                  height="44px"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ padding: '8px 20px', boxSizing: 'content-box' }}
                >
                  <StarDisplay size="large" score={reviewData?.averageScore || 0} />
                  <Flex direction="row" justifyContent="center" alignItems="center" gap="7px">
                    {chipList.map((chip) => (
                      <Chip
                        key={chip.value}
                        theme={chip.value === alignReviewList ? 'orange' : 'gray'}
                        onClick={() => setAlignReviewList(chip.value as 'liked' | 'latest')}
                      >
                        {chip.label}
                      </Chip>
                    ))}
                  </Flex>
                </Flex>
              </Table.Cell>
            </Table.Row>
            {reviewData &&
              reviewData.reviews.map((review) => (
                <Table.Row key={review.id}>
                  <Table.Cell theme="solid">
                    <ReviewCard {...review} />
                  </Table.Cell>
                </Table.Row>
              ))}
          </>
        }
      />
    </>
  );
};
