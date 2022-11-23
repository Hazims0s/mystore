import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/shared/cart-service.service';


@Component({
  selector: 'app-checkedout',
  templateUrl: './checkedout.component.html',
  styleUrls: ['./checkedout.component.css']
})
export class CheckedoutComponent implements OnInit {
  
  /**
   *
   */
  constructor(private cartService:CartServiceService,private router:Router) {    
  }
  ngOnInit(): void {
    this.cartService.clearCart();
  }
 

}
