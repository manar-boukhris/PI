import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpartnersComponent } from './Back/Components/viewpartners/viewpartners.component';
import { AddpartnerComponent } from './Back/Components/addpartner/addpartner.component';
import { UpdatepartnerComponent } from './Back/Components/updatepartner/updatepartner.component';
const routes: Routes = [
  { path: 'partner', component: ViewpartnersComponent },
  { path: 'partner/add', component: AddpartnerComponent },
 { path: 'partner/update/:partnerid', component: UpdatepartnerComponent },
 
  {path : '' , redirectTo : 'partner' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
