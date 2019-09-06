import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor(private CartService: ShoppingCartService) {


  }

  addToCart(product: Product) {
    this.CartService.addToCart(product);
  }
}
