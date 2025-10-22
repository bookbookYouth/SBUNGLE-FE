import type { ListType } from '@/types/onboarding';

export const alignmentList: ListType[] = [
  { name: '추천순', key: 'recommend' },
  { name: '인기순', key: 'popular' },
  { name: '최신순', key: 'latest' },
  { name: '리뷰 많은 순', key: 'mostReviews' },
];

export const literatureList: ListType[] = [
  { name: '소설', key: 'novel' },
  { name: '시/에세이', key: 'essay' },
];

export const nonLiteratureList: ListType[] = [
  { name: '자기계발', key: 'self' },
  { name: '인문/사회', key: 'society' },
  { name: '예술', key: 'art' },
  { name: '경제/경영', key: 'economy' },
];
