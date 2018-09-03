import { SoldiersService } from '../assets/services/soldiers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName: string;
  lastName: string;
  soldiers: any;

  constructor(private soldiersService: SoldiersService) {
    this.soldiers = this.soldiersService.getSoldiers();
  }

  createSoldier() {
    this.soldiersService.createSoldier({firstName: this.firstName, lastName: this.lastName});
  }

}
