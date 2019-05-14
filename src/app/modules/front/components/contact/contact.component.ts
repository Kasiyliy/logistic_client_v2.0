import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import { Product } from './../../../../shared/models/product';
import {NgxSmartModalService} from 'ngx-smart-modal';
import { ProductService } from './../../../../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()]
})
export class ContactComponent implements OnInit {

  constructor(private ngxSmartModalService: NgxSmartModalService,
              private router: Router
          ) { }

  ngOnInit() {
  }

}
