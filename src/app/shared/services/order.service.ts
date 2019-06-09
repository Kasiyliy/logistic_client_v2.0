import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {Company} from '../models/company';
import {Customer} from '../models/customer';
import {Product} from '../models/product';
import {Order} from '../models/order';

import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  addUrl = '/order/addJson';

  constructor(private http: HttpClient,
              private toastr: ToastrService) {

  }
    public add(order: Order) {
    return this.http.post(environment.APIEndpoint + this.addUrl, order, {responseType: 'text',});
  }

  

  public listOrders() {
    return this.http.get<Order[]>(environment.APIEndpoint + '/order/all');
  }

  public getOrderById(id: number) {
    return this.http.get<Order>(environment.APIEndpoint + '/order/' + id);
  }

  public deleteOrder(id: number) {
    return this.http.delete(environment.APIEndpoint + '/order/' + id, {responseType: 'text'});
  }

  public updateOrder(order: Order) {
    return this.http.patch(environment.APIEndpoint + '/order/' + order.orderId, order, {responseType: 'text'});
  }

  

  

}
