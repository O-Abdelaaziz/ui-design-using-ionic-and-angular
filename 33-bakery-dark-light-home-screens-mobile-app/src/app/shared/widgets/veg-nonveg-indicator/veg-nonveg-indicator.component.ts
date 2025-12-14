import {Component, input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-veg-nonveg-indicator',
  standalone: true,
  templateUrl: './veg-nonveg-indicator.component.html',
  styleUrls: ['./veg-nonveg-indicator.component.scss'],
  imports: [
    NgClass
  ]
})
export class VegNonvegIndicatorComponent  implements OnInit {
  type = input<string>('veg');
  constructor() { }

  ngOnInit() {}

}
