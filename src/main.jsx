import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './pages/App';
import Donate from './pages/Donate';
import './index.css';
import HeaderProvider from './context/HeaderProvider';
import News from './pages/News';
import Blog from './pages/Blog';
import SupportUs from './pages/SupportUs';
import Report from './pages/Report';
import ContactUs from './pages/ContactUs';

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
  {
    path: '/contact',
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderProvider>
    <RouterProvider router={router} />
  </HeaderProvider>,
);
