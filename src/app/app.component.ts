import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from './shared/services/auth.service';
import {Router} from '@angular/router';
import {routerTransition} from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()],
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {

    $('.header-accountbox-trigger').on('click', () => {
      $('.header-accountbox').slideToggle();
    });

    this.authService.validateToken();

  }


  logout = () => {
    this.authService.logout();
  }

  navigateTo(value) {
    if (value) {
      this.router.navigate([value]);
    }
    return false;
  }

}
