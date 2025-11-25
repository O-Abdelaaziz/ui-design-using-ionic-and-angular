import {AfterViewInit, Component, inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonButtons, IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonImg, IonItem, IonLabel, IonNote, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {
  addCircleOutline, bookmarkOutline,
  chatbubbleEllipsesOutline,
  ellipsisHorizontal,
  heartOutline,
  menuOutline, shareSocialOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonItem, IonAvatar, IonImg, IonText, IonLabel, IonNote]
})
export class ReelsPage implements OnInit, AfterViewInit {
  public _domSanitizer = inject(DomSanitizer);
  feeds: any[] = [
    {
      id: 1,
      logo: 'assets/images/story-01.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'https://www.youtube-nocookie.com/embed/CaptHCE_E9o?si=5DXmbg2a4jJq7AsM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 15
    },
    {
      id: 2,
      logo: 'assets/images/story-02.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'assets/images/post-02.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 80,
      image: true
    },
    {
      id: 3,
      logo: 'assets/images/story-03.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'https://www.youtube-nocookie.com/embed/paM_HziUyDI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 4
    },
    {
      id: 4,
      logo: 'assets/images/story-04.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'https://www.youtube-nocookie.com/embed/JTqrfAF8r6A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 56
    },
    {
      id: 5,
      logo: 'assets/images/story-05.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'assets/images/post-05.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 150,
      image: true
    },
    {
      id: 6,
      logo: 'assets/images/story-06.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'assets/images/post-06.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 200,
      image: true
    },
    {
      id: 7,
      logo: 'assets/images/story-07.jpg',
      username: 'John Doe',
      location: 'Algeria',
      src: 'assets/images/post-07.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consequatur consequuntur, expedita iure magni minima pariatur? Amet cupiditate explicabo id, impedit ipsa libero maiores neque tenetur ut voluptatem. Nisi.',
      likes: 100,
      image: true
    }
  ];

  @ViewChildren('video')
  public videoElements: QueryList<any> | undefined;

  public nowPlaying :any= null;

  constructor() {
    addIcons({
      'add-circle-outline': addCircleOutline,
      'menu-outline': menuOutline,
      'ellipsis-horizontal': ellipsisHorizontal,
      'heart-outline': heartOutline,
      'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
      'share-social-outline': shareSocialOutline,
      'bookmark-outline': bookmarkOutline,
    })
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.video?.forEach((video) => {
    //   video.nativeElement.muted = true;
    // });

    // this.video?.forEach((video) => {
    //   video.nativeElement.addEventListener('play', () => {
    //     this.nowPlaying = video.nativeElement;
    //   });
    //   video.nativeElement.addEventListener('pause', () => {
    //     this.nowPlaying = null;
    //   });
    // });

    // this.didScroll();
  }


//   private setupVideoObservers() {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.8 // When 80% of the video is in view
//     };
//
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         const video = entry.target as HTMLIFrameElement;
//         if (entry.isIntersecting) {
//           // Pause all other videos
//           this.videoElements?.forEach(v => {
//             if (v.nativeElement !== video) {
//               this.pauseVideo(v.nativeElement);
//             }
//           });
//           // Play current video
//           this.playVideo(video);
//         } else {
//           this.pauseVideo(video);
//         }
//       });
//     }, options);
//
//     // Observe each video element
//     this.videoElements?.forEach(video => {
//       observer.observe(video.nativeElement);
//     });
//   }
//
//   private playVideo(video: HTMLIFrameElement) {
//     // For YouTube iframes, we need to send a message to the iframe
//     video.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//   }
//
//   private pauseVideo(video: HTMLIFrameElement) {
//     video.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//   }
//
// // Update your getVideoUrl to include enablejsapi and autoplay parameters
//   getVideoUrl(url: string): SafeResourceUrl {
//     // Extract video ID from URL
//     const videoId = this.extractVideoId(url);
//     if (!videoId) return this._domSanitizer.bypassSecurityTrustResourceUrl('');
//
//     // Create embed URL with autoplay and mute parameters
//     const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&autoplay=0&controls=0&modestbranding=1&rel=0`;
//     return this._domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
//   }
//
//   private extractVideoId(url: string): string | null {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   }
//
//   onIframeLoad(event: Event) {
//     const iframe = event.target as HTMLIFrameElement;
//     // This helps with YouTube API communication
//     if (iframe.src.includes('youtube.com')) {
//       iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//     }
//   }


  // or install npm install @angular/youtube-player
// <youtube-player
//   videoId="VIDEO_ID_HERE"
//     [height]="390"
//     [width]="640"
//   (ready)="onPlayerReady($event)"
//   (change)="onPlayerStateChange($event)"
//     ></youtube-player>

  // onPlayerReady(event: YT.Player) {
  //   // Handle player ready event
  // }
  //
  // onPlayerStateChange(event: YT.OnStateChangeEvent) {
  //   // Handle player state change event
  // }
  //https://stackoverflow.com/questions/67702383/how-to-autoplay-youtube-component-in-angular

  getVideoUrl(url: string) {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  //
  // getFormattedVideoUrl(url: string): SafeResourceUrl {
  //   // Regex to extract video ID from various YouTube URLs
  //   const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  //
  //   if (videoIdMatch && videoIdMatch[1]) {
  //     const videoId = videoIdMatch[1];
  //     const embedUrl = `www.youtube.com/embed/${videoId}`;
  //     return this._domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  //   }
  //
  //   // Handle invalid URLs gracefully (perhaps return a placeholder or null)
  //   console.error("Invalid YouTube URL provided:", url);
  //   return this._domSanitizer.bypassSecurityTrustResourceUrl(''); // Return an empty safe URL
  // }
  //
  // didScroll(event?:any){
  //   console.log(event);
  //   if(this.nowPlaying && this.isVideoInViewPort(this.nowPlaying)) return;
  //   else if(this.nowPlaying && !this.isVideoInViewPort(this.nowPlaying)) {
  //     this.nowPlaying.pause();
  //     this.nowPlaying = null;
  //   }
  //
  //   this.video?.forEach(player => {
  //     console.log('player', player);
  //
  //     if(this.nowPlaying) return;
  //
  //     const nativeElement = player.nativeElement;
  //     const inView = this.isVideoInViewPort(nativeElement);
  //
  //     if(inView) {
  //       this.nowPlaying = nativeElement;
  //       this.nowPlaying.muted = true;
  //       this.nowPlaying.play();
  //     }
  //   });
  // }
  //
  // isVideoInViewPort(video: any) {
  //   const rect = video.nativeElement.getBoundingClientRect();
  //   return rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  // }

  toggleWrap(feed: any) {
    feed.wrap = !feed.wrap;
  }
}
