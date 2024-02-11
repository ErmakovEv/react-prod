import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'app/providers/routerProvider/router';

export function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
