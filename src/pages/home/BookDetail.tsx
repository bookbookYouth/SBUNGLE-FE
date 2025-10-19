import { useParams } from 'react-router-dom';

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
    </>
  );
}

export default BookDetailPage;
