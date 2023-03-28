import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './routes/App';
import Donate from './routes/Donate';
import './index.css';
import HeaderProvider from './context/HeaderProvider';
import News from './routes/News';
import Blog from './routes/Blog';
import SupportUs from './routes/SupportUs';
import Report from './routes/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/donateanimals',
    element: <Donate />,
  },
  {
    path: '/petnews',
    element: <News />,
  },
  {
    path: '/blogs',
    element: <Blog />,
  },
  {
    path: '/donate',
    element: <SupportUs />,
  },
  {
    path: '/report',
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderProvider>
    <RouterProvider router={router} />
  </HeaderProvider>,
);
