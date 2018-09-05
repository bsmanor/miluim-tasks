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
  soldiers: Observable<Soldier[]>;

  constructor(private soldiersService: SoldiersService) {
    this.soldiers = soldiersService.soldiers;
  }

  createSoldier() {
    this.soldiersService.createSoldier({firstName: this.firstName, lastName: this.lastName, id: this.id});
  }

  getSoldier(id) {
    this.soldiersService.getSoldierById(id);
  }

  deleteSoldier(id) {
    this.soldiersService.deleteSoldier(id);
  }

  ngOnInit() {
  }

}
