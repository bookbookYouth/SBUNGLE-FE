export interface Book {
  id: string;
  genre: string;
  title: string;
  price: number;
  liked: boolean;
}

// 유저를 위한 책 추천
export const bookForUserData: Book[] = [
  { id: 'u-1', genre: '소설', title: '나미야 잡화점의 기적', price: 15800, liked: true },
  { id: 'u-2', genre: '에세이', title: '여행의 이유', price: 14200, liked: false },
  { id: 'u-3', genre: '자기계발', title: '그릿', price: 17500, liked: false },
  { id: 'u-4', genre: '인문/사회', title: '정의란 무엇인가', price: 17800, liked: false },
  { id: 'u-5', genre: '예술', title: '예술가처럼 생각하라', price: 18500, liked: false },
];

// 오늘의 책 추천
export const bookForTodayData: Book[] = [
  { id: 't-1', genre: '소설', title: '아몬드', price: 13500, liked: true },
  { id: 't-2', genre: '에세이', title: '기분이 태도가 되지 않게', price: 14000, liked: true },
  { id: 't-3', genre: '자기계발', title: '세상에서 제일 쉬운 독서법', price: 14900, liked: false },
  { id: 't-4', genre: '인문/사회', title: '사피엔스', price: 22000, liked: false },
  { id: 't-5', genre: '경제/경영', title: '돈의 속성', price: 17500, liked: true },
  { id: 't-6', genre: '예술', title: '명화로 읽는 인문학', price: 16000, liked: false },
  { id: 't-7', genre: '소설', title: '불편한 편의점', price: 14500, liked: false },
  { id: 't-8', genre: '인문/사회', title: '죽음이란 무엇인가', price: 18900, liked: false },
  { id: 't-9', genre: '에세이', title: '안녕, 소중한 사람', price: 15000, liked: true },
  { id: 't-10', genre: '경제/경영', title: '트렌드 코리아 2025', price: 19000, liked: false },
];
