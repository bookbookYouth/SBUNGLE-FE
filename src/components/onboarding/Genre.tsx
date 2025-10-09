import { useCallback, useState } from 'react';

import { genreList, STEPS } from '@/constants/onboarding';
import type { GenreListType } from '@/type/onboarding';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { MultiSelector } from '../base/MultiSelector';
import { Spacing } from '../base/Spacing';
import { Txt } from '../base/Txt';
import { Header } from '../common/Header';
import { StepBar } from './StepBar';
import { Title } from './Title';

import { container } from '@/styles/page/onboarding.css';

export const Genre = ({ onNext }: { onNext: () => void }) => {
  const [selectedGenreList, setSelectedGenreList] = useState<GenreListType[]>([]);

  const handleSelectedGenreList = useCallback(
    (key: string) => {
      if (selectedGenreList.includes(key)) setSelectedGenreList((prev) => prev.filter((item) => item !== key));
      else setSelectedGenreList((prev) => [...prev, key]);
    },
    [selectedGenreList],
  );

  return (
    <Flex direction="column" width="100%">
      <Header isLeft />
      <Spacing height="20px" />
      <div className={container}>
        <StepBar step={STEPS.indexOf('장르') + 1} />
        <Flex direction="column" width="100%" gap="52px">
          <Title
            pointTitle="좋아하는 장르"
            firstLineTitle="를"
            secondLineTitle="모두 선택해 주세요."
            subTitle="좋아하는 장르는 나중에 다시 수정할 수 있어요"
          />
          <MultiSelector
            list={genreList}
            selectedList={selectedGenreList}
            handleSelectedList={handleSelectedGenreList}
          />
        </Flex>
        <Spacing height="182px" />
        <Button width="100%" height="48px" theme="fill" color="orange" disabled={selectedGenreList.length === 0}>
          <Txt typo="subTitle_bold">다음</Txt>
        </Button>
      </div>
    </Flex>
  );
};
