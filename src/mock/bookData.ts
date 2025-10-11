import type { GenreListType } from '@/types/onboarding';

export interface Book {
  id: string;
  genre: GenreListType;
  title: string;
  price: number;
  liked: boolean;
}

// 전체 책책
export const bookData: Book[] = [
  { id: 'u-1', genre: 'novel', title: '나미야 잡화점의 기적', price: 15800, liked: true },
  { id: 'u-2', genre: 'essay', title: '여행의 이유', price: 14200, liked: false },
  { id: 'u-3', genre: 'self', title: '그릿', price: 17500, liked: false },
  { id: 'u-4', genre: 'society', title: '정의란 무엇인가', price: 17800, liked: false },
  { id: 'u-5', genre: 'art', title: '예술가처럼 생각하라', price: 18500, liked: false },
  { id: 't-1', genre: 'novel', title: '아몬드', price: 13500, liked: true },
  { id: 't-2', genre: 'essay', title: '기분이 태도가 되지 않게', price: 14000, liked: true },
  { id: 't-3', genre: 'self', title: '세상에서 제일 쉬운 독서법', price: 14900, liked: false },
  { id: 't-4', genre: 'society', title: '사피엔스', price: 22000, liked: false },
  { id: 't-5', genre: 'economy', title: '돈의 속성', price: 17500, liked: true },
  { id: 't-6', genre: 'art', title: '명화로 읽는 인문학', price: 16000, liked: false },
  { id: 't-7', genre: 'novel', title: '불편한 편의점', price: 14500, liked: false },
  { id: 't-8', genre: 'society', title: '죽음이란 무엇인가', price: 18900, liked: false },
  { id: 't-9', genre: 'essay', title: '안녕, 소중한 사람', price: 15000, liked: true },
  { id: 't-10', genre: 'economy', title: '트렌드 코리아 2025', price: 19000, liked: false },
];

// 유저를 위한 책 추천
export const bookForUserData: Book[] = [
  { id: 'u-1', genre: 'novel', title: '나미야 잡화점의 기적', price: 15800, liked: true },
  { id: 'u-2', genre: 'essay', title: '여행의 이유', price: 14200, liked: false },
  { id: 'u-3', genre: 'self', title: '그릿', price: 17500, liked: false },
  { id: 'u-4', genre: 'society', title: '정의란 무엇인가', price: 17800, liked: false },
  { id: 'u-5', genre: 'art', title: '예술가처럼 생각하라', price: 18500, liked: false },
];

// 오늘의 책 추천
export const bookForTodayData: Book[] = [
  { id: 't-1', genre: 'novel', title: '아몬드', price: 13500, liked: true },
  { id: 't-2', genre: 'essay', title: '기분이 태도가 되지 않게', price: 14000, liked: true },
  { id: 't-3', genre: 'self', title: '세상에서 제일 쉬운 독서법', price: 14900, liked: false },
  { id: 't-4', genre: 'society', title: '사피엔스', price: 22000, liked: false },
  { id: 't-5', genre: 'economy', title: '돈의 속성', price: 17500, liked: true },
  { id: 't-6', genre: 'art', title: '명화로 읽는 인문학', price: 16000, liked: false },
  { id: 't-7', genre: 'novel', title: '불편한 편의점', price: 14500, liked: false },
  { id: 't-8', genre: 'society', title: '죽음이란 무엇인가', price: 18900, liked: false },
  { id: 't-9', genre: 'essay', title: '안녕, 소중한 사람', price: 15000, liked: true },
  { id: 't-10', genre: 'economy', title: '트렌드 코리아 2025', price: 19000, liked: false },
];
