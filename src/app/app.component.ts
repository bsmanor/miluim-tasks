import { SoldiersService } from '../assets/services/soldiers.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Soldier } from '../assets/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName: string;
  lastName: string;
  id: string;
  soldiers: Observable<Soldier[]>

  constructor(private soldiersService: SoldiersService) {
    this.soldiers = soldiersService.soldiers;
  }

  createSoldier() {
    this.soldiersService.createSoldier({firstName: this.firstName, lastName: this.lastName, id: this.id});
  }

  getSoldier(id) {
    this.soldiersService.getSoldierById(id)
  }

  deleteSoldier(id) {
    this.soldiersService.deleteSoldier(id);
  }


}
