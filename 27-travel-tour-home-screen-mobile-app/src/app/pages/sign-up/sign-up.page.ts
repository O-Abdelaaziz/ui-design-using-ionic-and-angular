import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons, IonCol,
  IonContent, IonFab, IonFabButton, IonFooter, IonGrid,
  IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {createOutline, key, logoFacebook, logoGoogle, logoLinkedin, logoTwitter, mail, person} from "ionicons/icons";
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonCol, IonFooter, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonRow, IonText, ReactiveFormsModule, RouterLink, IonAvatar, IonFab, IonFabButton]
})
export class SignUpPage implements OnInit {

  form!: FormGroup;

  selectedImage: any;

  constructor() {
    addIcons({
      'create': createOutline,
      'logo-google': logoGoogle,
      'logo-facebook': logoFacebook,
      'logo-twitter': logoTwitter,
      'logo-linkedin': logoLinkedin,
      'person': person,
      'mail': mail,
      'key': key,
    })
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }


  checkPlatform() {
    return Capacitor.getPlatform() == 'web';

  }

  async takePhoto() {
    //0. check platform u2szpkj4LhI
    //1. Install @capacitor/camera
    //1.1. npm install @capacitor/camera
    //1.2. npx cap sync
    //1.3. use example in https://capacitorjs.com/docs/apis/camera
    //1.4. to access camera from the browser (PWA), use PWA Elements https://capacitorjs.com/docs/web/pwa-elements
    //1.5. install npm install @ionic/pwa-elements
    //1.6. add this to the main.ts import { defineCustomElements } from '@ionic/pwa-elements/loader'; defineCustomElements(window);

    // await Camera.requestPermissions();
    // const image = await Camera.getPhoto({
    //   quality: 90,
    //   allowEditing: true,
    ////   resultType: CameraResultType.Uri // CameraResultType.Uri | CameraResultType.Base64 | CameraResultType.DataUrl use this
    //   resultType: this.checkPlatform() ? CameraResultType.DataUrl : CameraResultType.Uri, // like this
    //   source: CameraSource.Camera // CameraSource.Camera | CameraSource.Photos | CameraSource.Prompt
    // });
    //
    // // image.webPath will contain a path that can be set as an image src.
    // // You can access the original file using image.path, which can be
    // // passed to the Filesystem API to read the raw data of the image,
    // // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // // var imageUrl = image.webPath;
    // const this.selectedImage = image;

    // if(this.checkPlatform()) {
    //  this.selectedImage.webPath = image.dataUrl;
    // }

    // dont use this
    //// if(this.checkPlatform()) {
    ////   this.selectedImage.webPath = `data:image/jpeg;base64,${this.selectedImage.base64String}`;
    //// }


    //
    // // Can be set to the src of an image now
    // imageElement.src = imageUrl;

  }
}
