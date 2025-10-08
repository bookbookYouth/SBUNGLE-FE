import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { fontTheme, paletteTheme } from './theme.css';

const layoutProperties = defineProperties({
  properties: {
    position: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
    display: ['none', 'flex', 'grid', 'block', 'inline', 'inline-block'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    boxSizing: ['border-box', 'content-box'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    cursor: ['default', 'pointer', 'wait', 'not-allowed'],
  },
});

const customProperties = defineProperties({
  properties: {
    color: paletteTheme.palette,
    backgroundColor: paletteTheme.palette,
    fontFamily: fontTheme.font.family,
    fontSize: fontTheme.font.size,
    fontWeight: fontTheme.font.weight,
    lineHeight: fontTheme.font.lineHeight,
  },
});

export const sprinkles = createSprinkles(layoutProperties, customProperties);
