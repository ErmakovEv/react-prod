import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootElement from 'pages/RootPage/RootElement';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageLoader } from 'widgets/PageLoader';
import React, { Suspense } from 'react';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootElement />} errorElement={<NotFoundPage />}>
    <Route index element={<Suspense fallback={<PageLoader />}><MainPage /></Suspense>} />
    <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
  </Route>,
));

export default router;
