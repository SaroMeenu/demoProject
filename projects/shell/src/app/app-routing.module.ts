import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageComponent } from './mortgage/mortgage.component';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./../../../../projects/employee/src/app/employee-details/employee-details.module').then(m => m.EmployeeDetailsModule) },
  { path: 'student', loadChildren: () => import('./../../../../../microFrontEnds/projects/student/src/app/student-details/student-details.module').then(m => m.StudentDetailsModule) },
  { path: 'mortgage' , 
    component: MortgageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
