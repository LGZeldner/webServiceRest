import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  sortType: string;
  sortOrder: number;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.sortIdUp();
  }
  sortIdUp(){
    this.sortType = "id";
    this.sortOrder = 1;
  }
  sortPriceUp(){
    this.sortType = "price";
    this.sortOrder = 1;
  }
  sortPriceDown(){
    this.sortType = "price";
    this.sortOrder = 0;
  }
  sortOrdersUp(){
    this.sortType = "orders";
    this.sortOrder = 1;
  }
  sortOrdersDown(){
    this.sortType = "orders";
    this.sortOrder = 0;
  }
}
