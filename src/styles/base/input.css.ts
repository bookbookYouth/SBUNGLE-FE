import { style } from '@vanilla-extract/css';

import { paletteTheme } from '../theme.css';

export const inputStyle = style({
  border: `1px solid ${paletteTheme.palette.black}`,
  backgroundColor: 'transparent',
  padding: '0 10px',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const textareaStyle = style({
  border: `1px solid ${paletteTheme.palette.black}`,
  backgroundColor: 'transparent',
  padding: '10px',
  resize: 'none',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
