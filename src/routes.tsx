import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import GameDetailPage from './pages/GameDetailPage';
import Homepage from './pages/Homepage';
import Layouts from './pages/Layouts';

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
