import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin.component';
import { ListAdminComponent } from './list-admin.component';


const routes: Routes = [
  { path: '', component: AddAdminComponent },
  { path: 'list', component: ListAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAdminRoutingModule { }
