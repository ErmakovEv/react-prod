import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootElement from 'pages/RootPage/RootElement';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageLoader } from 'widgets/PageLoader';
import React, { Suspense } from 'react';
import { ErrorPage } from 'shared/ui/ErrorPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootElement />} errorElement={<ErrorPage />}>
    <Route index element={<Suspense fallback={<PageLoader />}><MainPage /></Suspense>} />
    <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
  </Route>,
));

export default router;
