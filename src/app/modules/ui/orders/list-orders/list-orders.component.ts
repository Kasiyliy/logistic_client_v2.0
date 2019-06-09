import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/models/order';
import {Router} from '@angular/router';
import {OrderService} from '../../../../shared/services/order.service';
import {slideToLeft} from '../../../../router.animations';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  animations: [slideToLeft()]
})
export class ListOrdersComponent implements OnInit {
  orders: Order[];
  deletingOrder: Order;
  constructor(private router: Router,
              private orderService: OrderService,
              private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.orderService.listOrders()
      .subscribe(data => {
        this.orders = data;
        // this.observableCategories = of(this.categories);
      });
  }

  deleteOrder(order: Order): void {
    this.orderService.deleteOrder(order.orderId).toPromise().then(resp => {
      this.orders = this.orders.filter(c => c.orderId !== order.orderId);
      this.ngxSmartModalService.getModal('myModal').close()
    });
  }

  submitToDeleteOrder(order: Order): void {
    this.deletingOrder = order;
    this.ngxSmartModalService.getModal('myModal').open();
  }

}
