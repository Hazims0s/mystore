import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-list/product-service.service';
import { CartServiceService } from '../shared/cart-service.service';
import { CartItem } from '../shared/cartItem.model';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  @Input () product! : Product 
  qty:number=1;
  id?=0;
  constructor(private cartService:CartServiceService,
    private productService: ProductServiceService,private router:Router,  private route: ActivatedRoute,){
  }
 
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
  this.productService.getProducts().subscribe(data=> 
     this.product=   data.find(p=> p.id== this.id )!);
  }
  onClick(productToCart:Product)
  {
    const cartItem:CartItem = {
      product:this.product,
      qty:this.qty
    }
    this.cartService.addItem(cartItem);
    alert('Added to cart');

  }
  onSelected(value:string){
    this.qty =parseInt(value); 
  }

}
