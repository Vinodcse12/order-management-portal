import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { RegServiceService } from '../../services/reg-service.service';
import { LoginServiceService} from './../../services/login-service.service';
import { UserInfoService } from './../../services/user-info.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  countries = [
    'India', 'UK' , 'USA', 'California', 'New York'    
  ];

  companies = [
    'Company-1', 'Company-2', 'Company-3', 'Company-4'
  ]


  regForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    company : new FormControl(''),
    country : new FormControl('')
  })
  user: any;
  constructor(private regService : RegServiceService,
    private router: Router,
    private lgnSrvc: LoginServiceService,
    private userInfo: UserInfoService) { }

  ngOnInit() {
  }

  signUp() : void {    
    this.user = {
      'email' : this.regForm.value.email,
      'password' : this.regForm.value.password
    }
    this.regService.registerUser(this.regForm.value)
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
