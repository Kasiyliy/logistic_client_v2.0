import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { routerTransition } from 'src/app/router.animations';
import { environment } from 'src/environments/environment';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations: [routerTransition()]
})
export class ProductDetailsComponent implements OnInit {


  product: Product

  constructor(private route: ActivatedRoute,private ngxSmartModalService: NgxSmartModalService,
              private productService: ProductService) { }

  ngOnInit() {
    this.fetchData();
  }

  zakazBeru(){
    this.ngxSmartModalService.getModal('myModal').open();
}
  zakazJabu()
{
  this.ngxSmartModalService.getModal('myModal').close();

}  fetchData = () => {
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
