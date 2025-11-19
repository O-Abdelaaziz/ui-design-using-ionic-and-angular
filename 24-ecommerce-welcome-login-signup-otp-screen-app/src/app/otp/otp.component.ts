import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {
  IonButton, IonCol,
  IonContent, IonFooter,
  IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRow,
  LoadingController,
  ModalController,
  ToastController
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-otp',
  standalone: true,
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonFooter,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonRow,
    IonCol,
    IonInput
  ]
})

export class OtpComponent implements OnInit {
  public modalCtrl = inject(ModalController);
  private toastCtrl = inject(ToastController);
  private loadingCtrl = inject(LoadingController);

  @ViewChild('otp1', {static: false}) input!: IonInput;

  readonly OTP_LENGTH = 4;
  otpString: string[] = Array(this.OTP_LENGTH).fill('');
  isLoading = false;
  private readonly OTP_PATTERN = /^[0-9]$/;

  ngOnInit(): void {

  }

  ionViewDidEnter(): void {
    this.setFocusOnFirstInput();
  }

  private setFocusOnInput(index: number): void {
    const inputs = document.querySelectorAll('ion-input');
    if (index >= 0 && index < inputs.length) {
      inputs[index].setFocus();
    }
  }

  private setFocusOnFirstInput(): void {
    if (this.input) {
      setTimeout(() => this.input.setFocus(), 100);
    }
  }

  onOtpInput(event: KeyboardEvent, currentIndex: number): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Handle backspace
    if (event.key === 'Backspace') {
      if (value === '' && currentIndex > 0) {
        this.setFocusOnInput(currentIndex - 1);
      }
      return;
    }

    // Validate input
    if (!this.OTP_PATTERN.test(value)) {
      event.preventDefault();
      this.otpString[currentIndex] = '';
      return;
    }

    // Update the current input
    this.otpString[currentIndex] = value[value.length - 1];

    // Move to next input if available
    if (value && currentIndex < this.OTP_LENGTH - 1) {
      this.setFocusOnInput(currentIndex + 1);
    }

    // Auto-submit if last digit is entered
    if (currentIndex === this.OTP_LENGTH - 1 && value) {
      this.verifyOtp();
    }
  }

  private async showLoader(message: string): Promise<void> {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const loading = await this.loadingCtrl.create({
        message,
        spinner: 'bubbles',
        backdropDismiss: false
      });

      await loading.present();
    } catch (error) {
      this.isLoading = false;
      console.error('Error showing loader:', error);
    }
  }

  private async hideLoader(): Promise<void> {
    if (!this.isLoading) return;

    try {
      this.isLoading = false;
      await this.loadingCtrl.dismiss();
    } catch (error) {
      console.error('Error hiding loader:', error);
    }
  }

  private joinOtpArray(otp: string[]): string {
    if (!otp || otp.length === 0) return '';
    return otp.join('');
  }

  async verifyOtp(): Promise<void> {
    if (this.isLoading) return;

    try {
      await this.showLoader('Verifying...');
      const otp = this.joinOtpArray(this.otpString);

      // TODO: Replace with actual OTP verification API call
      // This is a mock implementation
      const isValidOtp = await this.verifyOtpOnServer(otp);

      if (isValidOtp) {
        this.resetOtpForm();
        this.modalCtrl.dismiss(otp);
      } else {
        await this.showErrorToast('Invalid OTP. Please try again.');
        this.resetOtpForm();
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      await this.showErrorToast('An error occurred. Please try again.');
    } finally {
      await this.hideLoader();
    }
  }

  private async verifyOtpOnServer(otp: string): Promise<boolean> {
    // TODO: Implement actual API call to verify OTP
    // For now, this is a mock implementation
    return new Promise(resolve => {
      setTimeout(() => resolve(otp === '1234'), 500);
    });
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'bottom',
      buttons: [{
        icon: 'close',
        role: 'cancel'
      }]
    });
    await toast.present();
  }

  private resetOtpForm(): void {
    this.otpString = Array(this.OTP_LENGTH).fill('');
    this.setFocusOnFirstInput();
  }

  // Update the onOtpInput method to match the template's event binding
  otp(event: KeyboardEvent, prev: IonInput | string, next: IonInput | string, index: number): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Handle backspace
    if (event.key === 'Backspace') {
      if (value === '' && prev && typeof prev !== 'string') {
        prev.setFocus();
      }
      return;
    }

    // Validate input
    if (!this.OTP_PATTERN.test(value)) {
      event.preventDefault();
      this.otpString[index] = '';
      return;
    }

    // Update the current input
    this.otpString[index] = value[value.length - 1];

    // Move to next input if available
    if (value && next && typeof next !== 'string') {
      next.setFocus();
    }

    // Auto-submit if last digit is entered
    if (index === this.OTP_LENGTH - 1 && value) {
      this.verifyOtp();
    }
  }
}
