import { Component, OnInit } from '@angular/core';
import { SoldiersService } from '../../assets/services/soldiers.service';
import { Soldier } from './../../assets/models/models';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';


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
  num: number;

  constructor(private soldiersService: SoldiersService) {
    this.soldiers = soldiersService.soldiers;
  }

  keyup() {
    this.soldiers = this.soldiers.pipe(filter(soldiers => {
      for (let soldier of soldiers) {
        if (soldier.firstName.includes(this.query)) {
          return true;
        }
      }
    }));
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
