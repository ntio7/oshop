import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products$;

  constructor(productService: ProductService) {
    this.products$ = productService.getAll();
   }

  ngOnInit() {
  }

}
