import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpartnersComponent } from './Back/Components/viewpartners/viewpartners.component';
import { AddpartnerComponent } from './Back/Components/addpartner/addpartner.component';
import { UpdatepartnerComponent } from './Back/Components/updatepartner/updatepartner.component';
import { PartnerDetailsComponent } from './Back/Components/partner-details/partner-details.component';
const routes: Routes = [
  { path: 'partner', component: ViewpartnersComponent },
  { path: 'partner/add', component: AddpartnerComponent },
 { path: 'partner/update/:partnerid', component: UpdatepartnerComponent },
 {path : 'partner/:partnerid', component: PartnerDetailsComponent},
 //{path : 'promo/:partnerid' , component:PartnerDetailsComponent},
  {path : '' , redirectTo : 'partner' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
