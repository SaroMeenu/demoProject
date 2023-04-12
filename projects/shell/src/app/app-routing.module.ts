import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageComponent } from './mortgage/mortgage.component';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./../../../../projects/employee/src/app/employee-details/employee-details.module').then(m => m.EmployeeDetailsModule) },
  { path: 'student', loadChildren: () => import('./../../../../../microFrontEnds/projects/student/src/app/student-details/student-details.module').then(m => m.StudentDetailsModule) },
  { path: 'mortgage' , 
    component: MortgageComponent},
  { path: 'client-info', loadChildren: () => import('./../../../../../microFrontEnds/projects/student/src/app/client-info/client-info.module').then(m => m.ClientInfoModule) },
  { path: 'clients' , loadChildren: () => import('./../../../../../microFrontEnds/projects/clients/src/app/clients-add/clients-add.module').then(m => m.ClientsAddModule) },
  { path: 'admin' , loadChildren: () => import('./../../../../../microFrontEnds/projects/admin/src/app/add-admin/add-admin.module').then(m => m.AddAdminModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
