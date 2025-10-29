import {Routes} from '@angular/router';
import {skipOnboardingGuardGuard} from "./guard/skip-onboarding-guard-guard";

export const routes: Routes = [
  {
    path: 'onboarding',
    loadComponent: () => import('./onboarding/onboarding.page').then(m => m.OnboardingPage),
    canActivate: [skipOnboardingGuardGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
];
