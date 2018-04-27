import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import  Tesseract  from 'tesseract.js';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { EmailComposer } from '@ionic-native/email-composer';
import { DomSanitizer } from '@angular/platform-browser';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image;
  attachImage;
  textEmail:any;
  loader:any;
  lat;
  long;
  constructor(public navCtrl: NavController, 
    private camera: Camera, 
    private emailComposer: EmailComposer,
    private sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private geolocation: Geolocation)
  {
  }
  navigateToAnotherModule() {
    this.navCtrl.push('UserPage');
  }
  sanitizeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  takePicture() {
    const options: CameraOptions = {
      sourceType: 1,  
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality: 100,
      targetWidth: 350,
      targetHeight: 200,
      allowEdit: true,
      saveToPhotoAlbum: true
      //encodingType: Camera.EncodingType.PNG,
    }
    this.camera.getPicture(options).then((imageURI) => {
      /*this.image = this.sanitizeUrl(imageURI);*/
      this.image = "data:image/jpeg;base64," + imageURI;
      this.attachImage = 'base64:icon.png//' + imageURI;
      //this.checkImage();
      //this.sendEmail();
    }, (err) => {
      console.log('Image error: ', err);
    });
   
  }
  public checkImage() {
    let img = document.getElementsByTagName('img')[0];
    let that = this;
    var loader = this.loadingCtrl.create({
      content: "Processing Image",
    });
    //var textEmail;
    //alert(img);
    /*Tesseract.create({
      workerPath: '../../node_modules/tesseract.js/browser/worker.js',
      langPath: '../../www/assets/tesseract/langs/',
      corePath: '../../node_modules/tesseract.js/src/index.js'
    });*/
    Tesseract.recognize(img,{
      lang: 'eng'
    })
      .progress(function(message) {
        loader.present();
        console.log(message);
      })
      .catch(function(error) {
        let alert = that.alertCtrl.create({
          title: error,
          buttons: ['OK']
        });
        alert.present();
      })
      .then(function(result) {
        that.textEmail = result.text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        loader.dismiss();
        console.log(result);
        console.log(that.textEmail);
        let alert = that.alertCtrl.create({
          title: 'Email Found',
          subTitle: that.textEmail,
          buttons: ['OK']
        });
        alert.present();
      });
  }

  sendEmail() {
    console.log(window.localStorage.getItem('subject'));
    let email = {
      to: this.textEmail,
      cc: 'mukeysh@gai.co.in',
      attachments: [this.attachImage],
      subject: window.localStorage.getItem('subject'),
      body: window.localStorage.getItem('body'),
      isHtml: true
    };
    this.emailComposer.open(email);
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude
    })
    .catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
