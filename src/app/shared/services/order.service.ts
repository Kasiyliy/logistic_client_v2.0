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

  

  

}
