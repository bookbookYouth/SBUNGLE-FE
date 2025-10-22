import { globalStyle, style } from '@vanilla-extract/css';

import { paletteTheme } from '@/styles/theme.css';

export const tableStyle = style({
  borderCollapse: 'collapse',
  width: '100%',
  borderTop: `2px solid ${paletteTheme.palette.black}`,
  borderBottom: `2px solid ${paletteTheme.palette.black}`,
});

globalStyle(`${tableStyle} th:first-child`, {
  borderLeft: 'none !important',
});

globalStyle(`${tableStyle} td:first-child`, {
  borderLeft: 'none !important',
});

export const tableCellBorderStyle = style({
  selectors: {
    [`${tableStyle} tbody &`]: { borderLeft: `1px dashed ${paletteTheme.palette.black}` },
  },
});

export const tableCellNoBorderStyle = style({
  selectors: {
    [`${tableStyle} tbody &`]: { borderLeft: 'none' },
  },
});

export const tableHCellBorderStyle = style({
  selectors: {
    [`${tableStyle} thead &`]: { borderLeft: `1px dashed ${paletteTheme.palette.black}` },
  },
});

export const tableHCellNoBorderStyle = style({
  selectors: {
    [`${tableStyle} thead &`]: { borderLeft: 'none' },
  },
});
