/**
 * MultiSelector에서 항목 클릭 시, 값을 return 합니다.
 * @param list 클릭되어있는 항목 리스트입니다.
 * @param key 클릭한 항목입니다.
 * @returns 현재 클릭된 항목 리스트입니다.
 * @example handleSelector(['novel', 'essay'], 'essay') = ['novel']
 */

export const handleMultiSelector = <T>(list: T[], key: T) => {
  return list.includes(key) ? list.filter((item: T) => item !== key) : [...list, key];
};
