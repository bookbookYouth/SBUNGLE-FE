import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

export const paletteTheme = createGlobalThemeContract({
  palette: {
    primary: 'palette-primary',
    black: 'palette-black',
    gray400: 'palette-gray400',
    gray300: 'palette-gray300',
    gray200: 'palette-gray200',
    gray100: 'palette-gray100',
    gray: 'palette-gray',
    background: 'palette-background',
    white: 'palette-white',
    transparent: 'palette-transparent',
  },
});

export const fontTheme = createGlobalThemeContract({
  font: {
    family: { body: 'font-family' },
    size: {
      lg: 'font-lg',
      md: 'fong-md',
      sm: 'font-sm',
      xs: 'font-xs',
      xxs: 'font-xxs',
    },
    weight: {
      regular: 'font-regular',
      bold: 'font-bold',
    },
    lineHeight: {
      lg: 'font-height-lg',
      sm: 'font-height-sm',
      xs: 'font-height-xs',
    },
  },
});

export const lightMode = createGlobalTheme(':root', paletteTheme, {
  palette: {
    primary: 'hsl(21, 99%, 55%)', //OR
    black: 'hsl(0, 13%, 3%)', //BK
    gray400: 'hsl(50, 5%, 24%)', //GR04
    gray300: 'hsl(43, 3%, 49%)', //GR03
    gray200: 'hsl(38, 12%, 73%)', //GR02
    gray100: 'hsl(37, 15%, 83%)', //GR01
    gray: 'hsl(40, 24%, 90%)', //GR00
    background: 'hsl(44, 65%, 95%)', //BG
    white: 'hsl(0, 0%, 100%)', //WT
    transparent: 'transparent',
  },
});

export const font = createGlobalTheme(':root', fontTheme, {
  font: {
    family: { body: 'Pretendard' },
    size: {
      lg: '20px',
      md: '16px',
      sm: '14px',
      xs: '12px',
      xxs: '10px',
    },
    weight: {
      regular: '400',
      bold: '800',
    },
    lineHeight: {
      lg: '160%',
      sm: '140%',
      xs: '120%',
    },
  },
});
