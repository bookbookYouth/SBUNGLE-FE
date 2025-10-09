import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '38px',
  padding: '0 20px 72px',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
