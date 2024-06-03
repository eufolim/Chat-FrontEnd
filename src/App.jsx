import React, { useState, useRef } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './chat.css'
import Chat from './routes/Chat.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}