import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'student', loadChildren: () => import('./student-details/student-details.module').then(m => m.StudentDetailsModule) },
  { path: 'client-info', loadChildren: () => import('./client-info/client-info.module').then(m => m.ClientInfoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
