import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppComponent,
    LoginComponent
  ],
  exports: [
    AppComponent,
    LoginComponent
  ],
})
export class ComponentsModule { }
