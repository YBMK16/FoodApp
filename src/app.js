import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Func from './ac';
import Header from './header';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('index'));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
