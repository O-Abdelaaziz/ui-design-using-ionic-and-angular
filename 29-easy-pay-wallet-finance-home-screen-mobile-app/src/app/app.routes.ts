import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./tabs/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./tabs/settings/settings.page').then( m => m.SettingsPage)
      },
      {
        path: 'card',
        loadComponent: () => import('./tabs/card/card.page').then( m => m.CardPage)
      },
      {
        path: 'transactions',
        loadComponent: () => import('./tabs/transaction/transaction.page').then( m => m.TransactionPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ]
  },
];
