import { Component ,OnInit  } from '@angular/core';
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
deleteItem: any;
  constructor (private cartService: CartServiceService ) {
    this.cartItems=[];
  }
  
  ngOnInit(): void {
     this.cartItems= this.cartService.getCart();
     this.totalPrice=this.cartService.totalPrice();
  }

  deletedItem(cartItem:CartItem):void
  {
    this.cartService.deletItem(cartItem.product.id);
    this.cartItems=this.cartItems.filter(c =>c.product.id!==cartItem.product.id);
    alert('Item Deleted');
  }

}
