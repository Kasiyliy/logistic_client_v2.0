import {Company} from './company';
import {Category} from './category';
import {Subcategory} from './subcategory';

export class Product {
  productId: number;
  productCategoryId:	number;
  productDescription:	string;
  productNameEn:	string;
  productNameKk:	string;
  productNameRu:	string;
  sellerCompanyId:	number;
  specialCharacteristicId:	number;
  specialCharacteristicsId:	number;
  productSubcategoryId:	number;
  manufacturer: string;
  price: number;
  size: number;
  weight: number;
  uniqueIdNumber: string;
  serialNumber: number;

  category: Category;
  subcategory: Subcategory;
  company: Company;

}
