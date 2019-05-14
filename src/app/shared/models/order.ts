import {Customer} from './customer';
import { Product } from './product';
import { Company } from './company';
export class Order{
    customerId: number;
    deliveringStatus: string;
    orderAmount	: number;
    orderDate: Date;
    productAmount: number;
    productCount: number;
    productId: number;
    sellerCompanyId: number;
    totalPrice: number;
    unitPrice: number;
}