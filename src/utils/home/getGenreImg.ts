import type { GenreListType } from '@/types/onboarding';

import artImg from '@/assets/art.svg';
import economyImg from '@/assets/economy.svg';
import essayImg from '@/assets/essay.svg';
import novelImg from '@/assets/novel.svg';
import selfImg from '@/assets/self.svg';
import societyImg from '@/assets/society.svg';

/**
 * 책 genre에 따라 첨부되어야 할 이미지 src를 제공합니다.
 * @param genre 책의 genre입니다.
 * @returns artImg와 같은 이미지 src입니다.
 * @example getImg('art') = artImg
 */

export const getGenreImg = (genre: GenreListType) => {
  switch (genre) {
    case 'art':
      return artImg;
    case 'economy':
      return economyImg;
    case 'essay':
      return essayImg;
    case 'novel':
      return novelImg;
    case 'self':
      return selfImg;
    case 'society':
      return societyImg;
  }
};
