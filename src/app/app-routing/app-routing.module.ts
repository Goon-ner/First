import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsPageComponent} from "../pages/products-page/products-page.component";
import {AboutPageComponent} from "../pages/about-page/about-page.component";
import {ProductDetailsComponent} from "../components/product-details/product-details.component";


const routes: Routes = [
  {path: '', component: ProductsPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: ':id', component: ProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
