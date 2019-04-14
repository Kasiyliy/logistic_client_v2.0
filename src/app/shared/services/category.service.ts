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
    this.http.post(environment.APIEndpoint + '/product/category/addJson', category, {responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listCategories() {
    return this.http.get<Category[]>(environment.APIEndpoint + `/product/category/all`);
  }

  public getCategoryById(id: number) {
    return this.http.get<Category>(environment.APIEndpoint + '/product/category/' + id);
  }

  public deleteCategory(id: number) {
    return this.http.delete(environment.APIEndpoint + '/product/category/' + id);
  }

  public deleteCategory2(id: number) {
    return this.http.post(environment.APIEndpoint + '/product/category/' + id, {}, {params: {_method: 'delete'}});
  }

  public updateCategory(category: Category) {
    return this.http.patch(environment.APIEndpoint + '/product/category/' + category.productCategoryId, category);
  }


}
