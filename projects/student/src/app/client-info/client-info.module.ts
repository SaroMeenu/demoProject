import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoComponent } from './client-info.component';
import { AddClientComponent } from './add-client.component';
import { ListClientComponent } from './list-client.component';
import { ClientInfoRoutingModule } from './client-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientInfoComponent,AddClientComponent,ListClientComponent],
  imports: [
    CommonModule,
    ClientInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientInfoModule { }
