import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpartnersComponent } from './Back/Components/viewpartners/viewpartners.component';
import { AddpartnerComponent } from './Back/Components/addpartner/addpartner.component';
import { UpdatepartnerComponent } from './Back/Components/updatepartner/updatepartner.component';
import { PartnerDetailsComponent } from './Back/Components/partner-details/partner-details.component';
import { ViewformationsComponent } from './Back/Components/viewformations/viewformations.component';
import { FormationDetailsComponent } from './Back/components/formation-details/formation-details.component';
//import { FormationDetailsComponent } from './Back/components/formation-details/formation-details.component';
//import { FormationDetailsComponent } from './Back/components/formation-details/formation-details.component';
const routes: Routes = [
  { path: 'partner', component: ViewpartnersComponent },
  { path: 'partner/add', component: AddpartnerComponent },
 { path: 'partner/update/:partnerid', component: UpdatepartnerComponent },
 {path : 'partner/:partnerid', component: PartnerDetailsComponent},
 //{path : 'promo/:partnerid' , component:PartnerDetailsComponent},
 {path:'formation',component:ViewformationsComponent},
 {path : 'formation/:id' , component : FormationDetailsComponent},
 
  {path : '' , redirectTo : 'partner' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
