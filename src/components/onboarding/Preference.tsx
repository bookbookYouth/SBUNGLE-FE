import { useFormContext, useWatch } from 'react-hook-form';

import { preferenceList, STEPS } from '@/constants/onboarding';
import type { PreferenceListType } from '@/types/onboarding';
import { handleMultiSelector } from '@/utils/home/handleMultiSelector';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { MultiSelector } from '../base/MultiSelector';
import { Spacing } from '../base/Spacing';
import { Txt } from '../base/Txt';
import { StepBar } from './StepBar';
import { Title } from './Title';

type FormValues = {
  preference: PreferenceListType[];
};

export const Preference = () => {
  const { control, setValue } = useFormContext<FormValues>();

  const selectedPreferenceList = useWatch({ control, name: 'preference', defaultValue: [] });

  const handleSelectedPreferenceList = (key: string) => {
    setValue('preference', handleMultiSelector<PreferenceListType>(selectedPreferenceList, key));
  };

  return (
    <>
      <StepBar step={STEPS.indexOf('취향') + 1} />
      <Spacing height="38px" />
      <Flex direction="column" width="100%" gap="52px">
        <Title
          pointTitle="당신의 취향"
          firstLineTitle="을"
          secondLineTitle="알려 주세요."
          subTitle="취향은 나중에 다시 수정할 수 있어요"
        />
        <MultiSelector
          list={preferenceList}
          selectedList={selectedPreferenceList}
          handleSelectedList={handleSelectedPreferenceList}
        />
      </Flex>
      <Spacing height="206px" />
      <Button
        type="submit"
        width="100%"
        height="48px"
        theme="fill"
        color="orange"
        disabled={selectedPreferenceList.length === 0}
      >
        <Txt typo="subTitle_bold">완료</Txt>
      </Button>
    </>
  );
};
