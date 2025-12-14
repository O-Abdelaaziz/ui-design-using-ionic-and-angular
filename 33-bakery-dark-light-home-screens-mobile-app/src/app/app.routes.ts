import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/tabs/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/tabs/product-details/product-details.page').then( m => m.ProductDetailsPage)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },

];
