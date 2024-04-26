import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpartnersComponent } from './Back/Components/viewpartners/viewpartners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpartnerComponent } from './Back/Components/addpartner/addpartner.component';
import { UpdatepartnerComponent } from './Back/Components/updatepartner/updatepartner.component';

import { PartnerDetailsComponent } from './Back/Components/partner-details/partner-details.component';
import { CommonModule } from '@angular/common';
//import { AddPromotionModalComponent } from './Back/components/add-promotion-modal/add-promotion-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewpartnersComponent,
    AddpartnerComponent,
    UpdatepartnerComponent,
    PartnerDetailsComponent
   // AddPromotionModalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //CommonModule
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
