import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpartnersComponent } from './Back/Components/viewpartners/viewpartners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpartnerComponent } from './Back/Components/addpartner/addpartner.component';
import { UpdatepartnerComponent } from './Back/Components/updatepartner/updatepartner.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewpartnersComponent,
    AddpartnerComponent,
    UpdatepartnerComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
