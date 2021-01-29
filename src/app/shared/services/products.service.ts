import {Injectable, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Product} from "../models/product.model";
import {ProductsApiService} from "./products-api.service";

@Injectable({
  providedIn: 'root'
})
/* Методы для работы с массивом строк из таблицы products, используется модель Product */
export class ProductsService implements OnInit {
  public products: any;
  constructor(private productsApiService: ProductsApiService) {
    this.getProducts();
  }
  ngOnInit() {

  }
  async getProducts () {
    try {
      let gproducts = this.productsApiService.getProducts();
      this.products = (isNullOrUndefined(await gproducts)) ? [] : await gproducts;

    } catch (err) {
      console.log(err);
    }
  }

  async onAddProduct (product: Product) {
    product.id = (this.products.length)
      ? this.products[this.products.length - 1].id + 1
      : 1;
    this.products.push(product);
    try {
      await this.productsApiService.postProducts({
        title: product.title, article: product.article, price: product.price, manufact: product.manufact,
        year: product.year, orders: product.orders, camera: product.camera, screen: product.screen});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onEditProduct (editProduct: Product) {
    let editId = this.products.findIndex ((element, index, array) => {
      return (element.id === editProduct.id)});
    this.products[editId] = editProduct;
    try {
      await this.productsApiService.putProducts(editProduct.id, {
        title: editProduct.title, article: editProduct.article, price: editProduct.price, manufact: editProduct.manufact,
        year: editProduct.year, orders: editProduct.orders, camera: editProduct.camera, screen: editProduct.screen});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onDelProduct (delProductId: number) {
    this.products.splice(this.products.indexOf(this.products.find((element, index, array) => {
      return (element.id === delProductId)
    })), 1); /* удалили из массива элемент */
    try {
      await this.productsApiService.deleteProducts(delProductId);
    }
    catch (e) {
      console.error(e);
    }
  }

}
