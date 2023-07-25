import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layouts from './pages/Layouts';
import Homepage from './pages/Homepage';
import GameDetailPage from './pages/GameDetailPage';
import ErrorPage from './pages/ErrorPAge';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
]);

export default router;
