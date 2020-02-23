import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { CustomtableComponent } from './utils/customtable/customtable.component';
import { AddNewItemComponent } from './core/add-new-item/add-new-item.component';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'registration',
    component : RegistrationComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'addNewItem',
    component : AddNewItemComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    CustomtableComponent,
    AddNewItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
