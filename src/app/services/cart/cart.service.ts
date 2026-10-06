import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  updateCartCount(newCount: number) {
    this.cartCountSubject.next(newCount);
  }

  getCurrentCount(): number {
    return this.cartCountSubject.value;
  }

  constructor() { }
}
