/**
 * 영업일자에 따라 표시되어야 할 한글 요일을 제공합니다.
 * @param day 영업일자의 요일입니다.
 * @returns '월요일'과 같은 한글 요일입니다.
 * @example getKoreanDay('mon') = '월요일'
 */
export const getKoreanDay = (day: string) => {
  switch (day) {
    case 'mon':
      return '월요일';
    case 'tue':
      return '화요일';
    case 'wed':
      return '수요일';
    case 'thu':
      return '목요일';
    case 'fri':
      return '금요일';
    case 'sat':
      return '토요일';
    case 'sun':
      return '일요일';
    default:
      return '일요일';
  }
};
