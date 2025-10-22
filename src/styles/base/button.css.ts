import { style } from '@vanilla-extract/css';

import { paletteTheme } from '@/styles/theme.css';

export const iconButtonStyle = style({
  transition: 'all .2s',
  appearance: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: 'transparent',
});

export const buttonStyle = style({
  transition: 'all .2s',
  selectors: {
    '&[data-theme="fill"][data-color="orange"]:not(:disabled)': {
      backgroundColor: paletteTheme.palette.primary,
      color: paletteTheme.palette.white,
      border: 'none',
    },
    '&[data-theme="fill"]:disabled': {
      backgroundColor: paletteTheme.palette.gray,
      color: paletteTheme.palette.gray200,
      border: 'none',
    },
    '&[data-theme="clear"][data-color="orange"]': {
      backgroundColor: 'transparent',
      color: paletteTheme.palette.primary,
      border: `1px solid ${paletteTheme.palette.primary}`,
    },
    '&[data-theme="clear"][data-color="gray"]': {
      backgroundColor: 'transparent',
      color: paletteTheme.palette.gray300,
      border: `1px solid ${paletteTheme.palette.gray300}`,
    },
    '&[data-theme="clear"][data-color="black"]': {
      backgroundColor: 'transparent',
      color: paletteTheme.palette.black,
      border: `1px solid ${paletteTheme.palette.black}`,
    },
    // active,hover
    '&[data-theme="clear"][data-color="gray"]:hover, &[data-theme="clear"][data-color="gray"]:active, &[data-theme="clear"][data-color="gray"][data-active="true"]':
      {
        backgroundColor: paletteTheme.palette.primary,
        color: paletteTheme.palette.white,
        border: 'none',
      },
  },
});
