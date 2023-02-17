import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
        
  }
   
  getEmployeeList() {
     return this.http.get('https://run.mocky.io/v3/79d50e29-1086-467e-a7e5-c68f5980187d');
  }
  getEmployeeProjects(){
    return this.http.get('https://run.mocky.io/v3/9a43032a-cfb5-4a4a-a85c-fb8d5faa425e');
  }
  getEmployeeDetails(){
    return this.http.get('https://run.mocky.io/v3/ff926ac1-ba70-4404-b76c-2deafbc9f62a');
  }
  getProjectDetails(){
    return this.http.get('https://run.mocky.io/v3/95496737-22ec-4bb1-966f-90115d7aed78');
  }
}
