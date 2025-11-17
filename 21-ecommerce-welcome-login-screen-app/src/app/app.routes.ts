import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'item-details',
    loadComponent: () => import('./pages/item-details/item-details.page').then(m => m.ItemDetailsPage)
  },
  {
    path: 'my-cart',
    loadComponent: () => import('./pages/my-cart/my-cart.page').then( m => m.MyCartPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'my-orders',
    loadComponent: () => import('./pages/my-orders/my-orders.page').then( m => m.MyOrdersPage)
  },
  {
    path: 'favorite',
    loadComponent: () => import('./pages/favorite/favorite.page').then( m => m.FavoritePage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'confirm',
    loadComponent: () => import('./pages/confirm/confirm.page').then( m => m.ConfirmPage)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];
