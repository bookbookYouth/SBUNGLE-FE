import { Rating } from 'react-simple-star-rating';

import Star from '@/assets/star.svg?react';

import { paletteTheme } from '@/styles/theme.css';

interface StarRateProps {
  starRating: number;
  setStarRating: (rate: number) => void;
}

export const StarRate = ({ starRating, setStarRating }: StarRateProps) => {
  return (
    <Rating
      initialValue={starRating}
      allowFraction
      allowHover
      onClick={setStarRating}
      fillIcon={
        <Star
          style={{
            width: '28px',
            height: '28px',
            color: paletteTheme.palette.black,
            fill: paletteTheme.palette.black,
            margin: '0 4px',
          }}
        />
      }
      emptyIcon={
        <Star
          style={{
            width: '28px',
            height: '28px',
            color: paletteTheme.palette.gray300,
            fill: paletteTheme.palette.transparent,
            margin: '0 4px',
          }}
        />
      }
    />
  );
};
