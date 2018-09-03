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
  soldiers: Observable<Soldier[]>;

  constructor(private afs: AngularFirestore) {
    this.soldiersCollection = afs.collection<Soldier>('soldiers');
    this.soldiers = this.soldiersCollection.valueChanges();
  }


  getSoldiers() {
    return this.soldiers;
  }

  getSoldierById(id) {
    return this.soldiersCollection.doc(id).valueChanges();
  }

  createSoldier(soldier: Soldier) {
    this.soldiersCollection.add(soldier);
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
