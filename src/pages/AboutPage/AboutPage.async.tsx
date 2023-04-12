import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve( import('./AboutPage'))
      }, 1500);
    }),
);
  