import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, HomeComponent, ProductHomeComponent, HeaderComponent, FooterComponent, ProductViewComponent, SubscribeComponent, CustomerReviewComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
