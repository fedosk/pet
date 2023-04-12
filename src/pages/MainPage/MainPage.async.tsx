import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(import('./MainPage'));
      }, 1500);
    }),
);
