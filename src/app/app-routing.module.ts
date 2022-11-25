import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component'; 
import { CheckedoutComponent } from './cart/checkedout/checkedout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:ProductListComponent} , 
  {path:'cart',component:CartComponent},
  {path:'success',component:CheckedoutComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'**',redirectTo:'/'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
