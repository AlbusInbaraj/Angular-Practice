import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public cartService = inject(CartService);

  public addToCart() {
    const nextCount = this.cartService.getCurrentCount() + 1;

    this.cartService.updateCartCount(nextCount);
  }
  
}
