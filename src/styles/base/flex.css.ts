import { style } from '@vanilla-extract/css';

export const flexStyle = style({
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
