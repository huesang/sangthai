import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AlertModule } from 'ngx-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

//main component
import { AppComponent } from './app.component';
import { routing } from './app-routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { NewsComponent } from './news/news.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
//SERVICE
import { CartService }  from './cart.service';
import { ProductsService } from './products.service';
import { UltilService } from './ultil.service';
import { FormService } from "./form/form.service";
import { SearchService } from "./search/search.service";
import { GetHttpService } from "./form/checkout/get-http.service";
import { ActivationGuards } from "./ActivationGuards";
//FORM COMPONENT
import { CheckoutComponent } from './form/checkout/checkout.component';
import { RegisterComponent } from './form/register/register.component';
import { SignInComponent } from './form/sign-in/sign-in.component';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { FormMenuComponent } from './form/form-menu/form-menu.component';
import { EditUserComponent } from './form/edit-user/edit-user.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntroduceComponent,
    NewsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductListComponent,
    CheckoutComponent,
    RegisterComponent,
    SignInComponent,
    FormSearchComponent,
    FormMenuComponent,
    EditUserComponent,
    SearchComponent,
    CartComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy },ProductsService,UltilService,CartService,FormService,SearchService,GetHttpService,ActivationGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
