import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../router.animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [routerTransition()]
})
export class ShopComponent implements OnInit {
  products: [] = []
  categories: [] = []
  constructor() {
  }

  ngOnInit() {
  }

}
