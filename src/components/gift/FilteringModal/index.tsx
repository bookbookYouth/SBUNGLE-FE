import { useCallback, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FilteringModal as CommonFilteringModal } from '@/components/common/FilteringModal';
import { relationList } from '@/constants/gift';
import { ageList, genderList } from '@/constants/onboarding';
import type { FormValues } from '@/pages/gift';
import type { RelationListType } from '@/types/gift';
import type { filteringContentType } from '@/types/home';
import type { AgeListType, GenderListType } from '@/types/onboarding';
import { handleSelector } from '@/utils/home/handleSelector';

interface FilteringModalProps {
  closeModal: () => void;
}

export const FilteringModal = ({ closeModal }: FilteringModalProps) => {
  const { control, setValue } = useFormContext<FormValues>();

  // 성별
  const selectedGenderItem = useWatch({ control, name: 'selectedGenderItem' });
  const handleSelectedGenderItem = useCallback(
    (key: GenderListType) => {
      setValue('selectedGenderItem', handleSelector<GenderListType>(selectedGenderItem, key, ''));
    },
    [selectedGenderItem, setValue],
  );

  // 연령
  const selectedAgeItem = useWatch({ control, name: 'selectedAgeItem' });
  const handleSelectedAgeItem = useCallback(
    (key: AgeListType) => {
      setValue('selectedAgeItem', handleSelector<AgeListType>(selectedAgeItem, key, ''));
    },
    [selectedAgeItem, setValue],
  );

  // 관계
  const selectedRelationItem = useWatch({ control, name: 'selectedRelationItem' });
  const handleSelectedRelationItem = useCallback(
    (key: RelationListType) => {
      setValue('selectedRelationItem', handleSelector<RelationListType>(selectedRelationItem, key, ''));
    },
    [selectedRelationItem, setValue],
  );

  // 초기화
  const handleReset = () => {
    setValue('selectedGenderItem', '');
    setValue('selectedAgeItem', '');
    setValue('selectedRelationItem', '');
  };

  // filtering 항목
  const filteringContentList = useMemo<filteringContentType[]>(
    () => [
      {
        label: '성별',
        isMulti: false,
        list: genderList,
        selectedItem: selectedGenderItem,
        handleSelectedItem: handleSelectedGenderItem,
      },
      {
        label: '연령',
        isMulti: false,
        list: ageList,
        selectedItem: selectedAgeItem,
        handleSelectedItem: handleSelectedAgeItem,
      },
      {
        label: '관계',
        isMulti: false,
        list: relationList,
        selectedItem: selectedRelationItem,
        handleSelectedItem: handleSelectedRelationItem,
      },
    ],
    [
      selectedGenderItem,
      selectedAgeItem,
      selectedRelationItem,
      handleSelectedGenderItem,
      handleSelectedAgeItem,
      handleSelectedRelationItem,
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
