import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, input, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonContent} from '@ionic/angular/standalone';
import {register} from "swiper/element/bundle";
import {IonicSlides} from "@ionic/angular";
import {Router} from "@angular/router";
import {OnboardingStatusService} from "../services/onboarding-status-service";

register()

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnboardingPage implements OnInit {
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  private onboardingStatusService = inject(OnboardingStatusService);

  config = input<{
    slidesPerView: number;
    spaceBetween?: number;
    // keyboard?: boolean;
    // mousewheel?: boolean;
    // pagination?: any;
    // navigation?: boolean;
    // initialSlide?: number;
    // centeredSlides?: boolean;
    // autoplay?: boolean;
    // loop?: boolean;
    // breakpoints?: {
    //   [key: string]: {
    //     slidesPerView: number;
    //     spaceBetween?: number;
    //   };
    // };
  }>();

  private _router = inject(Router);

  ngOnInit() {
    //console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }

  next() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  prev() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  skip() {
    this.finish();
  }

  finish() {
    this.onboardingStatusService.skipAndNavigate('/home');
  }


  // //Approach 2 to style the swiper
  // @ViewChild('swiperElement') swiperElement?: ElementRef;
  //
  // ngAfterViewInit() {
  //   // You can also use this approach, though ::part() is generally cleaner
  //   const swiper = this.swiperElement?.nativeElement;
  //   if (swiper) {
  //     Object.assign(swiper, {
  //       injectStyles: [`
  //         .swiper-pagination-bullet-active {
  //           width: 16px;
  //           background: #f09600;
  //         }
  //       `]
  //     });
  //     swiper.initialize();
  //   }
  // }

  //Using capacitor/preferences Part 2
  // private router = inject(Router);
  //
  // async finishOnboarding() {
  //   // Set the flag to true so the onboarding screen is not shown again
  //   await Preferences.set({ key: 'hasSeenOnboarding', value: 'true' });
  //
  //   // Navigate to your main application page
  //   this.router.navigateByUrl('/home', { replaceUrl: true });
  // }

}
