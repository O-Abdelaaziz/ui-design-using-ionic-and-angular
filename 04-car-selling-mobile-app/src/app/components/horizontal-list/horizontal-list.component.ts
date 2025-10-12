import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, OnInit, TemplateRef, viewChild} from '@angular/core';
import {IonicSlides} from "@ionic/angular/standalone";
import {register} from "swiper/element/bundle";
import {NgTemplateOutlet} from "@angular/common";

register();

@Component({
  selector: 'app-horizontal-list',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HorizontalListComponent<T> implements OnInit {
  public swiperModule = [IonicSlides];
  public swiperRef = viewChild<ElementRef>('swiper');
  public itemTemplate = input.required<TemplateRef<{ $implicit: T }>>();
  public isViewAll = input<boolean>(true);
  public viewAllTemplate = input<TemplateRef<any>>();

  public items = input.required<T[]>();

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

  constructor() {
  }

  ngOnInit() {
  }

  onSlideChange() {
    const swiper = this.swiperRef()?.nativeElement.swiper;
    const currentIndex = swiper?.activeIndex;
    console.log("active Index", swiper.activeIndex);
    console.log("real Index", swiper?.realIndex);
  }

  slideTo(index: number) {
    console.log("Current index", index);
    const swiper = this.swiperRef()?.nativeElement.swiper;
    swiper?.slideTo(index, 300, false);
    swiper.update();
  }
}
