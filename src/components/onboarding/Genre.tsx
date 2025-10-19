import { useFormContext, useWatch } from 'react-hook-form';

import { genreList, STEPS } from '@/constants/onboarding';
import type { GenreListType } from '@/types/onboarding';
import { handleMultiSelector } from '@/utils/home/handleMultiSelector';

import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { MultiSelector } from '../base/MultiSelector';
import { Spacing } from '../base/Spacing';
import { Txt } from '../base/Txt';
import { StepBar } from './StepBar';
import { Title } from './Title';

type FormValues = {
  genre: GenreListType[];
};

export const Genre = ({ onNext }: { onNext: () => void }) => {
  const { control, setValue } = useFormContext<FormValues>();

  const selectedGenreList = useWatch({ control, name: 'genre', defaultValue: [] });

  const handleSelectedGenreList = (key: string) => {
    setValue('genre', handleMultiSelector<GenreListType>(selectedGenreList, key));
  };

  return (
    <>
      <StepBar step={STEPS.indexOf('장르') + 1} />
      <Spacing height="38px" />
      <Flex direction="column" width="100%" gap="52px">
        <Title
          pointTitle="좋아하는 장르"
          firstLineTitle="를"
          secondLineTitle="모두 선택해 주세요."
          subTitle="좋아하는 장르는 나중에 다시 수정할 수 있어요"
        />
        <MultiSelector list={genreList} selectedList={selectedGenreList} handleSelectedList={handleSelectedGenreList} />
      </Flex>
      <Spacing height="258px" />
      <Button
        width="100%"
        height="48px"
        theme="fill"
        color="orange"
        onClick={onNext}
        disabled={selectedGenreList.length === 0}
      >
        <Txt typo="subTitle_bold">다음</Txt>
      </Button>
    </>
  );
};
