import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image = null;
  attachImage;
  constructor(public navCtrl: NavController, private camera: Camera, private emailComposer: EmailComposer) {

  }
  /********* picture method added ************/

  takePicture() {
    const options: CameraOptions = {
      /*sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,*/
      destinationType: this.camera.DestinationType.DATA_URL,
      /*encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE*/
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      /*let cameraImageSelector = document.getElementById('camera-image');
      let image = "data:image/jpeg;base64," + imageData;
      cameraImageSelector.setAttribute('src', image );*/
      this.image = "data:image/jpeg;base64," + imageData;
      this.attachImage = 'base64:icon.png/' + imageData;
      this.sendEmail();

    }, (err) => {
      console.log('Image error: ', err);
    });
  }
  sendEmail() {
    console.log(this.image);
    let email = {
      to: 'mukesh1989311@gmail.com',
      cc: 'mukeysh@gai.co.in',
      attachments: [
        this.attachImage
      ],
      subject: 'My Cool Image',
      body: 'Nice meet to you',
      isHtml: true
    };
    this.emailComposer.open(email);

  }
}
