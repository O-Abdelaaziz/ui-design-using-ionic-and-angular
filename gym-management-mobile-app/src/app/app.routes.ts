import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'members',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/tabs/members/members.page').then(m => m.MembersPage)
          },
          {
            path: ':id',
            loadComponent: () => import('./pages/tabs/member-details/member-details.page').then(m => m.MemberDetailsPage)
          }
        ]
      },
      {
        path: 'stats',
        loadComponent: () => import('./pages/tabs/stats/stats.page').then(m => m.StatsPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/tabs/account/account.page').then(m => m.AccountPage)
      },
    ]
  }
];
