import { Component ,OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { CartServiceService } from 'src/app/shared/cart-service.service';
import { CartItem } from 'src/app/shared/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() 
  cartItem : CartItem ;
  @Output() deleteItem: EventEmitter<CartItem> = new EventEmitter();

  constructor (private cartService:CartServiceService ){
    this.cartItem={
      product:{
        id:0,
        name:'Your cart is Empty',
        price:0,
        description:'',
        url:''
      },
      qty:0
    }
  }
  
  ngOnInit(): void {
  }

  onDelete(cartItem:CartItem){
    this.deleteItem.emit(cartItem);
  }

}
