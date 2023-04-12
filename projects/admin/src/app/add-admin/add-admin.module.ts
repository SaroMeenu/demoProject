import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin.component';
import { AddAdminFormComponent } from './add-admin-form.component';
import { AddAdminRoutingModule } from './add-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AddAdminComponent,AddAdminFormComponent],
  imports: [
    CommonModule,
    AddAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    StoreModule.forRoot({ })
  ],
  providers:[provideNgxMask()]
})
export class AddAdminModule { }
