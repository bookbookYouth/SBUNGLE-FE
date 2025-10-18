import { useMemo, useState } from 'react';

import AlignmentIcon from '@/assets/alignment.svg?react';
import { Chip } from '@/components/base/Chip';
import { Flex } from '@/components/base/Flex';
import GenericForm from '@/components/base/GenericForm';
import { Grid } from '@/components/base/Grid';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Card } from '@/components/common/Card';
import { Header } from '@/components/common/Header';
import { FilteringModal } from '@/components/home/FilteringModal';
import { alignmentList } from '@/constants/home';
import { useModal } from '@/hooks/useModal';
import { bookData } from '@/mock/bookData';
import type { AlignmentListType, ChipContentType, LiteratureListType, NonLiteratureListType } from '@/types/home';
import type { PreferenceListType } from '@/types/onboarding';
import { getGenreImg } from '@/utils/home/getGenreImg';

import { user } from '.';

import { paletteTheme } from '@/styles/theme.css';

export type FormValues = {
  selectedAlignmentItem: AlignmentListType;
  selectedLiteratureList: LiteratureListType[];
  selectedNonLiteratureList: NonLiteratureListType[];
  selectedAtmosphereList: PreferenceListType[];
};

function BookListPage() {
  const { isOpen, closeModal, openModal } = useModal();
  // 필터링 값 상태
  const [filteredAlignmentItem, setFilteredAlignmentItem] = useState<AlignmentListType>('recommend');
  const [filteredLiteratureList, setFilteredLiteratureList] = useState<LiteratureListType[]>([]);
  const [filteredNonLiteratureList, setFilteredNonLiteratureList] = useState<NonLiteratureListType[]>([]);
  const [filteredAtmosphereList, setFilteredAtmosphereList] = useState<PreferenceListType[]>([]);

  const onSubmit = (data: FormValues) => {
    setFilteredAlignmentItem(data.selectedAlignmentItem);
    setFilteredLiteratureList(data.selectedLiteratureList);
    setFilteredNonLiteratureList(data.selectedNonLiteratureList);
    setFilteredAtmosphereList(data.selectedAtmosphereList);
    closeModal();
  };

  const chipContentList = useMemo<ChipContentType[]>(
    () => [
      {
        label: (
          <Flex gap="4px" alignItems="center" justifyContent="center">
            {alignmentList.find((item) => item.key === filteredAlignmentItem)?.name}
            <AlignmentIcon color={filteredAlignmentItem !== 'recommend' ? 'white' : 'gray400'} width="10px" />
          </Flex>
        ),
        isValue: filteredAlignmentItem !== 'recommend',
      },
      {
        label: '문학',
        isValue: filteredLiteratureList.length > 0,
      },
      {
        label: '비문학',
        isValue: filteredNonLiteratureList.length > 0,
      },
      {
        label: '분위기',
        isValue: filteredAtmosphereList.length > 0,
      },
    ],
    [filteredAlignmentItem, filteredLiteratureList, filteredNonLiteratureList, filteredAtmosphereList],
  );

  return (
    <>
      <Header isLogo isCart />
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
        <Flex height="40px" alignItems="center" justifyContent="center">
          <Txt typo="subTitle_regular">
            <Txt typo="subTitle_bold">{user}</Txt>님을 위한 도서
          </Txt>
        </Flex>
        <Flex alignItems="center" justifyContent="center" gap="12px" wrap="wrap">
          {chipContentList.map(({ label, isValue }) => (
            <Chip style={{ cursor: 'pointer' }} onClick={openModal} theme={isValue ? 'orange' : 'gray'}>
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
      {isOpen && (
        <GenericForm
          formOptions={{
            mode: 'onChange',
            defaultValues: {
              selectedAlignmentItem: filteredAlignmentItem,
              selectedLiteratureList: filteredLiteratureList,
              selectedNonLiteratureList: filteredNonLiteratureList,
              selectedAtmosphereList: filteredAtmosphereList,
            },
          }}
          onSubmit={onSubmit}
        >
          <FilteringModal closeModal={closeModal} />
        </GenericForm>
      )}
    </>
  );
}

export default BookListPage;
