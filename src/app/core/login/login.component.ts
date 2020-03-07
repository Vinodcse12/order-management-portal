import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { LoginServiceService } from './../../services/login-service.service';
import { UserInfoService } from './../../services/user-info.service';

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
    private router : Router,
    private userInfo: UserInfoService) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.loginForm);
    this.loginService.login(this.loginForm.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.userInfo.setUserInfo(res.user);
          this.router.navigate(['/', 'home']);
        },
        err => console.log(err)
      )
  }
}
