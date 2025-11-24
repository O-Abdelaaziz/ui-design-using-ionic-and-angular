import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal
} from '@angular/core';
import {DomController, IonContent} from "@ionic/angular/standalone";
import {distinctUntilChanged, Subscription, throttleTime} from "rxjs";

@Component({
  selector: 'app-shrink-header',
  standalone: true,
  imports: [],
  templateUrl: './shrink-header.component.html',
  styleUrls: ['./shrink-header.component.scss'],
})
export class ShrinkHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  // @Input('scrollArea') scrollArea: any;
  // @Input('headerHeight') headerHeight: number = 0;
  // newHeaderHeight: any;
  // scrollSub!: Subscription;
  //
  // constructor(
  //   public element: ElementRef,
  //   public renderer: Renderer2,
  //   public domCtrl: DomController
  // ) {
  // }
  //
  // ngOnInit() {
  // }
  //
  // ngAfterViewInit() {
  //   this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
  //
  //   this.scrollSub = this.scrollArea.ionScroll.subscribe((event: any) => {
  //     console.log(event.detail.scrollTop);
  //     this.resizeHeader(event);
  //   });
  // }
  //
  // resizeHeader(event: any) {
  //   this.domCtrl.write(() => {
  //     this.newHeaderHeight = this.headerHeight - event.detail.scrollTop;
  //     if (this.newHeaderHeight < 0) this.newHeaderHeight = 0;
  //     this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
  //   });
  // }
  //
  // ngOnDestroy() {
  //   if (this.scrollSub) this.scrollSub.unsubscribe();
  // }


  @Input() scrollArea: any;
  @Input() headerHeight: number = 170; // Match your header height

  private scrollSubscription!: Subscription;
  private lastScroll = 0;
  private isHidden = false;
  private readonly SCROLL_THRESHOLD = 5;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Set initial styles
    this.renderer.setStyle(this.element.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.element.nativeElement, 'z-index', '10');
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'transform 150ms ease-out');

    // Subscribe to scroll events
    this.scrollSubscription = this.scrollArea.ionScroll.subscribe((event: any) => {
      this.handleScroll(event);
    });
  }

  private handleScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    const scrollDiff = scrollTop - this.lastScroll;

    // Only trigger if scrolled more than threshold
    if (Math.abs(scrollDiff) > this.SCROLL_THRESHOLD) {
      const scrollingDown = scrollDiff > 0 && scrollTop > 10;

      if (scrollingDown !== this.isHidden) {
        this.isHidden = scrollingDown;
        this.updateHeaderPosition();
      }

      this.lastScroll = scrollTop;
    }
  }

  private updateHeaderPosition() {
    this.domCtrl.write(() => {
      const transform = this.isHidden
        ? `translateY(-${this.headerHeight}px)`
        : 'translateY(0)';

      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        transform
      );
    });
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
