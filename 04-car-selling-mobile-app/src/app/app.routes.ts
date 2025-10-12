import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children:[
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/tabs/search/search.page').then( m => m.SearchPage)
      },
      {
        path: 'add',
        loadComponent: () => import('./pages/tabs/add/add.page').then( m => m.AddPage)
      },
      {
        path: 'chat',
        loadComponent: () => import('./pages/tabs/chat/chat.page').then( m => m.ChatPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/tabs/profile/profile.page').then( m => m.ProfilePage)
      }
    ]
  },
];
