import { useParams } from 'react-router-dom';

import { Spacing } from '@/components/base/Spacing';
import { Tab } from '@/components/base/Tab';
import { Header } from '@/components/common/Header';
import { ImgCard } from '@/components/home/ImgCard';
import { type Book, bookData } from '@/mock/bookData';

function BookDetailPage() {
  const params = useParams();
  const bookDetailData: Book | undefined = bookData.find((item) => item.id === params.id);

  return (
    <>
      <Header isBack isCart />
      <ImgCard genre={bookDetailData?.genre || ''} title={bookDetailData?.title || ''} />
      <Spacing height="20px" />
      <Tab>
        <Tab.Item>상세 정보</Tab.Item>
        <Tab.Item>리뷰</Tab.Item>
      </Tab>
    </>
  );
}

export default BookDetailPage;
