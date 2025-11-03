export interface Bookstore {
  id: string;
  name: string;
  description: string;
  address: string;
  direction: string;
  hours: {
    [key: string]: string;
  };
  sns: string;
  images: string[]; // CDN 이미지 3장씩
  liked: boolean;
}

export const best5BookstoreData: Bookstore[] = [
  {
    id: '1',
    name: '책방 사춘기',
    description:
      '일상 속 작은 쉼표를 선사하는 감성 독립서점. 큐레이션된 에세이와 시집이 중심이며, 주말엔 북토크도 진행합니다.',
    address: '서울 마포구 서교동 400-12',
    direction: '홍대입구역 7번 출구 앞',
    hours: {
      mon: '휴무',
      tue: '12:00 - 20:00',
      wed: '12:00 - 20:00',
      thu: '12:00 - 20:00',
      fri: '12:00 - 20:00',
      sat: '12:00 - 20:00',
      sun: '12:00 - 20:00',
    },
    sns: 'https://www.instagram.com/bookpuberty',
    images: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: true,
  },
  {
    id: '2',
    name: '퇴근길 책한잔',
    description:
      '커피 한 잔과 함께 책을 즐길 수 있는 퇴근 후 쉼터. 작가 사인회와 낭독회 등 소규모 이벤트가 자주 열립니다.',
    address: '서울 강남구 역삼동 712-8',
    direction: '강남역 11번 출구 도보 5분',
    hours: {
      mon: '13:00 - 22:00',
      tue: '13:00 - 22:00',
      wed: '13:00 - 22:00',
      thu: '13:00 - 22:00',
      fri: '13:00 - 22:00',
      sat: '11:00 - 21:00',
      sun: '11:00 - 21:00',
    },
    sns: 'https://www.instagram.com/afterwork_books',
    images: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: false,
  },
  {
    id: '3',
    name: '고요서사',
    description:
      '‘조용히 생각하는 시간’을 주제로 한 독립출판 전문 서점. 일러스트, 사진집, 문학 작품 중심으로 전시와 판매를 진행합니다.',
    address: '서울 종로구 삼청로 32',
    direction: '안국역 2번 출구 도보 7분',
    hours: {
      mon: '휴무',
      tue: '휴무',
      wed: '11:00 - 19:00',
      thu: '11:00 - 19:00',
      fri: '11:00 - 19:00',
      sat: '11:00 - 19:00',
      sun: '11:00 - 19:00',
    },
    sns: 'https://www.instagram.com/goyobooks',
    images: [
      'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=1200&q=80&fm=jpg',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80&fm=jpg',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80&fm=jpg',
    ],
    liked: true,
  },
  {
    id: '4',
    name: '리브로책방',
    description: '삶과 예술, 도시와 사람을 잇는 책방. 디자인서와 예술서 중심으로 독립출판물과 잡지들을 큐레이션합니다.',
    address: '부산 수영구 광안로 15',
    direction: '광안역 3번 출구 도보 3분',
    hours: {
      mon: '11:00 - 20:30',
      tue: '11:00 - 20:30',
      wed: '11:00 - 20:30',
      thu: '11:00 - 20:30',
      fri: '11:00 - 20:30',
      sat: '11:00 - 20:30',
      sun: '11:00 - 20:30',
    },
    sns: 'https://www.instagram.com/libro_busan',
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544939578-3231d4ebc8e4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: false,
  },
  {
    id: '5',
    name: '문학살롱 하루',
    description: '작은 문학 동호회와 독서모임이 열리는 공간. 시인과 작가들이 직접 운영하는 문학 중심 서점입니다.',
    address: '대구 중구 중앙대로 410',
    direction: '반월당역 13번 출구 앞',
    hours: {
      mon: '휴무',
      tue: '10:30 - 19:30',
      wed: '10:30 - 19:30',
      thu: '10:30 - 19:30',
      fri: '10:30 - 19:30',
      sat: '10:30 - 19:30',
      sun: '10:30 - 19:30',
    },
    sns: 'https://www.instagram.com/salonharu',
    images: [
      'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535905748047-14b2415c07c7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: true,
  },
];

export const userRecommendedBookstoreData: Bookstore[] = [
  {
    id: '6',
    name: '온도책방',
    description: '따뜻한 감성의 공간으로, 삶과 관계를 주제로 한 책을 중심으로 큐레이션하는 독립서점입니다.',
    address: '서울 성동구 왕십리로 125',
    direction: '성수역 3번 출구 앞',
    hours: {
      mon: '11:00 - 21:00',
      tue: '11:00 - 21:00',
      wed: '11:00 - 21:00',
      thu: '11:00 - 21:00',
      fri: '11:00 - 21:00',
      sat: '11:00 - 21:00',
      sun: '11:00 - 21:00',
    },
    sns: 'https://www.instagram.com/ondo_books',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535905748047-14b2415c07c7?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: true,
  },
  {
    id: '7',
    name: '비포선셋 북샵',
    description:
      '‘퇴근 전 잠깐의 여유’를 콘셉트로 한 소규모 북카페형 서점. 감각적인 포스터와 사진집도 함께 전시됩니다.',
    address: '서울 용산구 이태원동 234-7',
    direction: '녹사평역 2번 출구 도보 6분',
    hours: {
      mon: '휴무',
      tue: '12:00 - 21:00',
      wed: '12:00 - 21:00',
      thu: '12:00 - 21:00',
      fri: '12:00 - 21:00',
      sat: '12:00 - 21:00',
      sun: '12:00 - 21:00',
    },
    sns: 'https://www.instagram.com/before_sunset_bookshop',
    images: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: false,
  },
  {
    id: '8',
    name: '작은별 책방',
    description:
      '‘나만의 속도로 읽는 별빛 같은 책’을 슬로건으로 한 독립서점. 어린이와 어른을 위한 그림책 섹션이 인기입니다.',
    address: '인천 연수구 송도동 23-5',
    direction: '센트럴파크역 앞',
    hours: {
      mon: '10:00 - 19:00',
      tue: '10:00 - 19:00',
      wed: '10:00 - 19:00',
      thu: '10:00 - 19:00',
      fri: '10:00 - 19:00',
      sat: '10:00 - 19:00',
      sun: '10:00 - 19:00',
    },
    sns: 'https://www.instagram.com/little_star_books',
    images: [
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: true,
  },
  {
    id: '9',
    name: '페이지나우',
    description:
      '디지털 시대에도 ‘종이의 감촉’을 느낄 수 있는 서점. Z세대를 위한 독립출판 코너가 따로 마련되어 있습니다.',
    address: '서울 마포구 동교로 38',
    direction: '합정역 8번 출구 도보 4분',
    hours: {
      mon: '11:00 - 20:00',
      tue: '11:00 - 20:00',
      wed: '11:00 - 20:00',
      thu: '11:00 - 20:00',
      fri: '11:00 - 20:00',
      sat: '11:00 - 20:00',
      sun: '11:00 - 20:00',
    },
    sns: 'https://www.instagram.com/page_now',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80&fm=jpg',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80&fm=jpg',
      'https://images.unsplash.com/photo-1535905748047-14b2415c07c7?auto=format&fit=crop&w=1200&q=80&fm=jpg',
    ],
    liked: false,
  },
];

export const subRecommendedBookstoreData: Bookstore[] = [
  {
    id: '10',
    name: '달의서재',
    description: '밤하늘을 테마로 한 감성 서점. 달빛 아래에서 책을 읽는 듯한 분위기의 인테리어가 인상적입니다.',
    address: '서울 은평구 응암로 214',
    direction: '응암역 1번 출구 도보 5분',
    hours: {
      mon: '12:00 - 21:00',
      tue: '12:00 - 21:00',
      wed: '12:00 - 21:00',
      thu: '12:00 - 21:00',
      fri: '12:00 - 21:00',
      sat: '11:00 - 20:00',
      sun: '11:00 - 20:00',
    },
    sns: 'https://www.instagram.com/moonlibrary',
    images: [
      'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: true,
  },
  {
    id: '11',
    name: '낮잠책방',
    description: '조용히 낮잠과 독서를 즐길 수 있는 힐링 공간. 작은 카페와 소파 좌석이 마련되어 있습니다.',
    address: '서울 동작구 상도로 178',
    direction: '상도역 4번 출구 도보 3분',
    hours: {
      mon: '휴무',
      tue: '10:00 - 19:00',
      wed: '10:00 - 19:00',
      thu: '10:00 - 19:00',
      fri: '10:00 - 19:00',
      sat: '10:00 - 19:00',
      sun: '10:00 - 19:00',
    },
    sns: 'https://www.instagram.com/napbookstore',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80&fm=jpg',
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80&fm=jpg',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80&fm=jpg',
    ],
    liked: false,
  },
  {
    id: '12',
    name: '시월의서점',
    description: '가을 감성 가득한 독립서점. 커피 향과 함께 문학과 예술서적을 추천해주는 소규모 공간입니다.',
    address: '광주 동구 충장로 87',
    direction: '금남로4가역 3번 출구 도보 4분',
    hours: {
      mon: '11:00 - 20:00',
      tue: '11:00 - 20:00',
      wed: '11:00 - 20:00',
      thu: '11:00 - 20:00',
      fri: '11:00 - 20:00',
      sat: '11:00 - 20:00',
      sun: '11:00 - 20:00',
    },
    sns: 'https://www.instagram.com/october_books',
    images: [
      'https://placehold.co/1200x800?text=October+Books+1',
      'https://placehold.co/1200x800?text=October+Books+2',
      'https://placehold.co/1200x800?text=October+Books+3',
    ],
    liked: true,
  },
  {
    id: '13',
    name: '책숲',
    description: '자연 속에서 책을 읽는 듯한 감각을 주는 친환경 서점. 식물과 책이 함께 있는 조용한 공간입니다.',
    address: '제주 제주시 조천읍 함덕리 1221-3',
    direction: '함덕해수욕장 인근',
    hours: {
      mon: '10:30 - 19:00',
      tue: '10:30 - 19:00',
      wed: '10:30 - 19:00',
      thu: '10:30 - 19:00',
      fri: '10:30 - 19:00',
      sat: '10:30 - 19:00',
      sun: '10:30 - 19:00',
    },
    sns: 'https://www.instagram.com/bookforest_jeju',
    images: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
    ],
    liked: false,
  },
];

export const bookstoreData: Bookstore[] = [
  ...best5BookstoreData,
  ...userRecommendedBookstoreData,
  ...subRecommendedBookstoreData,
];
