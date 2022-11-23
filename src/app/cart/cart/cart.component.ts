import { Component ,OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/shared/cart-service.service';
import { CartItem } from 'src/app/shared/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
   cartItems : CartItem[];
   totalPrice=0;
  constructor (private cartService: CartServiceService ) {
    this.cartItems=[];
  }
  
  ngOnInit(): void {
     this.cartItems= this.cartService.getCart();
     this.totalPrice=this.cartService.totalPrice();
  }

}
