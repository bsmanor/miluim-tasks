import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Soldier } from './../models/models';

@Injectable({
  providedIn: 'root'
})
export class SoldiersService {

  private soldiersCollection: AngularFirestoreCollection<Soldier>;
  _soldiers: Observable<Soldier[]>;

  get soldiers(): Observable<Soldier[]> {
    return this._soldiers;
  }

  constructor(private afs: AngularFirestore) {
    this.soldiersCollection = afs.collection<Soldier>('soldiers');
    this._soldiers = this.soldiersCollection.valueChanges();
  }


  getSoldiers() {
    // next step is to create the get soldiers as an obserable instead of a function
    return this.soldiers;
  }

  getSoldierById(id) {
    this.soldiersCollection.doc(id).valueChanges().subscribe(snap => {
      return snap;
    }).unsubscribe();

  }

  createSoldier(soldier: Soldier) {
    this.soldiersCollection.doc(soldier.id).set(soldier);
  }

  updateSoldier(id, param, value) {
    this.soldiersCollection.doc(id).update(
      {[param]: value}
    );
  }

  deleteSoldier(id) {
    this.soldiersCollection.doc(id).delete();
  }

}
