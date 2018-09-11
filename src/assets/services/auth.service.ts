import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user(): any {
    return this.user;
  }

  set user(user: any) {
    this.user = status;
  }

  constructor(
    private afAuth: AngularFireAuth
  ) {}
  

  logout() {
    this.afAuth.auth.signOut();
  }
}
