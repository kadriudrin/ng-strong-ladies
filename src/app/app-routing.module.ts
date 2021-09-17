import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './store/dynamic/basket/basket.component';
import { ProductDetailComponent } from './store/dynamic/product/product-detail/product-detail.component';
import { AboutComponent } from './store/static/about/about.component';
import { FrontComponent } from './store/static/front/front.component';
import { LegalComponent } from './store/static/legal/legal.component';

const routes: Routes = [
    { path: '', component: FrontComponent },
    { path: 'product', component: ProductDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'legal', component: LegalComponent },
    { path: 'basket', component: BasketComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
