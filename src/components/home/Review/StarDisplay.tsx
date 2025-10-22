import { memo } from 'react';
import { Rating } from 'react-simple-star-rating';

import Star from '@/assets/star.svg?react';

import { paletteTheme } from '@/styles/theme.css';

interface StarDisplayProps {
  size?: 'small' | 'large';
  score: number;
}

export const StarDisplay = memo(({ size = 'small', score }: StarDisplayProps) => {
  return (
    <Rating
      initialValue={score}
      allowFraction
      readonly
      allowHover={false}
      fillIcon={
        <Star
          style={{
            width: size === 'small' ? '22.4px' : '28px',
            height: size === 'small' ? '22.4px' : '28px',
            color: paletteTheme.palette.black,
            fill: paletteTheme.palette.black,
            margin: size === 'small' ? '0 3.2px' : '0 4px',
          }}
        />
      }
      emptyIcon={
        <Star
          style={{
            width: size === 'small' ? '22.4px' : '28px',
            height: size === 'small' ? '22.4px' : '28px',
            color: paletteTheme.palette.gray300,
            fill: paletteTheme.palette.transparent,
            margin: size === 'small' ? '0 3.2px' : '0 4px',
          }}
        />
      }
    />
  );
});
