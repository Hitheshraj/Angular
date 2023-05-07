import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { SecretComponent } from './secret/secret.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { BasicHighlightDirective } from './CustomDirective/BasicHighlightDirective';
import { BetterHighlightDirective } from './CustomDirective/better-highlight.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesdemoComponent } from './observablesdemo/observablesdemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ShortenPipe } from './commonpipes/shorten-pipe';
import { FilterPipe } from './commonpipes/filter.pipe';
import { ReversePipe } from './commonpipes/reverse.pipe';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'server',component:ServerComponent},
  {path:'secret',component:SecretComponent},
  {path:'products',component:ProductsComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'observable',component:ObservablesdemoComponent},
  {path:'tforms',component:TformsComponent},
  {path:'rforms',component:RformsComponent},
  {path:'pipesdemo',component:PipesdemoComponent},
  {path:'blogposts',component:BlogpostsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    ServerComponent,
    NamesComponent,
    SecretComponent,
    AddproductComponent,
    ProductComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountsComponent,
    NewaccountComponent,
    AccountComponent,
    TformsComponent,
    RformsComponent,
    PipesdemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    BlogpostsComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
