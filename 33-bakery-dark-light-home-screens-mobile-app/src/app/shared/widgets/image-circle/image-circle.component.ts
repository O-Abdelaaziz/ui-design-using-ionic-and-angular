import {Component, input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonAvatar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-image-circle',
  standalone: true,
  templateUrl: './image-circle.component.html',
  styleUrls: ['./image-circle.component.scss'],
  imports: [
    IonAvatar
  ]
})
export class ImageCircleComponent  implements OnInit {
  image = input<string>('');
  constructor() { }

  ngOnInit() {}

}
