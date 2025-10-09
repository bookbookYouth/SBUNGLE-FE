import { useCallback, useState } from 'react';

import { ageList, genderList } from '@/constants/onboarding';
import type { AgeListType, GenderListType } from '@/type/onboarding';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { Selector } from '../base/Selector';
import { Txt } from '../base/Txt';
import { Question } from './Question';
import { Title } from './Title';

export const BasicInfo = () => {
  const [selectedGenderItem, setSelectedGenderItem] = useState<GenderListType | ''>('');
  const [selectedAgeItem, setSelectedAgeItem] = useState<AgeListType | ''>('');

  const handleSelectedGenreItem = useCallback(
    (key: string) => {
      if (key !== selectedGenderItem) setSelectedGenderItem(key);
      else setSelectedGenderItem('');
    },
    [selectedGenderItem],
  );
  const handleSelectedAgeItem = useCallback(
    (key: string) => {
      if (key !== selectedAgeItem) setSelectedAgeItem(key);
      else setSelectedAgeItem('');
    },
    [selectedAgeItem],
  );

  return (
    <Flex direction="column" width="100%" gap="50px">
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
      <Button
        width="100%"
        height="48px"
        theme="fill"
        color="orange"
        disabled={selectedGenderItem === '' || selectedAgeItem === ''}
      >
        <Txt typo="subTitle_bold">다음</Txt>
      </Button>
    </Flex>
  );
};
