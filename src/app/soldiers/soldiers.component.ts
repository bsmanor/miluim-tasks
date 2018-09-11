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
  
  query: string;
  // soldiers: Observable<Soldier[]>;
  soldiers: Soldier[] = [];
  soldiersToView: Soldier[] = [];
  num: number;

  constructor(private soldiersService: SoldiersService) {
    this.soldiersService.soldiers.subscribe(soldiers => {
      for (let soldier of soldiers) {
        this.soldiers.push(soldier);
      }
      this.soldiersToView = this.soldiers;
    })
  }

  updateSoldiersView() {
    if(this.query === '' || this.query === null) {
      this.soldiersToView = this.soldiers
    } else {
      this.soldiersToView = this.soldiers.filter(soldier => {
        for (let prop in soldier ){
          if (soldier[prop].includes(this.query)) {
            return soldier
          }
        }
      })
    }
  }

  keyup() {
    this.updateSoldiersView();
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

  getSoldierById(id) {
    this.soldiersService.getSoldierById(id);
  }

  deleteSoldier(id) {
    this.soldiersService.deleteSoldier(id);
    this.updateSoldiersView();
  }

  ngOnInit() {
  }

}
