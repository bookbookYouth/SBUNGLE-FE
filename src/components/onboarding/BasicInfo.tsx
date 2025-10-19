import { useFormContext, useWatch } from 'react-hook-form';

import { ageList, genderList, STEPS } from '@/constants/onboarding';
import type { AgeListType, GenderListType } from '@/types/onboarding';
import { handleSelector } from '@/utils/home/handleSelector';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { Selector } from '../base/Selector';
import { Spacing } from '../base/Spacing';
import { Txt } from '../base/Txt';
import { Question } from './Question';
import { StepBar } from './StepBar';
import { Title } from './Title';

type FormValues = {
  gender: GenderListType | '';
  age: AgeListType | '';
};

export const BasicInfo = ({ onNext }: { onNext: () => void }) => {
  const { control, setValue } = useFormContext<FormValues>();

  const selectedGenderItem = useWatch({ control, name: 'gender', defaultValue: '' });
  const selectedAgeItem = useWatch({ control, name: 'age', defaultValue: '' });

  const handleSelectedGenreItem = (key: string) => {
    setValue('gender', handleSelector<GenderListType>(selectedGenderItem, key, ''));
  };

  const handleSelectedAgeItem = (key: string) => {
    setValue('age', handleSelector<AgeListType>(selectedAgeItem, key, ''));
  };

  return (
    <>
      <StepBar step={STEPS.indexOf('기본 정보') + 1} />
      <Spacing height="38px" />
      <Flex direction="column" width="100%" gap="52px">
        <Title
          pointTitle="당신"
          firstLineTitle="에 대해"
          secondLineTitle="Blur에게 알려주세요."
          subTitle="책 추천해 드리는 데에 큰 도움이 돼요"
        />
        <Flex direction="column" gap="20px" width="100%">
          <Question pointTxt="성별" restTxt="을 알려주세요" />
          <Selector list={genderList} selectedItem={selectedGenderItem} handleSelectedItem={handleSelectedGenreItem} />
        </Flex>
        <Flex direction="column" gap="20px" width="100%">
          <Question pointTxt="나이" restTxt="를 알려주세요" />
          <Selector list={ageList} selectedItem={selectedAgeItem} handleSelectedItem={handleSelectedAgeItem} />
        </Flex>
      </Flex>
      <Spacing height="50px" />
      <Button
        width="100%"
        height="48px"
        theme="fill"
        color="orange"
        onClick={onNext}
        disabled={selectedGenderItem === '' || selectedAgeItem === ''}
      >
        <Txt typo="subTitle_bold">다음</Txt>
      </Button>
    </>
  );
};
