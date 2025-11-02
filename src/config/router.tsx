import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import { Layout } from '@/components/common/Layout';
import { MainLayout } from '@/components/common/Layout/MainLayout';
import { ROUTES } from '@/config/appConfig';

const OnboardingPage = lazy(() => import('@/pages/onboarding/index'));
const SurveyPage = lazy(() => import('@/pages/onboarding/Survey'));
const SplashPage = lazy(() => import('@/pages/onboarding/Splash'));
const HomePage = lazy(() => import('@/pages/home/index'));
const BookListPage = lazy(() => import('@/pages/home/BookList'));
const BookDetailPage = lazy(() => import('@/pages/home/BookDetail'));
const GiftPage = lazy(() => import('@/pages/gift/index'));
const BookstorePage = lazy(() => import('@/pages/bookstore/index'));
const BookStoreDetailPage = lazy(() => import('@/pages/bookstore/BookStoreDetail'));
const WishPage = lazy(() => import('@/pages/wish/index'));
const MyPage = lazy(() => import('@/pages/mypage/index'));
const NotFoundPage = lazy(() => import('@/pages/error/index'));

export const routeTree = (
  <Route element={<Layout />}>
    <Route element={<MainLayout />}>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.bookList} element={<BookListPage />} />
      <Route path={ROUTES.gift} element={<GiftPage />} />
      <Route path={ROUTES.bookstore} element={<BookstorePage />} />
      <Route path={ROUTES.wish} element={<WishPage />} />
      <Route path={ROUTES.mypage} element={<MyPage />} />
    </Route>
    <Route path={ROUTES.onboarding} element={<OnboardingPage />} />
    <Route path={ROUTES.survey} element={<SurveyPage />} />
    <Route path={ROUTES.splash} element={<SplashPage />} />
    <Route path={ROUTES.bookDetail.path} element={<BookDetailPage />} />
    <Route path={ROUTES.bookStoreDetail.path} element={<BookStoreDetailPage />} />
    <Route path={ROUTES.error} element={<NotFoundPage />} />
    <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routeTree));
