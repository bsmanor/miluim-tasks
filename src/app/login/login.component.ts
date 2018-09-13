import { Soldier } from './../../assets/models/models';
import { SoldiersService } from './../../assets/services/soldiers.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../assets/services/auth.service';
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

  isSignUp: boolean;
  userUid: string;

  // form related
    soldier: Soldier = {
      firstName: '',
      lastName: '',
      id: '',
      authId: '',
      age: '',
      rank: '',
      title: '',
      phone: '',
      battalionId: '',
      squad: '',
      platoon: '',
      team: ''
  }

  constructor(
    private soldiersService: SoldiersService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.afAuth.authState.subscribe(d => {
      console.log(d);
      this.userUid = d.uid;
      if (d.emailVerified) {
        this.authService.user = d;
        // this.router.navigate(['/soldiers']);
      }
    });
  }

  printForm(data) {
    console.log(data);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    this.isSignUp = true;
  }
  
  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  createSoldier() {
    this.soldier.authId = this.userUid;
    this.soldiersService.createSoldier(this.soldier);
    this.router.navigate(['/home']);
  }
}
