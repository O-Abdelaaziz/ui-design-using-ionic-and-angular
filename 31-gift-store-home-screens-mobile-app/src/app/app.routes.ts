import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'gifts/:id',
        children:[
          {
            path:'',
            loadComponent: () => import('./pages/gift-details/gift-details.page').then(m => m.GiftDetailsPage)
          },
          {
            path:'cart',
            loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage)
          },
          // {
          //   path:'checkout',
          //   loadComponent: () => import('./pages/checkout/checkout.page').then(m => m.CheckoutPage)
          // }
        ]
      },
    ]
  },
  {
    path: 'coupon',
    loadComponent: () => import('./pages/coupon/coupon.page').then( m => m.CouponPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
