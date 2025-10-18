import { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { alignmentList, literatureList, nonLiteratureList } from '@/constants/home';
import { preferenceList } from '@/constants/onboarding';
import { type FormValues } from '@/pages/home/BookList';
import type { AlignmentListType, filteringContentType, LiteratureListType, NonLiteratureListType } from '@/types/home';
import type { PreferenceListType } from '@/types/onboarding';
import { handleMultiSelector } from '@/utils/home/handleMultiSelector';
import { handleSelector } from '@/utils/home/handleSelector';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { MultiSelector } from '../base/MultiSelector';
import { Selector } from '../base/Selector';
import { Spacing } from '../base/Spacing';
import { Txt } from '../base/Txt';
import { Header } from '../common/Header';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface FilteringModalProps {
  closeModal: () => void;
}

export const FilteringModal = ({ closeModal }: FilteringModalProps) => {
  const { watch, setValue } = useFormContext<FormValues>();

  // 정렬
  const selectedAlignmentItem = watch('selectedAlignmentItem');
  const handleSelectedAlignmentItem = useCallback(
    (key: AlignmentListType) => {
      setValue('selectedAlignmentItem', handleSelector(selectedAlignmentItem, key, 'recommend'));
    },
    [selectedAlignmentItem, setValue],
  );
  // 문학
  const selectedLiteratureList = watch('selectedLiteratureList');
  const handleSelectedLiteratureList = useCallback(
    (key: LiteratureListType) => {
      setValue('selectedLiteratureList', handleMultiSelector(selectedLiteratureList, key));
    },
    [selectedLiteratureList, setValue],
  );
  // 비문학
  const selectedNonLiteratureList = watch('selectedNonLiteratureList');
  const handleSelectedNonLiteratureList = useCallback(
    (key: NonLiteratureListType) => {
      setValue('selectedNonLiteratureList', handleMultiSelector(selectedNonLiteratureList, key));
    },
    [selectedNonLiteratureList, setValue],
  );
  // 분위기
  const selectedAtmosphereList = watch('selectedAtmosphereList');
  const handleSelectedAtmosphereList = useCallback(
    (key: PreferenceListType) => {
      setValue('selectedAtmosphereList', handleMultiSelector(selectedAtmosphereList, key));
    },
    [selectedAtmosphereList, setValue],
  );

  // 초기화
  const handleReset = () => {
    setValue('selectedAlignmentItem', 'recommend');
    setValue('selectedLiteratureList', []);
    setValue('selectedNonLiteratureList', []);
    setValue('selectedAtmosphereList', []);
  };

  // filtering 항목
  const filteringContentList = useMemo<filteringContentType[]>(
    () => [
      {
        label: '정렬',
        isMulti: false,
        list: alignmentList,
        selectedItem: selectedAlignmentItem,
        handleSelectedItem: handleSelectedAlignmentItem,
      },
      {
        label: '문학',
        isMulti: true,
        list: literatureList,
        selectedItem: selectedLiteratureList,
        handleSelectedItem: handleSelectedLiteratureList,
      },
      {
        label: '비문학',
        isMulti: true,
        list: nonLiteratureList,
        selectedItem: selectedNonLiteratureList,
        handleSelectedItem: handleSelectedNonLiteratureList,
      },
      {
        label: '분위기',
        isMulti: true,
        list: preferenceList,
        selectedItem: selectedAtmosphereList,
        handleSelectedItem: handleSelectedAtmosphereList,
      },
    ],
    [
      selectedAlignmentItem,
      selectedLiteratureList,
      selectedNonLiteratureList,
      selectedAtmosphereList,
      handleSelectedAlignmentItem,
      handleSelectedLiteratureList,
      handleSelectedNonLiteratureList,
      handleSelectedAtmosphereList,
    ],
  );

  return (
    <Flex
      direction="column"
      width="402px"
      height="100vh"
      style={{ zIndex: 30, position: 'fixed', top: 0, backgroundColor: paletteTheme.palette.background }}
    >
      <Header isDelete title="필터" handleClose={closeModal} />
      <Flex width="100%" style={{ flex: 1, overflowY: 'scroll' }}>
        <Flex direction="column" width="100%" gap="32px" style={{ padding: '0 20px' }}>
          {filteringContentList.map(({ label, isMulti, list, selectedItem, handleSelectedItem }) => (
            <Flex direction="column" width="100%" gap="12px">
              <Txt typo="point_lg">{label}</Txt>
              {isMulti ? (
                <MultiSelector
                  list={list}
                  selectedList={selectedItem as string[]}
                  handleSelectedList={handleSelectedItem}
                />
              ) : (
                <Selector list={list} selectedItem={selectedItem as string} handleSelectedItem={handleSelectedItem} />
              )}
            </Flex>
          ))}
          <Spacing height="12px" />
        </Flex>
      </Flex>
      <footer
        className={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}
        style={{
          width: '100%',
          height: '80px',
          padding: '0 16px',
          borderTop: `1px solid ${paletteTheme.palette.gray100}`,
        }}
      >
        <Button theme="clear" color="orange" width="87px" height="48px" onClick={handleReset}>
          <Txt typo="title_ml">초기화</Txt>
        </Button>
        <Button type="submit" theme="fill" color="orange" width="275px" height="48px">
          <Txt typo="title_ml">결과 보기</Txt>
        </Button>
      </footer>
    </Flex>
  );
};
