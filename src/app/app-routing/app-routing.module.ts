import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';


const appRoutes: Routes =[{path:'',component:WelcomeComponent},
                          {path:'product-list',component:ProductListComponent},
                          {path:'Product Details/:product',component:ProductDetailsComponent}]
@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
