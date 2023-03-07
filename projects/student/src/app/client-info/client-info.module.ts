import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoComponent } from './client-info.component';
import { AddClientComponent } from './add-client.component';
import { ListClientComponent } from './list-client.component';
import { ViewClientComponent } from './view-client.component';
import { ClientInfoRoutingModule } from './client-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaskDirective } from './phone-mask.directive';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [ClientInfoComponent,AddClientComponent,ListClientComponent,ViewClientComponent,MaskDirective],
  imports: [
    CommonModule,
    ClientInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxMaskDirective, 
    NgxMaskPipe,
  ],
  exports: [
    MaskDirective
  ],
  providers: [provideNgxMask(),ApiService]
})
export class ClientInfoModule { }
