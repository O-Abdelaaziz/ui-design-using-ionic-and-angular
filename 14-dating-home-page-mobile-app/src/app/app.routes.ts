import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'profile-details',
    loadComponent: () => import('./profile-details/profile-details.page').then( m => m.ProfileDetailsPage)
  },
];
