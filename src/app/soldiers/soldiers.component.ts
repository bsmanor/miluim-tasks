import { Component, OnInit } from '@angular/core';
import { SoldiersService } from '../../assets/services/soldiers.service';
import { Observable } from 'rxjs';
import { Soldier } from '../../assets/models/models';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrls: ['./soldiers.component.css']
})
export class SoldiersComponent implements OnInit {

  firstName: string;
  lastName: string;
  id: string;
  query: string;
  soldiers: Observable<Soldier[]>;

  constructor(private soldiersService: SoldiersService) {
    this.soldiers = soldiersService.soldiers;
  }

  isValid(soldier: Soldier): boolean {
    if (this.query === '' || this.query === null) {
      return true;
    } else {
      if (soldier.firstName.includes(this.query) || soldier.lastName.includes(this.query) || soldier.id.includes(this.query)) {
        return true;
      } else {
        return false;
      }
    }
  }

  createSoldier() {
    this.soldiersService.createSoldier({firstName: this.firstName, lastName: this.lastName, id: this.id});
    this.firstName = '';
    this.lastName = '';
    this.id = '';
  }

  getSoldierById(id) {
    this.soldiersService.getSoldierById(id);
  }

  deleteSoldier(id) {
    this.soldiersService.deleteSoldier(id);
  }

  ngOnInit() {
  }

}
