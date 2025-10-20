import type { GenreListType } from '@/types/onboarding';

export interface Book {
  id: string;
  genre: GenreListType;
  title: string;
  price: number;
  liked: boolean;
}

export interface BookDetail extends Book {
  description: string;
}

// 전체 책책
export const bookData: BookDetail[] = [
  {
    id: 'u-1',
    genre: 'novel',
    title: '나미야 잡화점의 기적',
    price: 15800,
    liked: true,
    description:
      '폐점한 오래된 잡화점에 우연히 편지가 도착하면서 시작되는 감동적인 이야기입니다. 세대와 시대를 넘어 이어지는 따뜻한 인연 속에서, 서로의 고민을 들어주며 상처를 치유하는 사람들의 모습을 담고 있습니다. 히가시노 게이고 특유의 따뜻한 시선이 돋보이는 소설입니다.',
  },
  {
    id: 'u-2',
    genre: 'essay',
    title: '여행의 이유',
    price: 14200,
    liked: false,
    description:
      '여행의 본질을 탐구하며 “왜 우리는 떠나는가?”라는 질문에 답하는 김영하 작가의 철학적 에세이입니다. 단순한 여행기가 아닌, 낯선 공간에서 자신을 재발견하는 인간의 내면을 섬세하게 그립니다. 읽는 이로 하여금 삶의 여정을 다시 돌아보게 만드는 책입니다.',
  },
  {
    id: 'u-3',
    genre: 'self',
    title: '그릿',
    price: 17500,
    liked: false,
    description:
      '성공을 결정짓는 것은 재능이 아니라 끝까지 포기하지 않는 끈기, 즉 ‘그릿’이라는 메시지를 전합니다. 저자 앤절라 더크워스는 다양한 연구 사례를 통해 열정과 지속적인 노력이 어떻게 성취를 이끄는지 보여줍니다. 자기계발의 본질을 다시 생각하게 만드는 통찰력 있는 책입니다.',
  },
  {
    id: 'u-4',
    genre: 'society',
    title: '정의란 무엇인가',
    price: 17800,
    liked: false,
    description:
      '하버드대 마이클 샌델 교수가 강의한 철학적 명저로, 정의의 의미와 공정함에 대해 근본적인 질문을 던집니다. 실생활 속 도덕적 딜레마를 통해 자유, 평등, 공동체의 가치를 깊이 탐구합니다. 현대 사회를 살아가는 모든 이들에게 윤리적 기준을 되묻는 책입니다.',
  },
  {
    id: 'u-5',
    genre: 'art',
    title: '예술가처럼 생각하라',
    price: 18500,
    liked: false,
    description:
      '창의적인 영감을 얻고 싶은 사람들을 위한 실용적 조언서입니다. 예술가의 사고방식과 작업 방식을 통해, 일상의 아이디어를 예술적 시선으로 바라보는 법을 제시합니다. 자기만의 창조성을 발견하고 싶은 사람들에게 영감을 주는 책입니다.',
  },
  {
    id: 't-1',
    genre: 'novel',
    title: '아몬드',
    price: 13500,
    liked: true,
    description:
      '감정을 느끼지 못하는 소년 윤재가 세상과 부딪히며 성장하는 과정을 그린 작품입니다. 차가운 세계 속에서도 사랑과 공감의 의미를 깨달아가는 이야기를 통해, 인간다움이란 무엇인지 묻습니다. 단단하고 따뜻한 감정이 교차하는 성장소설입니다.',
  },
  {
    id: 't-2',
    genre: 'essay',
    title: '기분이 태도가 되지 않게',
    price: 14000,
    liked: true,
    description:
      '감정이 내 삶의 방향을 흔들지 않도록 마음을 단단히 다잡는 법을 담은 에세이입니다. 불안과 스트레스 속에서도 자신을 지키는 방법을 부드럽고 따뜻한 문체로 전합니다. 하루를 버텨내는 모든 사람들에게 위로와 공감을 주는 글입니다.',
  },
  {
    id: 't-3',
    genre: 'self',
    title: '세상에서 제일 쉬운 독서법',
    price: 14900,
    liked: false,
    description:
      '책 읽기가 어렵게 느껴지는 사람들을 위해, 쉽고 즐겁게 독서를 습관화하는 방법을 알려주는 책입니다. 저자는 단순한 독서가 아닌, 읽은 내용을 삶에 적용하는 실천적 독서법을 강조합니다. 독서 초보자부터 꾸준한 독서를 원하는 사람에게 실질적인 도움을 줍니다.',
  },
  {
    id: 't-4',
    genre: 'society',
    title: '사피엔스',
    price: 22000,
    liked: false,
    description:
      '인류의 기원부터 현대 사회까지, 우리가 어떻게 여기까지 왔는지를 설명하는 대서사입니다. 유발 하라리는 생물학, 경제, 역사, 철학을 넘나들며 인간의 본질을 탐구합니다. 인류 문명의 흐름을 거시적으로 바라볼 수 있게 하는 지적인 여정입니다.',
  },
  {
    id: 't-5',
    genre: 'economy',
    title: '돈의 속성',
    price: 17500,
    liked: true,
    description:
      '김승호 회장이 수십 년간의 경험을 통해 깨달은 돈의 원리와 사고방식을 정리한 책입니다. 단순한 부자 되는 법이 아닌, 돈을 대하는 철학과 태도를 이야기합니다. 경제적 자유를 꿈꾸는 이들에게 실질적이면서도 깊이 있는 조언을 전합니다.',
  },
  {
    id: 't-6',
    genre: 'art',
    title: '명화로 읽는 인문학',
    price: 16000,
    liked: false,
    description:
      '고흐, 피카소, 르누아르 등 세계 명화 속에 담긴 철학적 메시지를 풀어냅니다. 예술 작품을 통해 인간의 욕망, 사랑, 죽음과 같은 보편적 주제를 탐색하며 인문학적 사유를 확장시킵니다. 그림을 보는 눈과 생각하는 힘을 동시에 키워주는 교양서입니다.',
  },
  {
    id: 't-7',
    genre: 'novel',
    title: '불편한 편의점',
    price: 14500,
    liked: false,
    description:
      '서울의 한 편의점을 중심으로 다양한 인물들이 교차하는 이야기입니다. 각자의 사연을 지닌 사람들이 작은 공간 속에서 위로를 주고받으며 변해가는 과정을 담았습니다. 따뜻하지만 현실적인 감동을 전하는 현대인의 휴먼 스토리입니다.',
  },
  {
    id: 't-8',
    genre: 'society',
    title: '죽음이란 무엇인가',
    price: 18900,
    liked: false,
    description:
      '예일대 셸리 케이건 교수가 “죽음”을 주제로 진행한 강의를 바탕으로 한 책입니다. 죽음이 두렵지 않기 위해, 우리는 어떻게 살아야 하는가를 철학적으로 탐구합니다. 삶의 유한함을 직시하며 진정한 삶의 의미를 묻는 깊이 있는 대화록입니다.',
  },
  {
    id: 't-9',
    genre: 'essay',
    title: '안녕, 소중한 사람',
    price: 15000,
    liked: true,
    description:
      '상실과 그리움, 그리고 다시 살아가는 용기에 대한 따뜻한 기록입니다. 작가는 우리가 소중한 사람들과 맺는 관계 속에서 어떻게 사랑하고, 헤어지고, 다시 일어서는지를 섬세하게 담아냅니다. 읽는 이의 마음을 조용히 어루만지는 감성 에세이입니다.',
  },
  {
    id: 't-10',
    genre: 'economy',
    title: '트렌드 코리아 2025',
    price: 19000,
    liked: false,
    description:
      '서울대 소비트렌드분석센터가 매년 발표하는 대표 경제·사회 전망서입니다. 2025년 한국 사회의 핵심 소비 키워드와 사회 변화를 분석하며, 기업과 개인이 준비해야 할 방향을 제시합니다. 빠르게 변하는 시대 속 흐름을 읽고 싶다면 꼭 읽어야 할 책입니다.',
  },
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
