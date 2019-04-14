import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../shared/models/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CustomerService} from '../../../shared/services/customer.service';
import {OtpService} from '../../../shared/services/otp.service';
import {CompanyService} from '../../../shared/services/company.service';
import {Company} from '../../../shared/models/company';
import {routerTransition} from '../../../router.animations';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ToastrService} from 'ngx-toastr';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [routerTransition()],
})

export class RegisterComponent implements OnInit {
  otp: string;
  isCompany = true;
  companyForm: FormGroup;
  customerForm: FormGroup;


  constructor(private http: HttpClient,
              private builder: FormBuilder,
              // private checkCompany: CheckCompanyBinService,
              private ngxSmartModalService: NgxSmartModalService,
              private companyService: CompanyService,
              private toastr: ToastrService,
              private otpService: OtpService,
              private customerService: CustomerService) {
    this.companyForm = this.builder.group({
      sellerCompanyBin: [null, [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      sellerCompanyEmail: [null, Validators.compose([Validators.required, Validators.email])],
      sellerCompanyMobilePhone: [null, Validators.required],
      sellerCompanyPhone: [null, Validators.required],
      sellerCompanyNameEn: [null, Validators.required],
      sellerCompanyNameKk: [null, Validators.required],
      sellerCompanyNameRu: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      repassword: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'repassword')
    });

    this.customerForm = this.builder.group({
      iinOrBin: [null, [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      mobilePhone: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      addInfo: [null, Validators.required],
      customerNameEn: [null, Validators.required],
      customerNameKk: [null, Validators.required],
      customerNameRu: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      repassword: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'repassword')
    });

  }

  addCompany() {
    const company = new Company();
    company.password = this.companyForm.get('password').value;
    company.sellerCompanyBin = this.companyForm.get('sellerCompanyBin').value;
    company.sellerCompanyEmail = this.companyForm.get('sellerCompanyEmail').value;
    company.sellerCompanyMobilePhone = this.companyForm.get('sellerCompanyMobilePhone').value;
    company.sellerCompanyNameEn = this.companyForm.get('sellerCompanyNameEn').value;
    company.sellerCompanyNameKk = this.companyForm.get('sellerCompanyNameKk').value;
    company.sellerCompanyNameRu = this.companyForm.get('sellerCompanyNameRu').value;
    company.username = this.companyForm.get('username').value;
    company.sellerCompanyPhone = this.companyForm.get('sellerCompanyPhone').value;
    console.log(company);
    this.companyForm.reset();
    this.companyService.add(company);
  }

  addCustomer() {
    const customer = new Customer();
    customer.addInfo = this.customerForm.get('addInfo').value;
    customer.customerNameEn = this.customerForm.get('customerNameEn').value;
    customer.customerNameKk = this.customerForm.get('customerNameKk').value;
    customer.customerNameRu = this.customerForm.get('customerNameRu').value;
    customer.email = this.customerForm.get('email').value;
    customer.iinOrBin = this.customerForm.get('iinOrBin').value;
    customer.mobilePhone = this.customerForm.get('mobilePhone').value;
    customer.password = this.customerForm.get('password').value;
    customer.phoneNumber = this.customerForm.get('phoneNumber').value;
    customer.username = this.customerForm.get('username').value;
    console.log(customer);
    this.customerForm.reset();
    this.customerService.add(customer);
  }

  checkOtp() {
    this.ngxSmartModalService.getModal('myModal').open();
    const mobilePhone = this.customerForm.get('mobilePhone').value;
    this.otpService.checkPhoneNumber(mobilePhone);
  }

  verifyOtp() {
    const mobilePhone = this.customerForm.get('mobilePhone').value;
    this.otpService.verifyOtp(mobilePhone, this.otp).subscribe(res => {
      this.toastr.success(res);
      this.addCustomer();
      this.ngxSmartModalService.getModal('myModal').close();
    }, err => {
      this.toastr.error(err);
    });
  }

  ngOnInit() {
  }

}
