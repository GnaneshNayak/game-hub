import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layouts from './pages/Layouts';
import Homepage from './pages/Homepage';
import GameDetailPage from './pages/GameDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'games/:id', element: <GameDetailPage /> },
    ],
  },
]);

export default router;
