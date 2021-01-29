import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../models/product.model';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[], sortType: string, sortOrder: number): any {
    if (!isNullOrUndefined(products)) {
      if (sortType === "id") {
        products.sort((a, b) => (sortOrder)?(a.id - b.id):(b.id - a.id));
      }
      else
      if (sortType === "price") {
        products.sort((a, b) => (sortOrder)?(a.price - b.price):(b.price - a.price));
      }
      else
      if (sortType === "orders") {
        products.sort((a, b) => (sortOrder)?(a.orders - b.orders):(b.orders - a.orders));
      }
    }
    return products;
  }
}
