import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartServiceService } from '../shared/cart-service.service';
import { FormsModule } from '@angular/forms';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartCheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
