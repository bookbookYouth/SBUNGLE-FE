import { useCallback, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FilteringModal as CommonFilteringModal } from '@/components/common/FilteringModal';
import { alignmentList, literatureList, nonLiteratureList } from '@/constants/home';
import { preferenceList } from '@/constants/onboarding';
import { type FormValues } from '@/pages/home/BookList';
import type { AlignmentListType, filteringContentType, LiteratureListType, NonLiteratureListType } from '@/types/home';
import type { PreferenceListType } from '@/types/onboarding';
import { handleMultiSelector } from '@/utils/home/handleMultiSelector';
import { handleSelector } from '@/utils/home/handleSelector';

interface FilteringModalProps {
  closeModal: () => void;
}

export const FilteringModal = ({ closeModal }: FilteringModalProps) => {
  const { control, setValue } = useFormContext<FormValues>();

  // 정렬
  const selectedAlignmentItem = useWatch({ control, name: 'selectedAlignmentItem' });
  const handleSelectedAlignmentItem = useCallback(
    (key: AlignmentListType) => {
      setValue('selectedAlignmentItem', handleSelector<AlignmentListType>(selectedAlignmentItem, key, ''));
    },
    [selectedAlignmentItem, setValue],
  );
  // 문학
  const selectedLiteratureList = useWatch({ control, name: 'selectedLiteratureList' });
  const handleSelectedLiteratureList = useCallback(
    (key: LiteratureListType) => {
      setValue('selectedLiteratureList', handleMultiSelector<LiteratureListType>(selectedLiteratureList, key));
    },
    [selectedLiteratureList, setValue],
  );
  // 비문학
  const selectedNonLiteratureList = useWatch({ control, name: 'selectedNonLiteratureList' });
  const handleSelectedNonLiteratureList = useCallback(
    (key: NonLiteratureListType) => {
      setValue('selectedNonLiteratureList', handleMultiSelector<NonLiteratureListType>(selectedNonLiteratureList, key));
    },
    [selectedNonLiteratureList, setValue],
  );
  // 분위기
  const selectedAtmosphereList = useWatch({ control, name: 'selectedAtmosphereList' });
  const handleSelectedAtmosphereList = useCallback(
    (key: PreferenceListType) => {
      setValue('selectedAtmosphereList', handleMultiSelector<PreferenceListType>(selectedAtmosphereList, key));
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
    <CommonFilteringModal
      closeModal={closeModal}
      handleReset={handleReset}
      filteringContentList={filteringContentList}
    />
  );
};
