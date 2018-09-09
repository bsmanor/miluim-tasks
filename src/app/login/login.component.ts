import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import { FirebaseUISignInFailure } from '../../../node_modules/firebaseui-angular/lib/firebaseui-angular-library.helper';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}



  ngOnInit() {
    this.afAuth.authState.subscribe(d => {
      console.log(d)
      if (d.emailVerified) {
        this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    this.router.navigate(['/soldiers']);
  }
  
  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
    this.router.navigate(['/home']);

  }

}
