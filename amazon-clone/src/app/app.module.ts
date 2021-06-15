import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';
import { ServiceNavComponent } from './components/service-nav/service-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchNavItemComponent } from './components/search-nav-item/search-nav-item.component';
import { SearchNavSearchInputComponent } from './components/search-nav-search-input/search-nav-search-input.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardItemsComponent } from './components/card-items/card-items.component';
import { SliderItemsComponent } from './components/slider-items/slider-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchNavComponent,
    ServiceNavComponent,
    SearchNavItemComponent,
    SearchNavSearchInputComponent,
    SliderComponent,
    CardComponent,
    ProductsComponent,
    CardButtonComponent,
    CardItemsComponent,
    SliderItemsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
