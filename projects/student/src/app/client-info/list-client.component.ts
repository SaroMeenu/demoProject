import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html'
})
export class ListClientComponent {
    clientData: any;
    clientDataList: any;
    primaryData: any;

    constructor(private fb: FormBuilder,public apiService:ApiService) { } 

    ngOnInit(): void {
        this.getClientDetails();
    }

    getClientDetails(){
        this.clientData = localStorage.getItem('clientData');
        this.clientDataList = JSON.parse(this.clientData);
    }

    setAsPrimary(data:any){
        this.clientDataList.forEach((client:any) => {
            client.isPrimary = false;
            if(client.id === data.id){
                data.isPrimary = true;
                this.apiService.setUser(data);
            } 
        });
        localStorage.setItem("clientData", JSON.stringify(this.clientDataList));
    }

    deleteClient(data:any,i:any){
        let filterClient = this.clientDataList.filter((a:any) => a.isPrimary === true);
        if(data.id === filterClient[0].id){
            this.apiService.setUser('');
        } 
        this.clientDataList.splice(i, 1);        
        localStorage.setItem("clientData", JSON.stringify(this.clientDataList));
    }

}
