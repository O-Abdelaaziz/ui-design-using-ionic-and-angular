import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}

  //Using capacitor/preferences Part 1
  // npm install @capacitor/preferences
  // npx cap sync

  // private platform = inject(Platform);
  // private router = inject(Router);

  // constructor() {
  //   this.initializeApp();
  // }
  //
  // async initializeApp() {
  //   this.platform.ready().then(async () => {
  //     const { value } = await Preferences.get({ key: 'hasSeenOnboarding' });
  //
  //     if (value !== 'true') {
  //       // User has not seen onboarding, navigate to the onboarding page
  //       this.router.navigateByUrl('/onboarding', { replaceUrl: true });
  //     } else {
  //       // User has seen onboarding, navigate to the main app page
  //       this.router.navigateByUrl('/home', { replaceUrl: true });
  //     }
  //   });
  // }
}
