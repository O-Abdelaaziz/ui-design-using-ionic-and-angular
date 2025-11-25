import {Routes} from '@angular/router';
import {WishListPage} from "./pages/tabs/wish-list/wish-list.page";

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/tabs/search/search.page').then(m => m.SearchPage)
      },
      {
        path: 'reels',
        loadComponent: () => import('./pages/tabs/reels/reels.page').then(m => m.ReelsPage)
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./pages/tabs/wish-list/wish-list.page').then(m => m.WishListPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/tabs/profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
