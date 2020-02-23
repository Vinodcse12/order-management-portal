import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { LoginServiceService } from './../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  user:any;
  constructor(private loginService : LoginServiceService,
    private router : Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.loginForm);
    this.loginService.login(this.loginForm.value)
      .subscribe((res) => {
        this.setUser(res);
        this.router.navigate(['/', 'home']);
      })
  }

  setUser(user): void {
    this.loginService.setUserInfo(user);
  }

  

}
