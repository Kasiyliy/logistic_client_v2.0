import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {Subcategory} from '../models/subcategory';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  addUrl = '/product/category/subcategory/addJson';

  constructor(private http: HttpClient,
              private toastr: ToastrService) {

  }

  public add(subcategory: Subcategory) {
    return this.http.post(environment.APIEndpoint + this.addUrl, subcategory, {responseType: 'text'});
  }

  public listSubCategories() {
    return this.http.get<Subcategory[]>(environment.APIEndpoint + '/product/category/subcategory/all');
  }

  public getSubcategoryById(id: number) {
    return this.http.get<Subcategory>(environment.APIEndpoint + '/product/category/subcategory/' + id);
  }

  public deleteSubcategory(id: number) {
    return this.http.delete(environment.APIEndpoint + '/product/category/subcategory/' + id, {responseType: 'text'});
  }

  public deleteSubcategory2(id: number) {
    return this.http.post(environment.APIEndpoint + '/product/category/subcategory/' + id, {}, {
      params: {
        _method: 'delete',
        responseType: 'text'
      }
    });
  }

  public updateSubcategory(subcategory: Subcategory) {
    return this.http.patch(environment.APIEndpoint + '/product/category/subcategory/'
      + subcategory.productSubcategoryId, subcategory, {responseType: 'text'});
  }

}
