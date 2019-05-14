import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../environments/environment';
import {Product} from '../models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  addUrl = '/product/addJson';

  constructor(private http: HttpClient,
              private auth: AuthService,
              private toastr: ToastrService) {
  }

  public add(product: Product) {
    return this.http.post(environment.APIEndpoint + this.addUrl, product, {responseType: 'text',});
  }

  public addPhoto(id, fileToUpload: any){
    let input = new FormData();
    input.append("file", fileToUpload);
    return this.http.post(environment.APIEndpoint + '/product/addPhoto', input , {responseType: 'text', params : {id}});
  }

  public listProducts() {
    return this.http.get<Product[]>(environment.APIEndpoint + '/product/all');
  }

  public getProductById(id: number) {
    return this.http.get<Product>(environment.APIEndpoint + '/product/' + id);
  }

  public deleteProduct(id: number) {
    return this.http.delete(environment.APIEndpoint + '/product/' + id, {responseType: 'text'});
  }

  public updateProduct(product: Product) {
    return this.http.patch(environment.APIEndpoint + '/product/' + product.productId, product, {responseType: 'text'});
  }
}
