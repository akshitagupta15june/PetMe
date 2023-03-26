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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/donateanimals',
    element: <Donate />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderProvider>
    <RouterProvider router={router} />
  </HeaderProvider>,
);
