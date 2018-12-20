import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //property
  loginResult;

  constructor(public navCtrl: NavController) {

  }

  signIn(_username, _password){
    if (_password == '1234') {
      this.loginResult = "welcome..."+_username;
      this.navCtrl.push("PhoneBookPage");

    } else {
      this.loginResult = "login failed";
    }

  }

}//end class
