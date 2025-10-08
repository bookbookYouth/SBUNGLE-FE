import { lazy } from 'react';

const OnboardingPage = lazy(() => import('@/pages/onboarding/index'));
const HomePage = lazy(() => import('@/pages/home/index'));
const GiftPage = lazy(() => import('@/pages/gift/index'));
const BookstorePage = lazy(() => import('@/pages/bookstore/index'));
const WishPage = lazy(() => import('@/pages/wish/index'));
const MyPage = lazy(() => import('@/pages/mypage/index'));
const NotFoundPage = lazy(() => import('@/pages/error/index'));

export const ROUTES = {
  onboarding: { path: '/onboarding', element: <OnboardingPage /> },
  home: { path: '/', element: <HomePage /> },
  gift: { path: '/gift', element: <GiftPage /> },
  bookstore: { path: '/bookstore', element: <BookstorePage /> },
  wish: { path: '/wish', element: <WishPage /> },
  mypage: { path: '/mypage', element: <MyPage /> },
  error: { path: '/404', element: <NotFoundPage /> },
} as const;
