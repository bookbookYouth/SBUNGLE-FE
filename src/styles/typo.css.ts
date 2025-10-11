import { sprinkles } from './sprinkles.css';

export const typo = {
  title: sprinkles({
    //Title 20pt_160%
    fontFamily: 'body',
    fontSize: 'lg',
    fontWeight: 'bold',
    lineHeight: 'lg',
  }),
  subTitle_bold: sprinkles({
    //SubTitle 16pt_140%_bold
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'bold',
    lineHeight: 'sm',
  }),
  subTitle_regular: sprinkles({
    //SubTitle 16pt_140%_regular
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'regular',
    lineHeight: 'sm',
  }),
  subTitle_sm_bold: sprinkles({
    //Subtitle 14pt_160%_bold
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'bold',
    lineHeight: 'lg',
  }),
  content_sm: sprinkles({
    //Content 14pt_160%
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'regular',
    lineHeight: 'lg',
  }),
  content_xs_regular: sprinkles({
    //Content 12pt_140%
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'regular',
    lineHeight: 'sm',
  }),
  content_xs_bold: sprinkles({
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'bold',
    lineHeight: 'sm',
  }),
  menu: sprinkles({
    fontFamily: 'body',
    fontSize: 'xxs',
    fontWeight: 'regular',
    lineHeight: 'xs',
  }),
  point_lg: sprinkles({
    /* point/Subtitle 24pt_160% */
    fontFamily: 'point',
    fontSize: 'xlg',
    fontWeight: 'bold',
    lineHeight: 'lg',
  }),
  point_sm: sprinkles({
    /* point/Title 18pt_140% */
    fontFamily: 'point',
    fontSize: 'sm',
    fontWeight: 'bold',
    lineHeight: 'sm',
  }),
};
