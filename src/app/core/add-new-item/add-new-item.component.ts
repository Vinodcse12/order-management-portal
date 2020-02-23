import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderServiceService } from './../../services/order-service.service';
import { LoginServiceService } from './../../services/login-service.service'

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  products = [
    { 
      'product01' : 'product01',
      'amount' : 30
    },
    {
      'product' : 'product02',
      'amount' : 300
    },
    {
      'product' : 'product3',
      'amount' : 20.75
    },
    {
      'product' : 'product4',
      'amount' : 20.175
    },
    {
      'product' : 'product5',
      'amount' : 1000
    }
  ];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  paymentMode = ['Add Debit/Credit/ATM Card', 'Net Banking', 'Cash on delivery']
  addItem = new FormGroup({
    item : new FormControl(''),
    amount : new FormControl(''),
    qty : new FormControl(''),
    paymentMethod: new FormControl(''),
    totalAmount: new FormControl('')
  });
  selectedItemAmount: number;
  totalPrice: number;
  user: any;
  constructor(private orderService: OrderServiceService,
    private lgnSrvc : LoginServiceService,
    private router : Router) { }

  ngOnInit() {
    this.user = this.lgnSrvc.getUserInfo();
      
  }

  selectItem(val): void {
    this.selectedItemAmount = val.item.amount;
    this.addItem.controls['amount'].setValue(this.selectedItemAmount);
  }

  selectQuantity(val): void {
    this.totalPrice = this.selectedItemAmount * val.qty;
    this.addItem.controls['totalAmount'].setValue(this.totalPrice);
  }

  selectPaymentMode(val): void {
    this.addItem.controls['paymentMethod'].setValue(val.paymentMethod);
  }
  addNewITem(): void {
    this.orderService.orderItem(this.addItem.value, this.user)
      .subscribe((res) => {
        if(res.status === 200) {
          this.router.navigate(['/', 'home']);
        }
      })
  }

}
