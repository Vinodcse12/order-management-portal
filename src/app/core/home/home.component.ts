import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from './../../services/user-info.service';
import { OrderServiceService } from './../../services/order-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  oderList: any;
  constructor(private router : Router,
    private userInfo: UserInfoService,
    private orderLi : OrderServiceService) { }

  ngOnInit() {
    this.user = this.userInfo.getUserInfo();
    this.getOrderList();
  }

  addNewItem(): void {
    this.router.navigate(['/', 'addNewItem']);
  }

  getOrderList(): void {
    if(!this.user) {
      this.router.navigate(['/login']);
    } else {
      this.orderLi.getList(this.user)
      .subscribe(
        (res) => {
          this.oderList = res.list;
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login']);
            }
          }
        }
      )
    }
    
  }

}
