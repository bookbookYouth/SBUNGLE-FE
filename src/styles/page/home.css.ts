import { style } from '@vanilla-extract/css';

export const reviewStyle = style({
  height: '480px',
  overflowY: 'scroll',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
