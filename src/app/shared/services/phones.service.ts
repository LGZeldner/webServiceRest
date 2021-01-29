import {Injectable, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Phone} from "../models/phone.model";
import {PhonesApiService} from "./phones-api.service";

@Injectable({
  providedIn: 'root'
})
export class PhonesService implements OnInit {
  public phones: any;
  constructor(private phonesApiService: PhonesApiService) {
    this.getPhones();
  }
  ngOnInit() {

  }
  async getPhones () {
    try {
      let gphones = this.phonesApiService.getPhones();
      this.phones = (isNullOrUndefined(await gphones)) ? [] : await gphones;

    } catch (err) {
      console.log(err);
    }
  }

  async onAddPhone (phone: Phone) {
    phone.id = (this.phones.length)
      ? this.phones[this.phones.length - 1].id + 1
      : 1;
    this.phones.push(phone);
    try {
      await this.phonesApiService.postPhones({
        title: phone.title, article: phone.article, price: phone.price, manufact: phone.manufact,
        year: phone.year, orders: phone.orders, camera: phone.camera, screen: phone.screen});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onEditPhone (editPhone: Phone) {
    let editId = this.phones.findIndex ((element, index, array) => {
      return (element.id === editPhone.id)});
    this.phones[editId] = editPhone;
    try {
      await this.phonesApiService.putPhones(editPhone.id, {
        title: editPhone.title, article: editPhone.article, price: editPhone.price, manufact: editPhone.manufact,
        year: editPhone.year, orders: editPhone.orders, camera: editPhone.camera, screen: editPhone.screen});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onDelPhone (delPhoneId: number) {
    this.phones.splice(this.phones.indexOf(this.phones.find((element, index, array) => {
      return (element.id === delPhoneId)
    })), 1); /* удалили из массива элемент */
    try {
      await this.phonesApiService.deletePhones(delPhoneId);
    }
    catch (e) {
      console.error(e);
    }
  }

}
