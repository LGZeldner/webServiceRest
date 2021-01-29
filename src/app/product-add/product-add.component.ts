import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../shared/models/product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../shared/services/products.service'

import {Router} from '@angular/router';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Input() edProduct: Product;
  @Output() editFlag = new EventEmitter<boolean>();
  addForm: FormGroup;
  disabled_form = false;
  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit() {
    if (isNullOrUndefined(this.edProduct)) {
      this.edProduct = {title: "", article: "", price: null, manufact: "",
        year: "", orders: null, camera: "", screen: "", id: 0};
    }
    console.log(this.edProduct);
    this.addForm = new FormGroup( {
      title: new FormControl({value: this.edProduct.title, disabled: this.disabled_form}, [Validators.required]),
      article: new FormControl({value: this.edProduct.article, disabled: this.disabled_form}, [Validators.required]),
      price: new FormControl({value: this.edProduct.price, disabled: this.disabled_form}, [Validators.required]),
      manufact: new FormControl({value: this.edProduct.manufact, disabled: this.disabled_form}, [Validators.required]),
      year: new FormControl({value: this.edProduct.year, disabled: this.disabled_form}, [Validators.required]),
      orders: new FormControl({value: this.edProduct.orders, disabled: this.disabled_form}, [Validators.required]),
      camera: new FormControl({value: this.edProduct.camera, disabled: this.disabled_form}, [Validators.required]),
      screen: new FormControl({value: this.edProduct.screen, disabled: this.disabled_form}, [Validators.required])
    });
  }

  onSave() {
    console.log(this.edProduct.id);
    if (this.edProduct.id) {
      let product = new Product (this.addForm.value.title, this.addForm.value.article,
                             this.addForm.value.price, this.addForm.value.manufact,
                             this.addForm.value.year, this.addForm.value.orders,
                             this.addForm.value.camera, this.addForm.value.screen,
        this.edProduct.id);
      this.productsService.onEditProduct(product);
      this.editFlag.emit(false);
    }
    else {
      let product = new Product (this.addForm.value.title, this.addForm.value.article,
        this.addForm.value.price, this.addForm.value.manufact,
        this.addForm.value.year, this.addForm.value.orders,
        this.addForm.value.camera, this.addForm.value.screen);
      console.log(product);
      this.productsService.onAddProduct(product);
      this.router.navigate([`/list`]); /* возвращаемся к списку */
    }
  }
}
