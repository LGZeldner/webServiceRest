import { Pipe, PipeTransform } from '@angular/core';
import {Phone} from '../models/phone.model';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'sortPhones'
})
export class SortPhonesPipe implements PipeTransform {

  transform(phones: Phone[], sortType: string, sortOrder: number): any {
    if (!isNullOrUndefined(phones)) {
      if (sortType === "id") {
        phones.sort((a, b) => (sortOrder)?(a.id - b.id):(b.id - a.id));
      }
      else
      if (sortType === "price") {
        phones.sort((a, b) => (sortOrder)?(a.price - b.price):(b.price - a.price));
      }
      else
      if (sortType === "orders") {
        phones.sort((a, b) => (sortOrder)?(a.orders - b.orders):(b.orders - a.orders));
      }
    }
    return phones;
  }
}
