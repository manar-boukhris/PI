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
import { ViewformationsComponent } from './Back/Components/viewformations/viewformations.component';
import { FormationDetailsComponent } from './Back/components/formation-details/formation-details.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    ViewpartnersComponent,
    AddpartnerComponent,
    UpdatepartnerComponent,
    PartnerDetailsComponent,
    ViewformationsComponent,
    FormationDetailsComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
   PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
