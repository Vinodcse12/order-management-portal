import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PopupModule } from 'ng2-opd-popup';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { CustomtableComponent } from './utils/customtable/customtable.component';
import { AddNewItemComponent } from './core/add-new-item/add-new-item.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterbarComponent } from './utils/footerbar/footerbar.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { PopModalComponent } from './utils/pop-modal/pop-modal.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'registration',
    component : RegistrationComponent
  },
  {
    path : 'home',
    component : HomeComponent,
    canActivate: [AuthGuard]
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
    AddNewItemComponent,
    NavbarComponent,
    FooterbarComponent,
    PopModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    PopupModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
