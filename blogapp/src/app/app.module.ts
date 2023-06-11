import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './addblog/addblog.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { UpdateblogComponent } from './updateblog/updateblog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'addblock',component:AddBlogComponent},
  {path:'updateblock',component:UpdateblogComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'logout',component:LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateblogComponent,
    AddBlogComponent,
    HomeViewComponent,
    ContactusComponent,
    LogoutComponent
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
