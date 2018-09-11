import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoldiersComponent } from './soldiers/soldiers.component';
import { MissionsComponent } from './missions/missions.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: 'missions', component: MissionsComponent },
  { path: 'soldiers', component: SoldiersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
