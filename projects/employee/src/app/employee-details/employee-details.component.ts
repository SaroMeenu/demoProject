import { Component } from '@angular/core';
import { EmployeeService } from 'projects/employee/services/employee.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  employeeData: any = [];
  employeeDetail: any = [];
  employeeProject: any = [];
  projectDetail: any = [];

  constructor(private employeeService: EmployeeService) {}  

   ngOnInit(){
    this.getEmployees();
   }

   getEmployees(){

    forkJoin({
      requestOne: this.employeeService.getEmployeeList(),
      requestTwo: this.employeeService.getEmployeeProjects(),
      requestThree: this.employeeService.getEmployeeDetails(),
      requestFour: this.employeeService.getProjectDetails(),
      
    }).subscribe(({requestOne, requestTwo,requestThree,requestFour}) => {
      this.employeeData = requestOne;
      this.employeeDetail = requestThree;
      this.employeeProject = requestTwo;
      this.projectDetail = requestFour;
      this.employeeData["employees"].forEach((item:any) => {
        this.employeeDetail["employeeDetails"].forEach((emp:any) =>{
          if(emp.empId == item.id){
            item.designation = emp.designation;
            item.department = emp.department;
          }
        })
        let projArr:Array<any> = [];
        this.employeeProject["employeeProject"].forEach((empProject:any) =>{
            if(empProject.empId == item.id){              
              projArr.push({id:empProject.project})
              item.project = projArr;
            }
            let projectName:Array<any> = [];
            this.projectDetail["projects"].forEach((project:any) =>{
              if(item.project){
                for (let index = 0; index < item.project.length; index++) {
                  if(project.id == item.project[index].id){
                    item.project[index].name = project.name;
                    projectName.push(item.project[index].name);
                    item.projectName = projectName.join(', ');
                  }
                }
            }  
          })
        })
      });
      this.employeeData = this.employeeData["employees"];
    });
   }
}
