import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'app/providers/router/router';

export function AppRouter() {
  return (
    <Suspense fallback={<>Загрузка</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
