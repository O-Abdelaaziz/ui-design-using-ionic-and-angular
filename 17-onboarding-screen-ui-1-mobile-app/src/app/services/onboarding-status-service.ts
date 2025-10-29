import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class OnboardingStatusService {
  private storage = inject(Storage);
  private router = inject(Router);
  private readonly STORAGE_KEY = 'onboardingCompleted';

  // Make sure storage is initialized (important for Ionic Storage)
  constructor() {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  /**
   * Performs the skip action: sets the flag and navigates.
   * @param redirectUrl The URL to navigate to after skipping.
   */
  async skipAndNavigate(redirectUrl: string = '/home'): Promise<void> {
    // 1. Set the persistent flag
    await this.storage.set(this.STORAGE_KEY, true);

    // 2. Perform the navigation
    await this.router.navigateByUrl(redirectUrl, { replaceUrl: true });
  }

  /**
   * Checks the current onboarding status for use in guards or elsewhere.
   */
  async hasCompletedOnboarding(): Promise<boolean> {
    await this.initStorage(); // Ensure it's ready before getting
    return (await this.storage.get(this.STORAGE_KEY)) === true;
  }
}
