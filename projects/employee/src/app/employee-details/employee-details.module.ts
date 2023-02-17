import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeDetailsModule { }
