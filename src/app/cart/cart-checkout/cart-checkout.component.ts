import { Component , OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
   name= '';
   address= '';
   creditCard='';
   regValid = new FormControl(this.creditCard, Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$'));

   constructor() {
    
   }
  ngOnInit(): void {
  }  
 onSubmit():void{  

    alert("Hola");
   }



}
