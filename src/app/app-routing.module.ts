import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component'; 
import { CheckedoutComponent } from './cart/checkedout/checkedout.component';

const routes: Routes = [
  {path:'',component:ProductListComponent} , 
  {path:'cart',component:CartComponent},
  {path:'success',component:CheckedoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
