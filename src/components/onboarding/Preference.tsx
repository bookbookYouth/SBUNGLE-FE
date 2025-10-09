import { useCallback, useState } from 'react';

import { preferenceList } from '@/constants/onboarding';
import type { PreferenceListType } from '@/type/onboarding';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { MultiSelector } from '../base/MultiSelector';
import { Txt } from '../base/Txt';
import { Title } from './Title';

export const Preference = () => {
  const [selectedPreferenceList, setSelectedPreferenceList] = useState<PreferenceListType[]>([]);

  const handleSelectedPreferenceList = useCallback(
    (key: string) => {
      if (selectedPreferenceList.includes(key))
        setSelectedPreferenceList((prev) => prev.filter((item) => item !== key));
      else setSelectedPreferenceList((prev) => [...prev, key]);
    },
    [selectedPreferenceList],
  );

  return (
    <Flex direction="column" width="100%" gap="206px">
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
      <Button width="100%" height="48px" theme="fill" color="orange" disabled={selectedPreferenceList.length === 0}>
        <Txt typo="subTitle_bold">완료</Txt>
      </Button>
    </Flex>
  );
};
