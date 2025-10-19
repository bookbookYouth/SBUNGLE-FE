import { style } from '@vanilla-extract/css';

import { paletteTheme } from '../theme.css';

export const tabStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${paletteTheme.palette.gray200}`,
});

export const tabItemStyle = style({
  border: 'none',
  selectors: {
    '&:hover, &:active, &[data-active="true"]': {
      borderBottom: `2px solid ${paletteTheme.palette.black}`,
      fontWeight: 'bold',
      color: paletteTheme.palette.black,
    },
  },
});
