import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../shared/models/product.model';
import {ProductsService} from '../shared/services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() inProduct: Product;
  @Output() delProduct = new EventEmitter<number>(); /* отправляем наверх */
  editFlag: boolean;
  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit() {
  }
  onDelProduct () {
    this.delProduct.emit(this.inProduct.id);
  }
  ordersUp () {
    this.inProduct.orders ++;
    this.productsService.onEditProduct(this.inProduct);
    this.router.navigate([`/list`]);
  }
}
