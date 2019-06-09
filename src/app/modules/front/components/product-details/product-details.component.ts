import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { routerTransition } from 'src/app/router.animations';
import { environment } from 'src/environments/environment';
import {NgxSmartModalService} from 'ngx-smart-modal';
import { CompanyService } from 'src/app/shared/services/company.service';
import { Company } from 'src/app/shared/models/company';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations: [routerTransition()]
})
export class ProductDetailsComponent implements OnInit {

  product: Product
  products: Product[] = []
  orderForm : FormGroup
  customers : Customer[] = []
  companies: Company[] = []


  constructor(private route: ActivatedRoute,private ngxSmartModalService: NgxSmartModalService,
              private productService: ProductService, private builder: FormBuilder,
              private companyService: CompanyService, private customerService: CustomerService,
              private orderService: OrderService, private toastr: ToastrService,private router: Router) { 
              this.orderForm = this.builder.group({
                  customerId: [null, Validators.required],
                  deliveringStatus: [null, Validators.required],
                  orderAmount	: [null, Validators.required],
                  orderDate: [null, Validators.required],
                  productAmount: [null, Validators.required],
                  productCount: [null, Validators.required],
                  productId: [null, Validators.required],
                  sellerCompanyId: [null, Validators.required],
                  totalPrice: [null, Validators.required],
                  unitPrice: [null, Validators.required],
                });
              }


                addOrder() {
                const order = new Order();
                order.customerId = parseInt(this.orderForm.get('customerId').value,10);
                order.deliveringStatus = this.orderForm.get('deliveringStatus').value;
                order.orderAmount = parseInt(this.orderForm.get('orderAmount').value, 10);
                order.orderDate = this.orderForm.get('orderDate').value;
                order.productAmount = this.orderForm.get('productAmount').value;
                order.productCount = this.orderForm.get('productCount').value;
                order.productId = parseInt(this.orderForm.get('productId').value, 10);
                order.sellerCompanyId = this.orderForm.get('sellerCompanyId').value;
                order.totalPrice = this.orderForm.get('totalPrice').value;
                order.unitPrice = this.orderForm.get('unitPrice').value;
             
            
                this.orderForm.reset();
                this.orderService.add(order).subscribe(res => {
                  this.toastr.success(res);
                  this.router.navigate(['ui/products']);
                }, err => {
                  this.toastr.error(err);
                });
              }

  ngOnInit() {
    this.fetchData();
    this.fetchAll();
    this.customerService.listCustomers().subscribe(perf => {
      this.customers = perf;
  });
  this.productService.listProducts().subscribe(perf => {
    this.products = perf;
});
  }

  fetchAll = () => {
    this.companyService.listCompanies().subscribe(perf => {
        this.companies = perf;
    });
}

  zakazBeru(){
    this.ngxSmartModalService.getModal('myModal').open();
  }
  zakazJabu(){
  this.ngxSmartModalService.getModal('myModal').close();

  }  
    
  fetchData = () => {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params['id'])
        .subscribe(perf => {
          let images = perf.photoUrlsList.split(',');
          perf.photosArrayUrls = images.map( image => {
              image = environment.APIEndpoint + '/product/uploads/' + image;
              return image;
            });

          this.product = perf;
          
        })
    })
  }

}
