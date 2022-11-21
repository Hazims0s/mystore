import { Injectable } from '@angular/core';
import { CartItem } from './cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
  public get cart():CartItem{
    return JSON.parse( localStorage.getItem('cart') || '{}');
  }

  addItem(product:CartItem)
  {
    console.log("DONE ADDED");
    localStorage.setItem('cart',JSON.stringify(product));
  }

}

