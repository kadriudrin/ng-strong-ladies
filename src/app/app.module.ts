import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrontComponent } from './store/static/front/front.component';
import { AboutComponent } from './store/static/about/about.component';
import { LegalComponent } from './store/static/legal/legal.component';
import { BasketComponent } from './store/dynamic/basket/basket.component';
import { ProductDetailComponent } from './store/dynamic/product/product-detail/product-detail.component';
import { ProductLinkComponent } from './store/dynamic/product/product-link/product-link.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LottieModule } from 'ngx-lottie';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import player from 'lottie-web';

export function playerFactory(): any {
    return player;
}

@NgModule({
    declarations: [
        AppComponent,
        FrontComponent,
        AboutComponent,
        LegalComponent,
        BasketComponent,
        ProductDetailComponent,
        ProductLinkComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        LottieModule.forRoot({ player: playerFactory }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
