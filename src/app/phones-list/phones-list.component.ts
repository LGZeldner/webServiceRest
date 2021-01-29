import { Component, OnInit } from '@angular/core';
import {PhonesService} from '../shared/services/phones.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {
  sortType: string;
  sortOrder: number;
  constructor(private phonesService: PhonesService) { }

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
