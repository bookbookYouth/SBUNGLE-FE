import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import { Layout } from '@/components/common/Layout';
import { MainLayout } from '@/components/common/Layout/MainLayout';

import { ROUTES } from './appConfig';

export const APP_ROUTES = (
  <Route element={<Layout />}>
    <Route element={<MainLayout />}>
      <Route {...ROUTES.home} />
      <Route {...ROUTES.gift} />
      <Route {...ROUTES.bookstore} />
      <Route {...ROUTES.wish} />
      <Route {...ROUTES.mypage} />
    </Route>
    <Route {...ROUTES.onboarding} />
    <Route {...ROUTES.survey} />
    <Route {...ROUTES.splash} />
    <Route {...ROUTES.error} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(APP_ROUTES));
