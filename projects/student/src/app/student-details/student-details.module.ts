import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details.component';
import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentDetailsComponent],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentDetailsModule { }
