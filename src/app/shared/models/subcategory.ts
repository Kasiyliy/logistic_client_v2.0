import {Category} from './category';

export class Subcategory {
  productCategoryId: number;
  productSubcategoryId: number;
  subCategoryAddInfo:	string;
  subCategoryNameEn:	string;
  subCategoryNameKk:	string;
  subCategoryNameRu:	string;
  subcategoryName: {
    en: string;
    kk: string;
    ru: string;
  };

  category: Category;
}
