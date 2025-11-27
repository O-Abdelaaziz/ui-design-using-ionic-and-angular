import {Component, OnInit} from '@angular/core';
import {IonContent} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  alertCircleOutline,
  browsersOutline,
  cameraOutline,
  cardOutline,
  cloudOfflineOutline,
  documentAttachOutline,
  globeOutline,
  locationOutline,
  sadOutline,
  skullOutline,
  warningOutline,
  wifiOutline
} from "ionicons/icons";
import {EmptyPageComponent} from "../shared/compoents/empty-page/empty-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, EmptyPageComponent],
})
export class HomePage implements OnInit {
  public model: any = {};
  public screens: any[] = [];
  public index: number = 4;

  constructor() {
    addIcons({
      wifi: wifiOutline,
      document: documentAttachOutline,
      alert: alertCircleOutline,
      sad: sadOutline,
      camera: cameraOutline,
      globe: globeOutline,
      browsers: browsersOutline,
      location: locationOutline,
      skull: skullOutline,
      offline: cloudOfflineOutline,
      card: cardOutline,
      warning: warningOutline,
    });
  }

  ngOnInit(): void {
    this.screens = [
      {
        background: 'assets/images/example-01.png',
        iconName: 'wifi',
        title: 'Oops!..',
        subtitle: 'Something wrong with your',
        description: "connection, Please try again.",
        titleColor: 'light',
        color: 'light',
        button: 'RETRY',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-02.png',
        iconName: 'document',
        title: 'Oops!..',
        subtitle: 'Looks like the file that you are looking for is',
        description: "missing...",
        titleColor: 'light',
        color: 'light',
        button: 'RETRY',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-03.png',
        iconName: 'alert',
        title: 'Hmmm...',
        subtitle: 'Something is wrong here...',
        description: "We'll fix it soon!",
        titleColor: 'light',
        color: 'light',
        button: 'HOME',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-04.png',
        iconName: 'sad',
        title: 'Error!',
        subtitle: 'Something went wrong,',
        description: "Please try again later",
        titleColor: 'dark',
        color: 'medium',
        centerAlign: true,
        button: 'RETRY',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-05.png',
        iconName: 'camera',
        title: 'Camera Access',
        subtitle: 'Please allow access to your',
        description: "camera to take photos",
        titleColor: 'dark',
        color: 'medium',
        centerAlign: true,
        button: 'ALLOW',
        buttonColor: 'danger'
      },
      {
        background: 'assets/images/example-06.png',
        iconName: 'globe',
        title: 'Connection Failed',
        subtitle: 'Could not connect to the network',
        description: "Please check & try again.",
        titleColor: 'dark',
        color: 'medium',
        centerAlign: true,
        button: 'RETRY',
        buttonColor: 'success'
      },
      {
        background: 'assets/images/example-07.png',
        iconName: 'browsers',
        title: 'No Results',
        subtitle: 'Sorry, there are no results for',
        description: "this search, Please try another phrase",
        titleColor: 'light',
        color: 'light',
        centerAlign: true,
        button: 'SEARCH',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-08.png',
        iconName: 'location',
        title: 'Location Access',
        subtitle: 'Please enable location access',
        description: "to use this feature",
        titleColor: 'dark',
        color: 'medium',
        centerAlign: true,
        button: 'ENABLE',
        buttonColor: 'danger'
      },
      {
        background: 'assets/images/example-09.png',
        iconName: 'skull',
        title: 'Dead End',
        subtitle: 'Oops! The page you are looking',
        description: "for doesn't exist...",
        titleColor: 'light',
        color: 'light',
        button: 'HOME',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-10.png',
        iconName: 'offline',
        title: 'You\'re Offline',
        subtitle: 'No internet connection, please try',
        description: "restarting your router...",
        titleColor: 'dark',
        color: 'dark',
        centerAlign: true,
        button: 'RETRY',
        buttonColor: 'light'
      },
      {
        background: 'assets/images/example-11.png',
        iconName: 'card',
        title: 'Payment Failed',
        subtitle: 'Your card was rejected by the vendor',
        description: "Please try again.",
        titleColor: 'dark',
        color: 'medium',
        centerAlign: true,
        button: 'RETRY',
        buttonColor: 'danger'
      },
      {
        background: 'assets/images/example-12.png',
        iconName: 'warning',
        title: 'No Connection',
        subtitle: 'Your internet connection was',
        description: "interrupted, Please retry.",
        titleColor: 'dark',
        color: 'medium',
        button: 'RETRY',
        buttonColor: 'dark'
      },
    ];

    this.model = this.screens[this.index];
    // this.index++
    this.autoplayScreensV1();
  }

  autoplayScreensV1() {
    setInterval(() => {
      this.index = (this.index + 1) % this.screens.length;
      this.model = this.screens[this.index];
    }, 1000);
  }

  autoplayScreensV2() {
    if (this.index == this.screens.length) this.index = 0;
    setTimeout(() => {
      this.model = this.screens[this.index];
      this.index++;
      this.autoplayScreensV2()
    }, 5000)
  }
}
