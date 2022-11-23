import { Component , Input ,OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartServiceService } from '../shared/cart-service.service';
import { CartItem } from '../shared/cartItem.model';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  qty:number=1;
  @Input()
  product!: Product;



  constructor(private cartService:CartServiceService){
    this.product = {
      id:0,
      name:'Hazim',
      price:22,
      url:'google.com',
      description:'Alraddadi'

    } 
    
  }

  ngOnInit(): void {
  }
  onClick(productToCart:Product)
  {
    const cartItem:CartItem = {
      product:this.product,
      qty:this.qty
    }
    this.cartService.addItem(cartItem);
  }
  
  onSelected(value:string){
    this.qty =parseInt(value); 
  }

}
