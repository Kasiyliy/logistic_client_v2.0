import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate = () => {
    if (localStorage.getItem(environment.apiToken)) {
      this.router.navigate(['/ui']);
      return false;
    }
    return true;
  }

}
