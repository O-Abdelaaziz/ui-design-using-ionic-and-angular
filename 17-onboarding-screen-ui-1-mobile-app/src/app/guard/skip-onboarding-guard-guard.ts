import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Storage} from "@ionic/storage-angular";

export const skipOnboardingGuardGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const storage = inject(Storage);

  await storage.create();

  const completed = await storage.get('onboardingCompleted');
  if (completed) {
    return router.createUrlTree(['/home']);
  } else {
    return true
  }
};
