import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  user : any;
  authToken : any;
  url = "http://localhost:9090";
  constructor(private http : HttpClient) { }

  public orderItem(productInfo, user): Observable<any>{
    var payLoad = {
      productName : productInfo.item.product,
      productPrice : productInfo.item.amount, 
      productQuantity : productInfo.qty,
      totalAmount : productInfo.totalAmount,
      paymentMode : productInfo.paymentMethod,
      userid : user.userid
    }
    const url = this.url +""+'/addNewOrder';
    return this.http.post(url, {payLoad} ); 
  }

  public getList(user): Observable<any> {
    const url = this.url +""+'/getOrderList';
    return this.http.post(url, user);
  }

}
