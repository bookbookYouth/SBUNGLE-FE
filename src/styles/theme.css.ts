import { createGlobalTheme, createGlobalThemeContract, style } from '@vanilla-extract/css';

export const theme = createGlobalThemeContract({
  figmaColor: {
    OR: '#FE6918',
    BK: '#090707',
    GR04: '#3F3E39',
    GR03: '#807E79',
    GR02: '#C2BCB2',
    GR01: '#DBD6CE',
    GR00: '#ECE8E0',
    BG: '#FBF7EC',
    WT: '#FFFFFF',
  },
  color: {
    primary: '21, 99%, 55%', //OR
    black: '0, 13%, 3%', //BK
    gray400: '50, 5%, 24%', //GR04
    gray300: '43, 3%, 49%', //GR03
    gray200: '38, 12%, 73', //GR02
    gray100: '37, 15%, 83%', //GR01
    gray: '40, 24%, 90%', //GR00
    background: '44, 65%, 95%', //BG
    white: '0, 0%, 100%', //WT
  },
  font: {
    body: 'Pretendard',
    size: {
      lg: '20px',
      md: '16px',
      sm: '14px',
      xs: '12px',
    },
    weight: {
      regular: '400',
      bold: '800',
    },
    lineHeight: {
      lg: '160%',
      sm: '140%',
    },
  },
});

export const lightTheme = createGlobalTheme(':root', {
  color: {
    primary: 'hsl(var(--color-primary))',
    black: 'hsl(var(--color-black))',
    gray400: 'hsl(var(--color-gray400))',
    gray300: 'hsl(var(--color-gray300))',
    gray200: 'hsl(var(--color-gray200))',
    gray100: 'hsl(var(--color-gray100))',
    gray: 'hsl(var(--color-gray))',
    background: 'hsl(var(--color-background))',
    white: 'hsl(var(--color-white))',
  },
});

export const fontStyles = {
  title: style({
    //Title 20pt_160%
    fontFamily: theme.font.body,
    fontSize: theme.font.size.lg,
    fontWeight: theme.font.weight.regular,
    lineHeight: theme.font.lineHeight.lg,
  }),
  subTitle_bold: style({
    //SubTitle 16pt_140%_bold
    fontFamily: theme.font.body,
    fontSize: theme.font.size.md,
    fontWeight: theme.font.weight.bold,
    lineHeight: theme.font.lineHeight.sm,
  }),
  subTitle_regular: style({
    //SubTitle 16pt_140%_regular
    fontFamily: theme.font.body,
    fontSize: theme.font.size.md,
    fontWeight: theme.font.weight.regular,
    lineHeight: theme.font.lineHeight.sm,
  }),
  subTitle_sm_bold: style({
    //Subtitle 14pt_160%_bold
    fontFamily: theme.font.body,
    fontSize: theme.font.size.sm,
    fontWeight: theme.font.weight.bold,
    lineHeight: theme.font.lineHeight.lg,
  }),
  content_sm: style({
    //Content 14pt_160%
    fontFamily: theme.font.body,
    fontSize: theme.font.size.sm,
    fontWeight: theme.font.weight.regular,
    lineHeight: theme.font.lineHeight.lg,
  }),
  content_xs: style({
    //Content 12pt_140%
    fontFamily: theme.font.body,
    fontSize: theme.font.size.xs,
    fontWeight: theme.font.weight.regular,
    lineHeight: theme.font.lineHeight.sm,
  }),
};
