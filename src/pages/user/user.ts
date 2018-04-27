import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  onSubmit(title:string, body:string) {
    console.log(title, body);
    window.localStorage.setItem('subject', title);
    window.localStorage.setItem('body', body);
  }
}
