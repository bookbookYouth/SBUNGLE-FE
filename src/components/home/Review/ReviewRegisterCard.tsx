import { useState } from 'react';

import { Flex } from '@/components/base/Flex';
import { Input } from '@/components/base/Input';
import { Txt } from '@/components/base/Txt';
import { StarRate } from '@/components/home/Review/StarRate';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

export const ReviewRegisterCard = () => {
  //starRate
  const [starRating, setStarRating] = useState<number>(0);

  // input
  const [inputValue, setInputValue] = useState<string>('');
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // review 등록
  const handleRegister = () => {
    // api 연동
    setInputValue('');
    setStarRating(0);
  };

  return (
    <Flex
      width="100%"
      height="162px"
      gap="4px"
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        borderTop: `2px solid ${paletteTheme.palette.black}`,
        borderBottom: `2px solid ${paletteTheme.palette.black}`,
      }}
    >
      <Flex height="22px">
        <Txt typo="subTitle_sm_bold">별점을 선택해주세요.</Txt>
      </Flex>
      <Flex height="44px" alignItems="center">
        <StarRate starRating={starRating} setStarRating={setStarRating} />
      </Flex>
      <Flex
        direction="row"
        gap="4px"
        width="100%"
        height="56px"
        alignItems="center"
        justifyContent="space-between"
        style={{ padding: '8px 20px 0' }}
      >
        <Input
          placeholder="감상평을 작성해주세요."
          height="48px"
          width="258px"
          inputValue={inputValue}
          onChange={changeInputValue}
        />
        <button
          className={sprinkles({
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          })}
          style={{
            padding: '13px 20px',
            height: '48px',
            border: `1px solid ${paletteTheme.palette.black}`,
          }}
          onClick={handleRegister}
        >
          <Txt color="primary" typo="subTitle_bold" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>
            리뷰 등록
          </Txt>
        </button>
      </Flex>
    </Flex>
  );
};
