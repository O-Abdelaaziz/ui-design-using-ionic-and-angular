import {AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild, viewChild} from '@angular/core';
import {User} from '../../shared/models/user.model';
import {DonationRequest} from '../../shared/models/donation-request.model';
import {
  ActionSheetController,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonMenuButton,
  IonNote,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  addOutline,
  callOutline, closeOutline,
  fitnessOutline,
  heartHalfOutline,
  locationOutline,
  optionsOutline,
  personCircleOutline,
  timeOutline
} from "ionicons/icons";
import {CommonModule} from "@angular/common";
import {Chart} from "chart.js/auto";
import {ShrinkHeaderComponent} from "../../shared/components/shrink-header/shrink-header.component";
import {ScrollDetail} from "@ionic/angular";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonButton, IonIcon, IonGrid, IonList, IonRow, IonCol, IonItem, IonLabel, IonText, IonSegment, IonSegmentButton, IonItemGroup, IonThumbnail, IonAvatar, IonNote, IonFab, IonFabButton, ShrinkHeaderComponent],
})
export class HomePage implements OnInit, AfterViewInit {

  private _actionSheetController = inject(ActionSheetController)

  segment = 'donors';
  segmentValue = signal('1');
  donors = signal<User[]>([]);
  requests = signal<DonationRequest[]>([]);
  lineChart = viewChild.required<ElementRef>('lineChart');
  newHeaderHeight = 0;

  @ViewChild('lineChart') lineCanvas!: ElementRef;
  lineChart2: any;

  constructor() {
    addIcons({
      personCircle: personCircleOutline,
      fitness: fitnessOutline,
      heartHalf: heartHalfOutline,
      options: optionsOutline,
      call: callOutline,
      time: timeOutline,
      add: addOutline,
      location: locationOutline,
      cancel: closeOutline,

    })
  }

  ngOnInit(): void {
    const rawData = this.fetchDonorData();
    this.donors.set(this.processDonors(rawData));

    this.requests.set([
      {
        id: 1,
        name: 'Jessika Lynch',
        age: 20,
        address: 'Wuhan, China',
        gender: 'Female',
        blood_group: 'B+',
        photo: 'assets/images/3.png',
        social_photo: 'https://avatar.iran.liara.run/public/girl',
        distance: 1,
        phone: '9999900010',
        email: 'xyz1@xyz.com',
        request_date: '2023-11-20',
        status: 'pending',
        hospital: 'City General Hospital',
        units_required: 2,
        urgency: 'high',
        notes: 'Emergency surgery required'
      },
      {
        id: 2,
        name: 'Chris Manhattan',
        age: 29,
        address: 'Sydney, Australia',
        gender: 'Male',
        blood_group: 'O+',
        photo: 'assets/images/2.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 1.5,
        phone: '9999900020',
        email: 'xyz2@xyz.com',
        request_date: '2023-11-19',
        status: 'pending',
        hospital: 'Sydney Medical Center',
        units_required: 1,
        urgency: 'medium',
        notes: 'Regular transfusion needed'
      },
      {
        id: 3,
        name: 'Sanya Iyer',
        age: 45,
        address: 'Bengaluru',
        gender: 'Male',
        blood_group: 'AB+',
        photo: 'assets/images/4.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 3,
        phone: '9999900030',
        email: 'xyz3@xyz.com',
        request_date: '2023-11-18',
        status: 'pending',
        hospital: 'Bengaluru Health Center',
        units_required: 3,
        urgency: 'high',
        notes: 'Critical patient in ICU'
      },
      {
        id: 4,
        name: 'Jinpin',
        age: 40,
        address: 'Wuhan, China',
        gender: 'Male',
        blood_group: 'O+',
        photo: 'assets/images/1.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 8,
        phone: '9999900040',
        email: 'xyz4@xyz.com',
        request_date: '2023-11-17',
        status: 'pending',
        hospital: 'Wuhan Central Hospital',
        units_required: 2,
        urgency: 'medium',
        notes: 'Scheduled surgery'
      },
      {
        id: 5,
        name: 'Mahavir Singh',
        age: 35,
        address: 'South Extension II, Delhi',
        gender: 'Male',
        blood_group: 'O-',
        photo: 'assets/images/2.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 15,
        phone: '9999900050',
        email: 'xyz5@xyz.com',
        request_date: '2023-11-16',
        status: 'pending',
        hospital: 'Delhi Medical Center',
        units_required: 1,
        urgency: 'low',
        notes: 'Regular blood donation needed'
      },
      {
        id: 6,
        name: 'Lanee T\'ang',
        age: 20,
        address: 'Beijing, China',
        gender: 'Female',
        blood_group: 'B-',
        photo: 'assets/images/3.png',
        social_photo: 'https://avatar.iran.liara.run/public/girl',
        distance: 20,
        phone: '9999900060',
        email: 'xyz6@xyz.com',
        request_date: '2023-11-15',
        status: 'pending',
        hospital: 'Beijing Health Center',
        units_required: 2,
        urgency: 'high',
        notes: 'Emergency blood supply needed'
      }
    ]);
  }

  ngAfterViewInit() {
    // this.onPopulateLineChart();
    this.lineChartMethod();
  }

  onPopulateLineChart() {
    const canvasElement = this.lineChart();
    const ctx = canvasElement.nativeElement.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context for the canvas.');
      return;
    }

    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Donors',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#FF7361',
            backgroundColor: '#FF7361',
            fill: false
          },
          {
            label: 'Requests',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: '#FD6A57',
            backgroundColor: '#FD6A57',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Blood Donors and Requests'
          }
        }
      }
    });
    console.log(myLineChart);
  }

  lineChartMethod() {
    this.lineChart2 = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Mar\'21', 'Jun\'21'],
        datasets: [
          {
            label: 'COVID RATE',
            fill: 'false',
            backgroundColor: '#fff',
            borderColor: '#E31007',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#fff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#E31007',
            pointHoverBorderColor: '#E31007',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 10, 25, 30, 25, 15, 10, 20, 18, 5, 2, 15, 15, 35],
            spanGaps: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false
            }
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }

  onSegmentChange(event: any) {
    this.segmentValue.set(event.detail.value);
    this.segment = event.detail.value === '1' ? 'Blood Donors ' : 'Blood Requests';
  }

  getBloodGroupColor(bloodGroup: string): string {
    const colors: { [key: string]: string } = {
      'O+': '#D32F2F',  // Red
      'O-': '#D32F2F',
      'A+': '#1976D2',  // Blue
      'A-': '#1976D2',
      'B+': '#388E3C',  // Green
      'B-': '#388E3C',
      'AB+': '#7B1FA2', // Purple
      'AB-': '#7B1FA2'
    };
    return colors[bloodGroup] || '#607D8B'; // Default color if not found
  }

  getUrgencyColor(urgency: 'low' | 'medium' | 'high'): string {
    switch (urgency) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
      default:
        return 'success';
    }
  }

  contactRequester(request: any) {
    // Implementation for contacting the requester
    console.log('Contacting:', request.name, 'at', request.phone);
    // You can implement actual calling functionality here
  }

  private getPicture(gender: string): string {
    const random = Math.floor(Math.random() * 10) + 1;
    if (random < 10) {
      return gender === 'Male' ? `assets/images/boy-0${random}.jpg` : `assets/images/girl-0${random}.jpg`;
    } else {
      return gender === 'Male' ? `assets/images/boy-${random}.jpg` : `assets/images/girl-${random}.jpg`;
    }
  }

  private getPicturePath(gender: 'Male' | 'Female'): string {
    const random = Math.floor(Math.random() * 10) + 1;
    const prefix = gender === 'Male' ? 'boy' : 'girl';
    const num = random < 10 ? `0${random}` : `${random}`;
    return `assets/images/${prefix}-${num}.jpg`;
  }

  private processDonors(rawDonors: User[]): User[] {
    return rawDonors.map(donor => ({
      ...donor,
      photo: this.getPicturePath(donor.gender)
    }));
  }

  private fetchDonorData(): User[] {
    return [
      {
        id: 1,
        name: 'Noriko Rusk',
        age: 25,
        address: 'Seattle, WA',
        gender: 'Female',
        blood_group: 'B-',
        photo: 'assets/images/4.png',
        social_photo: 'https://avatar.iran.liara.run/public/girl',
        distance: 0.5,
        phone: '9999900000',
        email: 'abc@xyz.com',
        last_donation: '2 days ago'
      },
      {
        id: 2,
        name: 'Carl Sweat',
        age: 22,
        address: 'Miami, FL',
        gender: 'Male',
        blood_group: 'A+',
        photo: 'assets/images/2.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 2,
        phone: '9999900001',
        email: 'abc1@xyz.com',
        last_donation: '3 days ago'
      },
      {
        id: 3,
        name: 'Phoebe Jackson',
        age: 27,
        address: 'Stationsstraat 185 9472 Iddergem',
        gender: 'Female',
        blood_group: 'O-',
        photo: 'assets/images/3.png',
        social_photo: 'https://avatar.iran.liara.run/public/girl',
        distance: 6,
        phone: '9999900002',
        email: 'abc2@xyz.com',
        last_donation: '5 days ago'
      },
      {
        id: 4,
        name: 'Bajrang Bali',
        age: 35,
        address: 'Hauz Khas, Delhi',
        gender: 'Male',
        blood_group: 'AB-',
        photo: 'assets/images/1.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 10,
        phone: '9999900003',
        email: 'abc3@xyz.com',
        last_donation: '7 days ago'
      },
      {
        id: 5,
        name: 'Lan T\'ang',
        age: 30,
        address: 'Wuhan, China',
        gender: 'Male',
        blood_group: 'O+',
        photo: 'assets/images/2.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 12,
        phone: '9999900004',
        email: 'abc4@xyz.com',
        last_donation: '10 days ago'
      },
      {
        id: 6,
        name: 'S. Dilshan',
        age: 45,
        address: 'Kandy, Sri Lanka',
        gender: 'Male',
        blood_group: 'O-',
        photo: 'assets/images/2.png',
        social_photo: 'https://avatar.iran.liara.run/public/boy',
        distance: 14.5,
        phone: '9999900005',
        email: 'ab5@xyz.com',
        last_donation: '15 days ago'
      },
      {
        id: 7,
        name: 'Amy D\'Souza',
        age: 20,
        address: 'India',
        gender: 'Female',
        blood_group: 'A-',
        photo: 'assets/images/3.png',
        social_photo: 'https://avatar.iran.liara.run/public/girl',
        distance: 16.7,
        phone: '9999900006',
        email: 'abc6@xyz.com',
        last_donation: '20 days ago'
      }
    ]
  }

  onScroll(event: CustomEvent<ScrollDetail>) {
    const value = event.detail.scrollTop;
    console.log(value, this.newHeaderHeight);
    if (value > 40) {
      this.newHeaderHeight += 5; // this.newHeight = this.newHeight + 5
    } else {
      this.newHeaderHeight = 0;
    }
    if (value > 180 && this.newHeaderHeight <= 65) {
      this.newHeaderHeight += 50;
    }
  }

  async options(donor: User) {
    const actionSheet = await this._actionSheetController.create({
      header: 'Options',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Call',
          icon: 'call',
          handler: () => {
            console.log('call clicked');
          }
        }, {
          text: 'Mail',
          icon: 'mail',
          handler: () => {
            console.log('mail clicked');
          }
        }, {
          text: 'Locate',
          icon: 'location',
          handler: () => {
            console.log('locate clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
