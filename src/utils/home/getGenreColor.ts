import type { GenreListType } from '@/types/onboarding';

/**
 * 책 genre에 따라 표시되어야 할 genre 태그의 색상을 제공합니다.
 * @param genre 책의 genre입니다.
 * @returns 'white'와 같은 장르에 따른 태그의 색상입니다.
 * @example getGenreName('art') = 'white'
 */

export const getGenreColor = (genre: GenreListType) => {
  switch (genre) {
    case 'art':
      return 'white';
    case 'economy':
      return 'black';
    case 'essay':
      return 'black';
    case 'novel':
      return 'black';
    case 'self':
      return 'black';
    case 'society':
      return 'white';
  }
};
