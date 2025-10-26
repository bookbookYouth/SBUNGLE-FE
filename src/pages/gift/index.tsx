import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Chip } from '@/components/base/Chip';
import { Flex } from '@/components/base/Flex';
import GenericForm from '@/components/base/GenericForm';
import { Grid } from '@/components/base/Grid';
import { If } from '@/components/base/If';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { Header } from '@/components/common/Header';
import { FilteringModal } from '@/components/gift/FilteringModal';
import { ROUTES } from '@/config/appConfig';
import { useModal } from '@/hooks/useModal';
import { bookData } from '@/mock/bookData';
import type { RelationListType } from '@/types/gift';
import type { ChipContentType } from '@/types/home';
import type { AgeListType, GenderListType } from '@/types/onboarding';
import { getGenreImg } from '@/utils/home/getGenreImg';

import { paletteTheme } from '@/styles/theme.css';

export type FormValues = {
  selectedGenderItem: GenderListType;
  selectedAgeItem: AgeListType;
  selectedRelationItem: RelationListType;
};

function GiftPage() {
  const navigate = useNavigate();
  const { isOpen, closeModal, openModal } = useModal();

  // 필터링 값 상태
  const [filteredGenderItem, setFilteredGenderItem] = useState<GenderListType>('');
  const [filteredAgeItem, setFilteredAgeItem] = useState<AgeListType>('');
  const [filteredRelationItem, setFilteredRelationItem] = useState<RelationListType>('');

  const onSubmit = (data: FormValues) => {
    setFilteredGenderItem(data.selectedGenderItem);
    setFilteredAgeItem(data.selectedAgeItem);
    setFilteredRelationItem(data.selectedRelationItem);
    closeModal();
  };

  const chipContentList = useMemo<ChipContentType[]>(
    () => [
      {
        label: '성별',
        isValue: filteredGenderItem !== '',
      },
      {
        label: '연령',
        isValue: filteredAgeItem !== '',
      },
      {
        label: '관계',
        isValue: filteredRelationItem !== '',
      },
    ],
    [filteredGenderItem, filteredAgeItem, filteredRelationItem],
  );

  return (
    <>
      <Header title="선물하기" isCart />
      <Flex
        direction="column"
        style={{
          position: 'sticky',
          top: '52px',
          zIndex: 20,
          padding: '0 20px 12px',
          backgroundColor: paletteTheme.palette.background,
        }}
      >
        <Flex height="48px" alignItems="center" justifyContent="center">
          <Txt typo="subTitle_bold">선물하기 좋은 책들</Txt>
        </Flex>
        <Flex alignItems="center" justifyContent="center" gap="12px" wrap="wrap">
          {chipContentList.map(({ label, isValue }, idx) => (
            <Chip
              key={`${idx}-${label}`}
              style={{ cursor: 'pointer' }}
              onClick={openModal}
              theme={isValue ? 'orange' : 'gray'}
            >
              {label}
            </Chip>
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" style={{ padding: '0 20px' }}>
        <Spacing height="12px" />
        <Grid colGap="2px" rowGap="20px">
          {bookData.map((book) => (
            <Grid.Col key={book.id}>
              <Card
                like
                liked={book.likedForGift}
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
                onClick={() => navigate(ROUTES.bookDetail.link(book.id, 'gift' as const))}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
      <If condition={isOpen}>
        <GenericForm<FormValues>
          formOptions={{
            mode: 'onChange',
            defaultValues: {
              selectedGenderItem: filteredGenderItem,
              selectedAgeItem: filteredAgeItem,
              selectedRelationItem: filteredRelationItem,
            },
          }}
          onSubmit={onSubmit}
        >
          <FilteringModal closeModal={closeModal} />
        </GenericForm>
      </If>
    </>
  );
}

export default GiftPage;
