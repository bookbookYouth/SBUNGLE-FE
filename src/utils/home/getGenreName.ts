import { genreList } from '@/constants/onboarding';
import type { GenreListType } from '@/types/onboarding';

/**
 * 책 genre에 따라 첨부되어야 할 genre 이름을 제공합니다.
 * @param genre 책의 genre입니다.
 * @returns 예술과 같은 genre 이름입니다.
 * @example getGenreName('art') = '예술'
 */

export const getGenreName = (genre: GenreListType) => {
  const genreName = genreList.find((item) => item.key === genre)?.name;
  return genreName;
};
