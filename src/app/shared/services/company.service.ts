import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Company} from '../models/company';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  headers: HttpHeaders;
  addUrl = '/seller/company/addJson';

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  public add(company: Company) {
    return this.http.post(environment.APIEndpoint + this.addUrl, company, {responseType: 'text'});
  }

  public listCompanies() {
    return this.http.get<Company[]>(environment.APIEndpoint + '/seller/company/all');
  }

}
