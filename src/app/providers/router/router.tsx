import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootElement from 'widgets/RootElement/RootElement';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import React from 'react';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootElement />}>
    <Route index element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Route>,
));

export default router;
