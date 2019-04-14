import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) {
    this.loginForm = this.builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).toPromise().then(resp => {
      if (resp === 'Неправильный логин или пароль' || resp === 'Incorrect username or password') {
        this.toastrService.warning(resp);
      } else {
        this.toastrService.success('Авторизовано');
        this.authService.authorized.next(true);
        localStorage.setItem(environment.apiToken, resp);
        this.router.navigate(['ui']);
      }


    }, err => {
      this.toastrService.error('Не удалось авторизоваться');
      console.log(err);
    });
  }
}
