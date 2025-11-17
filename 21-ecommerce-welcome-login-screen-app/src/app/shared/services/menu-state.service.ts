import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  private isMenuEnabled: WritableSignal<boolean> = signal<boolean>(true);

  setMenuState(enabled: boolean): void {
    this.isMenuEnabled.set(enabled);
  }

  getMenuState(): Signal<boolean> {
    return this.isMenuEnabled;
  }
}
