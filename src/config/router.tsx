import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import { Layout } from '@/components/common/Layout';
import { MainLayout } from '@/components/common/Layout/MainLayout';
import { NonFooterLayout } from '@/components/common/Layout/NonFooterLayout';

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
    <Route element={<NonFooterLayout />}>
      <Route {...ROUTES.survey} />
      <Route {...ROUTES.onboarding} />
      <Route {...ROUTES.error} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(APP_ROUTES));
