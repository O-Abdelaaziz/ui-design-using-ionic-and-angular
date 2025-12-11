import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {addIcons} from "ionicons";
import {close} from "ionicons/icons";
import {ModalController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-address',
  standalone: true,
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class AddressComponent  implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _modalController = inject(ModalController);

  @Output()
  public close = new EventEmitter<any>();
  addressForm!: FormGroup;
  isEditMode = false;
  countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France'];
  states: string[] = [];

  constructor() {
    addIcons({
      close: close,
    })
  }

  ngOnInit() {
    this.initForm();
  }

  //Phone number validation Validators.pattern('^[0-9]{10,15}$')
  private initForm() {
    this.addressForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required]],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      country: ['', Validators.required],
      isDefault: [false]
    });

    // Update states when country changes
    this.addressForm.get('country')?.valueChanges.subscribe(country => {
      this.updateStates(country);
    });
  }

  private updateStates(country: string) {
    // In a real app, you would fetch states based on the selected country
    const statesMap: { [key: string]: string[] } = {
      'United States': ['Alabama', 'Alaska', 'Arizona', 'California', 'New York', 'Texas'],
      'Canada': ['Alberta', 'British Columbia', 'Manitoba', 'Ontario', 'Quebec'],
      'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
      'Australia': ['New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
      'Germany': ['Bavaria', 'Berlin', 'Hamburg', 'Hesse', 'Saxony'],
      'France': ['Île-de-France', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine', 'Occitanie']
    };

    this.states = statesMap[country] || [];
    this.addressForm.get('state')?.setValue('');
  }

  onSubmit() {
    if (this.addressForm.valid) {
      // this.close.emit({
      //   confirmed: true,
      //   address: this.addressForm.value
      // });
      this._modalController.dismiss(
        {
          confirmed: true,
          address: this.addressForm.value
        }
      );
    } else {
      this.markFormGroupTouched(this.addressForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get fullName() { return this.addressForm.get('fullName'); }
  get phone() { return this.addressForm.get('phone'); }
  get addressLine1() { return this.addressForm.get('addressLine1'); }
  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get postalCode() { return this.addressForm.get('postalCode'); }
  get country() { return this.addressForm.get('country'); }

  onCancel() {
    //this.close.emit({ confirmed: false });
    this._modalController.dismiss(
      {
        confirmed: false
      }
    );
  }

  dismiss(data:any) {
    // this.modalController.dismiss();
    this.close.emit(data);
  }
}
