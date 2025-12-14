import {Component, input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-image-rect-box',
  standalone: true,
  imports: [
    IonicModule
  ],
  templateUrl: './image-rect-box.component.html',
  styleUrls: ['./image-rect-box.component.scss'],
})
export class ImageRectBoxComponent  implements OnInit {
  image = input<string>('');
  constructor() { }

  ngOnInit() {}

}
