import { Component ,OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/shared/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() 
  cartItem : CartItem ;

  constructor (){
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

}
