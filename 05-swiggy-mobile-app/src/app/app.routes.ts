import {Routes} from '@angular/router';
import {TabsPage} from "./pages/tabs/tabs.page";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component:TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/tabs/search/search.page').then(m => m.SearchPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/tabs/cart/cart.page').then(m => m.CartPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/tabs/account/account.page').then(m => m.AccountPage)
      },
      {
        path: 'address',
        loadComponent: () => import('./pages/tabs/address/address.page').then( m => m.AddressPage)
      },
    ]
  },
  {
    path: 'tabs/restaurants/:restaurantId/cart',
    loadComponent: () => import('./pages/tabs/cart/cart.page').then(m => m.CartPage)
  },
  {
    path: 'tabs/restaurants/:restaurantId',
    loadComponent: () => import('./pages/tabs/items/items.page').then( m => m.ItemsPage)
  },

];
