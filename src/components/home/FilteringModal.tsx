import { useFormContext } from 'react-hook-form';

import { alignmentList, literatureList, nonLiteratureList } from '@/constants/home';
import { preferenceList } from '@/constants/onboarding';
import type { AlignmentListType, LiteratureListType, NonLiteratureListType } from '@/types/home';
import type { PreferenceListType } from '@/types/onboarding';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { MultiSelector } from '../base/MultiSelector';
import { Selector } from '../base/Selector';
import { Spacing } from '../base/Spacing';
import { Txt } from '../base/Txt';
import { Header } from '../common/Header';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

export type FormValues = {
  selectedAlignmentItem: AlignmentListType;
  selectedLiteratureList: LiteratureListType[];
  selectedNonLiteratureList: NonLiteratureListType[];
  selectedAtmosphereList: PreferenceListType[];
};

interface FilteringModalProps {
  closeModal: () => void;
  filteredAlignmentItem: AlignmentListType;
  filteredLiteratureList: LiteratureListType[];
  filteredNonLiteratureList: NonLiteratureListType[];
  filteredAtmosphereList: PreferenceListType[];
}

export const FilteringModal = ({
  closeModal,
  filteredAlignmentItem,
  filteredLiteratureList,
  filteredNonLiteratureList,
  filteredAtmosphereList,
}: FilteringModalProps) => {
  const { watch, setValue } = useFormContext<FormValues>();

  // 정렬
  const selectedAlignmentItem = watch('selectedAlignmentItem') ?? filteredAlignmentItem;
  const handleSelectedAlignmentItem = (key: string) => {
    if (key !== selectedAlignmentItem) setValue('selectedAlignmentItem', key);
    else setValue('selectedAlignmentItem', 'recommend');
  };
  //문학
  const selectedLiteratureList = watch('selectedLiteratureList') ?? filteredLiteratureList;
  const handleSelectedLiteratureList = (key: string) => {
    if (selectedLiteratureList.includes(key))
      setValue(
        'selectedLiteratureList',
        selectedLiteratureList.filter((item) => item !== key),
      );
    else setValue('selectedLiteratureList', [...selectedLiteratureList, key]);
  };
  //비문학
  const selectedNonLiteratureList = watch('selectedNonLiteratureList') ?? filteredNonLiteratureList;
  const handleSelectedNonLiteratureList = (key: string) => {
    if (selectedNonLiteratureList.includes(key))
      setValue(
        'selectedNonLiteratureList',
        selectedNonLiteratureList.filter((item) => item !== key),
      );
    else setValue('selectedNonLiteratureList', [...selectedNonLiteratureList, key]);
  };
  //분위기
  const selectedAtmosphereList = watch('selectedAtmosphereList') ?? filteredAtmosphereList;
  const handleSelectedAtmosphereList = (key: string) => {
    if (selectedAtmosphereList.includes(key))
      setValue(
        'selectedAtmosphereList',
        selectedAtmosphereList.filter((item) => item !== key),
      );
    else setValue('selectedAtmosphereList', [...selectedAtmosphereList, key]);
  };

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
          <Flex direction="column" width="100%" gap="12px">
            <Txt typo="point_lg">정렬</Txt>
            <Selector
              list={alignmentList}
              selectedItem={selectedAlignmentItem}
              handleSelectedItem={handleSelectedAlignmentItem}
            />
          </Flex>
          <Flex direction="column" width="100%" gap="12px">
            <Txt typo="point_lg">문학</Txt>
            <MultiSelector
              list={literatureList}
              selectedList={selectedLiteratureList}
              handleSelectedList={handleSelectedLiteratureList}
            />
          </Flex>
          <Flex direction="column" width="100%" gap="12px">
            <Txt typo="point_lg">비문학</Txt>
            <MultiSelector
              list={nonLiteratureList}
              selectedList={selectedNonLiteratureList}
              handleSelectedList={handleSelectedNonLiteratureList}
            />
          </Flex>
          <Flex direction="column" width="100%" gap="12px">
            <Txt typo="point_lg">분위기</Txt>
            <MultiSelector
              list={preferenceList}
              selectedList={selectedAtmosphereList}
              handleSelectedList={handleSelectedAtmosphereList}
            />
          </Flex>
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
        <Button theme="clear" color="orange" width="87px" height="48px">
          <Txt typo="title_ml">초기화</Txt>
        </Button>
        <Button type="submit" theme="fill" color="orange" width="275px" height="48px">
          <Txt typo="title_ml">결과 보기</Txt>
        </Button>
      </footer>
    </Flex>
  );
};
