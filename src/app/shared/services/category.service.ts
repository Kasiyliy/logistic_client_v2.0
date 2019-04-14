import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/category';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private toastr: ToastrService) {

  }

  public add(category: Category) {
    return this.http.post(environment.APIEndpoint + '/products/category/addJson', category, {responseType: 'text'});
  }

  public listCategories() {
    return this.http.get<Category[]>(environment.APIEndpoint + `/product/category/all`);
  }

  public getCategoryById(id: number) {
    return this.http.get<Category>(environment.APIEndpoint + '/products/category/' + id);
  }

  public deleteCategory(id: number) {
    return this.http.delete(environment.APIEndpoint + '/products/category/' + id, {responseType: 'text'});
  }

  public deleteCategory2(id: number) {
    return this.http.post(environment.APIEndpoint + '/products/category/' + id, {}, {params: {_method: 'delete'}});
  }

  public updateCategory(category: Category) {
    return this.http.patch(environment.APIEndpoint + '/products/category/' + category.productCategoryId, category,{responseType: 'text'});
  }


}
