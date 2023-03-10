import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfoComponent } from './client-info.component';
import { AddClientComponent } from './add-client.component';
import { ListClientComponent } from './list-client.component';
import { ViewClientComponent } from './view-client.component';


const routes: Routes = [
  { path: '', component: ClientInfoComponent },
  { path: 'add-client', component: AddClientComponent},
  { path: 'list-client', component: ListClientComponent},
  { path: 'view-client', component: ViewClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientInfoRoutingModule { }
