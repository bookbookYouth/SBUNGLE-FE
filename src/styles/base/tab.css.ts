import { style } from '@vanilla-extract/css';

import { paletteTheme } from '../theme.css';

export const tabStyle = style({
  border: 'none',
  borderBottom: `1px solid ${paletteTheme.palette.gray200}`,
  selectors: {
    '&:hover, &:active': {
      borderBottom: `2px solid ${paletteTheme.palette.black}`,
      fontWeight: 'bold',
      color: paletteTheme.palette.black,
    },
  },
});
