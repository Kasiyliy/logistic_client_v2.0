import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private toastrService: ToastrService) {
  }

  login(username: string, password: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('username', username);
    httpParams = httpParams.append('password', password);
    return this.http.post(environment.APIEndpoint + '/authentication/login', {}, {params: httpParams, responseType: 'text'});
  }

  checkThenRedirect() {
    if (!this.validateToken() || !localStorage.getItem(environment.apiToken)) {
      this.toastrService.error('Нужно авторизоваться!');
      this.router.navigate(['auth/login']);
    }
  }

  isAuthorized() {
    if (!this.validateToken() || !localStorage.getItem(environment.apiToken)) {
      return false;
    } else {
      return true;
    }
  }


  checkAvailability(): boolean {
    const auth = localStorage.getItem(environment.apiToken);
    return !!auth;
  }

  removeToken() {
    localStorage.removeItem(environment.apiToken);
  }

  getToken() {
    return localStorage.getItem(environment.apiToken);
  }

  validateToken() {
    if (localStorage.getItem(environment.apiToken)) {

      let httpParams = new HttpParams();
      httpParams = httpParams.append('token', localStorage.getItem(environment.apiToken));
      this.http.get(environment.APIEndpoint + '/authentication/validate', {
        params: httpParams,
        responseType: 'text'
      }).toPromise().then(resp => {
        if (resp !== 'OK') {
          localStorage.clear();
          this.authorized.next(false);
        }
      }, err => {
        localStorage.clear();
        this.authorized.next(false);
      });
      this.authorized.next(true);
    } else {
      this.authorized.next(false);
    }
    return this.authorized;
  }


  public logout() {
    this.authorized.next(false);
    localStorage.clear();
    this.toastrService.success('Вы вышли из системы');
    this.router.navigate(['auth/login']);
  }

  getMyRole() {

    if (!this.getMyApi()) {
      return null;
    }
    const base64Url = this.getMyApi().split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return (JSON.parse(window.atob(base64))).role;
  }

  getMyUsername() {

    if (!this.getMyApi()) {
      return null;
    }

    const base64Url = this.getMyApi().split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return (JSON.parse(window.atob(base64))).sub;
  }

  getMyApi() {
    return localStorage.getItem(environment.apiToken);
  }
}
