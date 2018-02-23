import { NgModule }             from '@angular/core';
import { RouterModule, Routes ,ActivatedRoute,RouterOutlet,CanActivate } from '@angular/router';

import { ChildRecordRoutes } from './child-routes';
import { RouterLinkActive } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { NewsComponent }      from './news/news.component';
import { IntroduceComponent }      from './introduce/introduce.component';
import { ProductDetailComponent }      from './product-detail/product-detail.component';
import { CheckoutComponent } from "./form/checkout/checkout.component";
import { RegisterComponent } from "./form/register/register.component";
import { SignInComponent } from "./form/sign-in/sign-in.component";
import { EditUserComponent } from "./form/edit-user/edit-user.component";
import { SearchComponent } from "./search/search.component";
import { ActivationGuards } from "./ActivationGuards";
import { CartComponent } from "./cart/cart.component";
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'editUser', component: EditUserComponent},
  { path: 'introduce', component: IntroduceComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'news/:id', component: NewsComponent },
  ...ChildRecordRoutes
];
export const routing= RouterModule.forRoot(routes,{ useHash: true });
// @NgModule({
//   exports: [ RouterModule ],
//   imports: [ RouterModule.forRoot(routes) ],
//   providers: [WorksheetAccessGuard]
// })
// export class AppRoutingModule {
  
// }