import {Component, inject, OnInit, Signal} from '@angular/core';
import {
  IonApp,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  Platform,
  MenuController
} from '@ionic/angular/standalone';
import {MenuStateService} from "./shared/services/menu-state.service";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {closeCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonContent, IonSplitPane, IonList, IonMenuToggle, IonLabel, IonItem, IonButton, IonIcon],
})
export class AppComponent implements OnInit {
  private _platform = inject(Platform);
  private _menuController = inject(MenuController);
  // private _splashScreen =inject(SplashScreen);
  // private _statusBar =inject(StatusBar);
  private _menuStateService = inject(MenuStateService);
  private _router = inject(Router);


  public isMenuEnabled: Signal<boolean> = this._menuStateService.getMenuState();
  public selectedIndex = 0;

  constructor() {
    this.initializeApp();
    addIcons({
      closeCircleOutline
    })
  }

  initializeApp() {
    this._platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.selectedIndex = 1;
  }

  toggleMenu() {
    const currentState = this.isMenuEnabled();
    this._menuStateService.setMenuState(!currentState);
  }

  async navigate(path: any, selectedId: any) {
    this.selectedIndex = selectedId;
    await this._router.navigate([path]);
  }

  async close() {
    await this._menuController.toggle();
  }
}
