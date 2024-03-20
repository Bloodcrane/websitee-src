import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Layouts/main';
import './App.css';

const { PUBLIC_URL } = process.env;

const AboutPage = lazy(() => import('./Pages/about'));
const DiscographyPage = lazy(() => import('./Pages/discography'));
const HomePage = lazy(() => import('./Pages/home'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/discography" element={<DiscographyPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App; 