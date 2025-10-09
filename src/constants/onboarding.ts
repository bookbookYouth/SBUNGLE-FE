import type { ListType } from '@/type/onboarding';

export const STEPS = ['기본 정보', '장르', '취향'];

export const genderList: ListType[] = [
  { name: '여성', key: 'woman' },
  { name: '남성', key: 'man' },
];
export const ageList: ListType[] = [
  { name: '만 19세 이하', key: '19' },
  { name: '만 20~24세 이하', key: '20' },
  { name: '만 25~29세 이하', key: '25' },
  { name: '만 30~34세 이하', key: '30' },
  { name: '만 35~39세 이하', key: '35' },
  { name: '만 40세 이상', key: '40' },
];

export const genreList: ListType[] = [
  { name: '소설', key: 'novel' },
  { name: '시/에세이', key: 'essay' },
  { name: '자기계발', key: 'self' },
  { name: '인문/사회', key: 'society' },
  { name: '예술', key: 'art' },
  { name: '경제/경영', key: 'economy' },
];

export const preferenceList: ListType[] = [
  { name: '잔잔하고 따뜻한', key: 'warm' },
  { name: '긴장감 넘치는', key: 'thrilling' },
  { name: '철학적이고 사유적인', key: 'philosophical' },
  { name: '감성적이고 몽환적인', key: 'dreamy' },
  { name: '유쾌하고 가벼운', key: 'cheerful' },
  { name: '우울하고 먹먹한', key: 'melancholic' },
  { name: '현실적이고 사회적인', key: 'realistic' },
  { name: '기발하고 창의적인', key: 'creative' },
];
