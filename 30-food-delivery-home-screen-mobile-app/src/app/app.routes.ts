import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/tabs/search/search.page').then(m => m.SearchPage),
      },
      {
        path: 'orders',
        loadComponent: () => import('./pages/tabs/orders/orders.page').then(m => m.OrdersPage),
      },
      {
        path: 'wallet',
        loadComponent: () => import('./pages/tabs/wallet/wallet.page').then(m => m.WalletPage),
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/tabs/account/account.page').then(m => m.AccountPage),
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
