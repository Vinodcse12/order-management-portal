import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './../../services/login-service.service';
import { OrderServiceService } from './../../services/order-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  oderList: any;
  constructor(private router : Router,
    private lgnSrvc : LoginServiceService,
    private orderLi : OrderServiceService) { }

  ngOnInit() {
    this.user = this.lgnSrvc.getUserInfo();
    this.getOrderList();
  }

  addNewItem(): void {
    this.router.navigate(['/', 'addNewItem']);
  }

  getOrderList(): void {
    this.orderLi.getList(this.user)
      .subscribe((res) => {
        this.oderList = res.list;
      })
  }

}
