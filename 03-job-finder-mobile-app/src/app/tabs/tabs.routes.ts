import {Routes} from "@angular/router";
import {TabsPage} from "./tabs.page";

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'job/:id',
    loadComponent: () => import('./job-details/job-details.page').then( m => m.JobDetailsPage)
  },

];
