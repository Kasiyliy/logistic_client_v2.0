import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../models/customer';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  addUrl = '/customer/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  public listCustomers() {
    return this.http.get<Customer[]>(environment.APIEndpoint + '/customer/all');

  }

  public add(customer: Customer) {
    this.http.post(environment.APIEndpoint + this.addUrl, customer, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }
}

