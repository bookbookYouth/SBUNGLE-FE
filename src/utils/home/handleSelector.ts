/**
 * Selector에서 항목 클릭 시, 값을 return 합니다.
 * @param item 클릭되어있는 항목입니다.
 * @param key 클릭한 항목입니다.
 * @param defaultValue 어떠한 항목도 클릭하지 않을 시, 클릭되는 기본 항목입니다.
 * @returns 현재 클릭된 항목입니다.
 * @example handleSelector('popular', 'popular', 'recommend') = 'recommend'
 */

export const handleSelector = <T>(item: T, key: T, defaultValue: T) => {
  return item !== key ? key : defaultValue;
};
