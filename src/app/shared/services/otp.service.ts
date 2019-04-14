import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  checkMobile = '/customer/exists';
  otpEndpoint = '/customer/generateOtp';
  validateOtp = '/customer/validateOtp';

  constructor(private http: HttpClient, private toastr: ToastrService) {

  }

  sendOtp(phoneNumber: string) {
    this.http.post(environment.APIEndpoint + this.otpEndpoint, {mobilePhone: phoneNumber}, {responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  checkPhoneNumber(phoneNumber: string) {
    this.http.post(environment.APIEndpoint + this.checkMobile, {mobilePhone: phoneNumber}, {responseType: 'text'}).subscribe(res => {
      if (res === 'false') {
        this.toastr.success('Code sent!');
        this.sendOtp(phoneNumber);

      } else {
        this.toastr.error('Phone number is already exists!');

      }
    }, err => {
      this.toastr.error(err);
    });
  }

  verifyOtp(phoneNumber: string, otp: string) {
    return this.http.post(environment.APIEndpoint + this.otpEndpoint, {mobilePhone: phoneNumber, otp}, {responseType: 'text'});
  }
}
