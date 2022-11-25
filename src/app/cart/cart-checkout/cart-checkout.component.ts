import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

   name = '';
  address = '';
  creditCard = '';
   reg = new RegExp('[A-Za-z]');
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }
  onSubmit(): void {

    this.router.navigate(['success']);
  }
  
  checkPattern(value:string) {
     if(value.match(this.reg))
      alert('invalid input Numbers only ');
    }
 
  }


