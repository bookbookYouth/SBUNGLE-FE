import { lazy } from 'react';

const OnboardingPage = lazy(() => import('@/pages/onboarding/index'));
const SurveyPage = lazy(() => import('@/pages/onboarding/Survey'));
const SplashPage = lazy(() => import('@/pages/onboarding/Splash'));
const HomePage = lazy(() => import('@/pages/home/index'));
const BookListPage = lazy(() => import('@/pages/home/BookList'));
const GiftPage = lazy(() => import('@/pages/gift/index'));
const BookstorePage = lazy(() => import('@/pages/bookstore/index'));
const WishPage = lazy(() => import('@/pages/wish/index'));
const MyPage = lazy(() => import('@/pages/mypage/index'));
const NotFoundPage = lazy(() => import('@/pages/error/index'));

export const ROUTES = {
  onboarding: { path: '/onboarding', element: <OnboardingPage /> },
  survey: { path: '/onboarding/survey', element: <SurveyPage /> },
  splash: { path: '/onboarding/splash', element: <SplashPage /> },
  home: { path: '/', element: <HomePage /> },
  bookList: { path: '/book-list', element: <BookListPage /> },
  gift: { path: '/gift', element: <GiftPage /> },
  bookstore: { path: '/bookstore', element: <BookstorePage /> },
  wish: { path: '/wish', element: <WishPage /> },
  mypage: { path: '/mypage', element: <MyPage /> },
  error: { path: '/404', element: <NotFoundPage /> },
} as const;
